import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import config from "../../../../config/config";
// import { splitToken } from "../../../../helpers/prisma";
import prisma from "../../../../helpers/prisma";
import { UserRole } from "@prisma/client";
import { splitToken } from "../../../../helpers/splitToken";

export async function POST(req: NextRequest) {
  try {
    const { title, description, date, location, price, image } =
      await req.json();

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
        price,
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
