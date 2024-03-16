const Note = require("../models/Note");
// const userId = "65eb2826666409606a7d163e";

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    // const userId = req.user._id; // Assuming user ID is stored in the request object after authentication
    const userId = req.params.userId;
    console.log(userId);
    const note = new Note({ title, content, userId });
    await note.save();

    res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getNotes = async (req, res) => {
  try {
    // const userId = req.user._id;
    const userId = req.params.userId;
    const notes = await Note.find({ userId });
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const updates = req.body;
    const updatedNote = await Note.findByIdAndUpdate(noteId, updates, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
