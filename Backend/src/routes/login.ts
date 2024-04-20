import { Request, Response, Router } from "express";
import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config";

const router = Router();

//Loginr route
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      const prisma = new PrismaClient();

      //find if user exists
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      //checkif password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      //Generate token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        config.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      //Allow cookie session

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
      });

      res.status(200).json({
        success: true,
        data: user,
        token,
        message: "User logged in successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
);
export { router as loginRouter };
