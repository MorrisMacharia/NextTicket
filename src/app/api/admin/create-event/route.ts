import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import config from "../../../../config/config";
import formidable from "formidable";
import prisma from "../../../../helpers/prisma";
import { UserRole } from "@prisma/client";
import { splitToken } from "../../../../helpers/splitToken";
import { upload } from "../../../../helpers/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const {
      title,
      description,
      date,
      location,
      earlyBirdTicketPrice,
      gateTicketPrice,
      advanceTicketPrice,
      // image,
    } = await req.json();

    // Handle Image Upload
    const form = new formidable.IncomingForm();

    let image: any;

    const formParsePromise = new Promise<void>((resolve, reject) => {
      form.parse(req.bodyReader.read(), async (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        if (files.image) {
          // Check if the 'image' file field exists
          try {
            const uploadResult = await upload(files.image.filepath);
            image = uploadResult.secure_url; // Get the uploaded image URL
            resolve();
          } catch (err) {
            reject(err);
            return;
          }
        } else {
          resolve(); // Resolve if there's no image
        }
      });
    });

    await formParsePromise;

    let token: string | string[] | undefined = req.headers.getSetCookie();

    if (Array.isArray(token)) {
      token = token[0];
    }

    if (!token) {
      return new NextResponse("No token, authorization denied", {
        status: 401,
      });
    }

    let loggedToken = splitToken(token);

    const decoded = jwt.verify(loggedToken, config.JWT_SECRET);

    const payload = decoded as { id: string; email: string; role: UserRole };

    //find if user exists
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
      select: {
        role: true,
      },
    });

    if (user && user.role !== UserRole.ADMIN) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Not authorized to create event",
        }),
        {
          status: 400,
        }
      );
    }

    const eventExists = await prisma.event.findUnique({
      where: {
        title,
      },
      select: {
        title: true,
        description: true,
      },
    });

    if (eventExists) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Event already exists",
        }),
        {
          status: 400,
        }
      );
    }

    //Admin to create event
    let newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date,
        location,
        earlyBirdTicketPrice,
        gateTicketPrice,
        advanceTicketPrice,
        image,
        createdBy: {
          connect: {
            id: payload.id,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: newEvent,
        message: "Event created successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify(err));
  }
}
