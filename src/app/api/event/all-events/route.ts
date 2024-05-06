import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
// Set up route to get all events
export async function GET(req: NextRequest, res: Response) {
  try {
    const prisma = new PrismaClient();

    const events = await prisma.event.findMany({
      select: {
        title: true,
        description: true,
        date: true,
        location: true,
        image: true,
        createdBy: {
          select: {
            email: true,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: events,
        message: "Events retrieved successfully",
      })
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify(err));
  }
}
