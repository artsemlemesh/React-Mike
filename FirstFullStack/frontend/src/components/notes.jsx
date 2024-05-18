import { useContext, useEffect, useState } from "react";
import { GlobalCont } from "../context/context";
import '../index.css'


const Note = (props) => {
  const { note } = props;
  const { deleteNote, setCompleted, fetchNotes } = useContext(GlobalCont);

  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (e)=> {
    setIsChecked(e.target.checked)

    setCompleted(note.id, e.target.checked)
  }

  return (
    <div className="notes">
      <li>
        <label className="label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
          <h1>{note.title}</h1>
          <h2>{note.content}</h2>

        </label>
        <h2>{formattedDate}</h2>

        <button onClick={() => deleteNote(note.id)}>delete</button>
      </li>
    </div>
  );
};

export default Note;
