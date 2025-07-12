import express from "express";
import userRoute from "./routes/userRegister.routes.js";
import loginRoute from "./routes/userLogin.routes.js";
import createNoteRoute from "./routes/createNote.routes.js";
import getNotesRoute from "./routes/getNotes.routes.js";
import updateRoute from "./routes/updateNotes.routes.js";
import deleteRoute from "./routes/deleteNote.routes.js";
const app = express();

app.use(express.json());

//user registration
app.use("/noteApp", userRoute);

//user login
app.use("/noteApp", loginRoute);

//create note
app.use("/noteApp", createNoteRoute);

//get notes
app.use("/noteApp", getNotesRoute);

//update notes.
app.use("/noteApp", updateRoute);

//delete notes
app.use("/noteApp", deleteRoute);

export { app };
