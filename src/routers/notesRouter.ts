import { Router } from "express";
import { createNote, deleteNote, getNotes, getOneNote } from "../controllers/notesController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { notesSchema } from "../schemas/schemas.js";

const notesRouter = Router();

notesRouter.post("/notes", validateSchema(notesSchema), validateToken, createNote);
notesRouter.get("/notes", validateToken, getNotes);
notesRouter.get("/notes/:id", validateToken, getOneNote);
notesRouter.delete("/notes/:id", validateToken, deleteNote);

export default notesRouter;