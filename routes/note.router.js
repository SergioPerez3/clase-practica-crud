import { Router } from "express";

const router = Router();

import Note from "../models/Note.js"

router.get("/note", async (req, res) => {
    const notes = await Note.find()
    res.json(notes);
})

export default router;