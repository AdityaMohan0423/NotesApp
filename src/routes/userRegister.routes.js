import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "Email,Password and Username are required",
      });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "User created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(`Error in user registration`, error);
    res.status(500).json({
      success: false,
      message: "Error in user registration",
    });
  }
});

export default router;
