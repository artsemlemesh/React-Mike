import axios from "axios";
import { useEffect, useState } from "react";

function SendBook({  }) { // Optional prop for handling success

  const [book, setBook] = useState({ name: "", author: "", description: "" });
  const [errors, setErrors] = useState(null); // State for potential errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
    setErrors(null); // Clear errors on user input change
  };

//   useEffect(()=>{
//     handleSubmit
//   }, [book])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/create-book/", book);
      const newBook = response.data; // Assuming response contains the newly created book data

      // Handle successful creation (optional)
      // if (onBookCreated) {
      //   onBookCreated(newBook); // Call the callback function from App.js (if provided)
      // } else {
      //   console.log("Book created successfully:", newBook); // Default success message
      // }
      console.log("Book created successfully:", newBook)
      setBook({ name: "", author: "", description: "" }); // Reset form after success
    } catch (error) {
      console.error("Error creating book:", error);
      setErrors(error.message || "An error occurred while creating the book."); // Handle errors gracefully
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Book</h2>
      {errors && <p className="error-message">{errors}</p>} {/* Display errors if any */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={book.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        name="author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={book.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Book</button>
    </form>
  );
}

export default SendBook;
