import { useState } from "react";
import axios from "axios";

function CreateNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",

  });
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
    setErrors(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("one");
      const res = await axios.post("http://127.0.0.1:8000/create-note/", note);
      console.log("two");
      const newNote = res.data;
      console.log("three");

      setNote(newNote);
    } catch (e) {
      console.error(e, "error creating new note");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new note</h2>
      {errors && <p className="error-message">{errors}</p>}
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="content">Content:</label>
      <input
        id="content"
        name="content"
        type="text"
        value={note.content}
        onChange={handleChange}
        required
      />
      <button type="submit">create note</button>
    </form>
  );
}

export default CreateNote;
