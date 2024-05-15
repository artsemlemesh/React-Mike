import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./pages.css";
import { useContext, useState } from "react";
import { GlobalCont } from "../context/context";
import Note from "../components-todo/Note";

import api from '../../api'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const { theme } = useContext(GlobalCont);

  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const getNotes = () => {
    api
      .get("api/notes")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
      })
      .catch((e) => alert(e));
  };

  const createNote = (e) => {
    e.preventDefault()
    api.post('api/notes/', {content, title}).then((res)=> {if(res.status === 201) alert('note created') 
      else alert('failed');
    getNotes()
  }).catch((e)=> alert(e))
  }


  const deleteNote = (e) => {

  }

  return (
    <div className="one" data-theme={theme}>
      <div>
        Home
        {items.map((item, index) => (
          <a key={index} href={`/item/${item}`}>
            {" "}
            {item}{" "}
          </a>
        ))}
      </div>

      <div className="notes">
        <h1>Notes</h1>
          {notes.map((note)=> (
            <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            />
          ))}

      </div>
      <div>
        <h2>create note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">title:</label>

          <input
            id="title"
            required
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
          />

<label htmlFor="content">content:</label>

          <textarea
            id="content"
            required
            onChange={(e)=>setContent(e.target.value)}
            value={content}
          ></textarea>
          <button type="submit">submit</button>
        </form>

      </div>
    </div>
  );
};

export default Home;
