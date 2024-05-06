import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../../helpers/prisma";

export async function POST(req: NextRequest, res: Response) {
  try {
    const { lastname,firstname, email, password, role } = await req.json();
    console.log({ lastname,firstname, email, password, role });

    //find if user already exists
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "User already exists",
        }),
        {
          status: 400,
        }
      );
    }
    // create user in db and crypt password
    let password_hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: password_hash,
        role,
      },
    });
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: user,
        message: "User created successfully",
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
