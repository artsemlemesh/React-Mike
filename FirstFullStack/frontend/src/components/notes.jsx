import { useContext } from "react";
import { GlobalCont } from "../context/context";
import '../index.css'


const Note = (props) => {
  const { note } = props;
  const { completed, deleteNote, setCompleted } = useContext(GlobalCont);

  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  return (
    <div className="notes">
      <li>
        <label className="label">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              setCompleted(!completed);
            }}
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
