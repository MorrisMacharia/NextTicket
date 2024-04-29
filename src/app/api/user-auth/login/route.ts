import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../../config/config";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../helpers/prisma";

export async function POST(req: NextRequest, res: Response) {
  try {
    const { email, password } = await req.json();

    //find if user exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid credentials",
        }),
        {
          status: 400,
        }
      );
    }

    //check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid credentials",
        }),
        {
          status: 400,
        }
      );
    }

    //Generate token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    delete user.password;

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: user,
        token,
        message: "User logged in successfully",
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
