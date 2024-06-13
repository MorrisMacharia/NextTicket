import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import config from "../../../../config/config";
import prisma from "../../../../helpers/prisma";
import { UserRole } from "@prisma/client";
import { splitToken } from "../../../../helpers/splitToken";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("eventName") as string;
    const description = ""; // Add description if available
    const date = formData.get("eventDate") as string;
    const location = formData.get("eventLocation") as string;
    const earlyBirdTicketPrice = formData.get("ticketPriceEarlyBird") as string;
    const gateTicketPrice = formData.get("ticketPriceGate") as string;
    const advanceTicketPrice = formData.get("ticketPriceAdvance") as string;
    const image = formData.get("eventImage") as string;

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

    // Find if user exists and is admin
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
      select: {
        role: true,
      },
    });

    if (!user || user.role !== UserRole.ADMIN) {
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

    // Create event
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
