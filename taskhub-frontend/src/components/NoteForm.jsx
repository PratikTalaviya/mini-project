import React, { useContext, useState } from "react";
import { createNote } from "../services/api";
import toast from "react-hot-toast";
import UserContext from "../context/UserContext";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);
  const userId = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNote(userId, { title, content });
      toast.success("Note Saved!!");

      // Optionally, update state or show a success message
    } catch (error) {
      console.error(error);
      toast.error(`Note Not Created!!! `);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
