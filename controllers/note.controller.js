import Note from '../models/note.js';

export const getNotes = async (req, res) => {
   try {
     const notes = await Note.find();
    res.json(notes);
   } catch (error) {
    res.status(500).json({error:"Error getting notes"});
   }
};


export const getNoteById = async (req,res) => {
    try {
        const { id } = req.params;
    const note = await Note.findById(id);

    if (!Note) {
        return res.status(404).json({error: "Note not found"});
    }
    res.json(note);
    } catch (error) {
        res.status(400).json({error:"Invalid note id"});
    }
};


export const createNote = async (req, res) => {
try {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
} catch (error) {
    res.status(500).json({error:"Error creating note"});
}
};


export const updateNote = async (req, res) => {
   try {
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, req.body,{returnDocument:"after",});
    if (!updateNote) {
        return res.status(404).json({error: "Note not found"});
    }
    res.json(updatedNote);
   } catch (error) {
    res.status(400).json({error: "Invalid note id"});
   }
};


export const deleteNote = async (req, res) => {
   try {
    const {id} = req.params;
    const deletedNote= await Note.findByIdAndDelete(id);
    if (!deletedNote) {
        return res.status(404).json({error: "Note not found"});
    }
    res.status(204).send();
   } catch (error) {
    res.status(400).json({error:"Invalid note id"});
   }
};

