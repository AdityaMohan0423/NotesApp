import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Note } from "../models/note.model.js";
const router = express.Router();

router.put("/update/:noteID", verifyJWT, async (req, res) => {
  try {
    const noteID = req.params.noteID;
    const user = req.user;
    const { title, content } = req.body;

    const note = await Note.findById(noteID);

    if (!note || note.user.toString() !== user.id) {
      return res.status(401).json({
        success: false,
        message: "Note not Found",
      });
    }

    note.title = title;
    note.content = content;

    await note.save();

    res.status(200).json({
      success: true,
      message: "Note updated successfully !!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
