import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Note } from "../models/note.model.js";
const router = express.Router();

router.delete("/delete/:noteID", verifyJWT, async (req, res) => {
  try {
    const noteID = req.params.noteID;
    const user = req.user;

    const note = await Note.findById(noteID);

    if (!note || note.user.toString() !== user.id) {
      return res.status(401).json({
        success: false,
        message: "Note not Found",
      });
    }

    await Note.findByIdAndDelete(noteID);

    res.status(200).json({
      success: true,
      message: "Note Deleted successfuly!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
