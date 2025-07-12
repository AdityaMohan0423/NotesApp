import express, { Router } from "express";
import { User } from "../models/user.model.js";
import { generateJWT } from "../utils/generateJWT.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password are required!",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User Not Found",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({
        success: false,
        message: "Password is Wrong !",
      });
    }

    const token = generateJWT(user._id);

    res.status(200).json({
      success: true,
      message: "Login Successfull !!",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
});

export default router;
