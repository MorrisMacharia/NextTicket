import { Request, Response, Router } from "express";
import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = Router();

router.post(
  "/signup",
  [
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please emter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);

      const prisma = new PrismaClient();

      const userExists = await prisma.user.findUnique({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }

      let password_hash = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: password_hash,
        },
      });

      res.status(200).json({
        success: true,
        data: user,
        message: "User created successfully",
      });
    } catch (err) {
      console.error("");
      res.status(500).send("Server error");
    }
  }
);

export { router as signUpRouter };
