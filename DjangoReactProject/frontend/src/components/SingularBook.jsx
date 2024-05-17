import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingularBook = (params) => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(`http://127.0.0.1:8000/books/${id}`);
      const data = await res.json();
      try {
        setBook(data);
      } catch (e) {
        console.log(e, "error");
      }
    }
    fetchBooks();
  }, []);


  return (<div>
    <h1>{book.name}</h1>
    <h3>{book.author}</h3>
    <p>{book.description}</p>
  </div>)


};

export default SingularBook;
