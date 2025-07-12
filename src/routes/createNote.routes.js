import express, { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Note } from "../models/note.model.js";
const router = express.Router();

router.post("/create", verifyJWT, async (req, res) => {
  try {
    console.log("Reached to the /create route");

    const user = req.user; // from verifyJWT
    const { title, content } = req.body;
    console.log(req.body, user);
    const note = await Note.create({ title, content, user: user.id });

    res.status(200).json({
      success: true,
      message: "Note created successfully !!",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `caught an error in CreateNote.routes.js, error : ${error.message}`,
    });
  }
});

export default router;
