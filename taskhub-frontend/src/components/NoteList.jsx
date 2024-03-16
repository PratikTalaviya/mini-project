import React, { useState, useEffect, useContext } from "react";
import { getNotes } from "../services/api"; // Import API function to fetch notes
import UserContext from "../context/UserContext";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(UserContext);
  const userId = user;
  console.log(userId);

  // Fetch notes from the backend when the component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const fetchedNotes = await getNotes(userId); // Call API function to fetch notes
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            {/* Display other note details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
