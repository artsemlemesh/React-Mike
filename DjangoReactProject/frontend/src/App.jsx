import { useEffect, useState } from 'react'
import Book from './components/Book';
import SendBook from './components/SendBook';

function App() {
  const [books, setBooks] = useState([])



  useEffect (() => {
    async function fetchBooks() {
      const res = await fetch("http://127.0.0.1:8000/books/");
      res.json()
     .then(res => setBooks(res.response))
     .catch(err => setErrors(err));
    }
    fetchBooks();
 },[])




//   useEffect (() => {
//     setBooks([
//          {
//            "name":"Otostopçunun Galaksi Rehberi", 
//            "author":    "Douglas Adams", 
//            "description": "Lorem ipsum"
//          },
//          {
//            "name":"Hikayeler", 
//            "author":    "Edgar Allan Poe", 
//            "description": "Lorem ipsum sit door amet"
//          }
//       ])
// },[])

  return (
    <div className="App">
    <header className="App-header">
      <h1>DjangoReact</h1>
    </header>
    <div className="book-list">
      
      {books.map((book,index) => {
   return (<div key={index}>
     <Book book={book} key={index}/>
     
     </div>
     
   )}
)}
  {<SendBook />}
    </div>
  </div>
  )
}

export default App
