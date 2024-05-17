import { useContext } from "react";
import { GlobalCont } from "../context/context";

const Note = (props) => {
  const { note } = props;
 const {completed, deleteNote} = useContext(GlobalCont)

    const formattedDate = new Date(note.created_at).toLocaleDateString('en-US')

    
  return (
    <div>
      <li>
        <label><input
        type="checkbox" checked={completed}
        />
        <h1>{note.title}</h1>
        <h2>{note.content}</h2>

        <h2>{formattedDate}</h2>
        </label>
        <button onClick={()=> deleteNote(note.id)}>delete</button>
        
      </li>
    </div>
  );
};

export default Note;
