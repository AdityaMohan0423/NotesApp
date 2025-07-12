import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Note } from "../models/note.model.js";

const router = express.Router();

router.get("/get", verifyJWT, async (req, res) => {
  try {
    const Id = req.user.id;

    const notes = await Note.find({ user: Id }).sort({ createdAt: -1 });
    if (!notes) {
      return res.status(400).send("No Notes Found !!");
    }

    res.status(200).json({
      success: true,
      message: "Your Notes",
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
