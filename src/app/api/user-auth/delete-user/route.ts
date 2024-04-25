// import the required dependencies
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../helpers/prisma";

// Define the delete route handler
export async function DELETE(req: NextRequest, res: Response) {
  try {
    // Extract the user ID from the request parameters
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) {
      new NextResponse(
        JSON.stringify({
          message: "user id is required",
        })
      );
    }

    // Check if the user with the provided ID exists
    const user = await prisma.user.findUnique({
      where: {
        id: String(id),
      },
    });

    // If the user doesn't exist, return a 404 error
    if (!user) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "User not found",
        }),
        {
          status: 404,
        }
      );
    }

    // If the user exists, delete it from the database
    await prisma.user.delete({
      where: {
        id: String(id),
      },
    });

    // Return a success message
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "User deleted successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (err) {
    // If an error occurs, log it and return an error response
    console.error(err);
    return new NextResponse(JSON.stringify(err));
  }
}
