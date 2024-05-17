import { useEffect, useState } from 'react'
import Book from './components/Book';
import SendBook from './components/SendBook';


import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SingularBook from './components/SingularBook';
import NavBar from './components/nav';


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
 },[books])



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

// export default App



export default function Landing(){

  return(
    
<BrowserRouter>
<NavBar/>
  <Routes>


  <Route path='books/:id' element={<SingularBook />}/>
  <Route path='books/' element={<Book  />}/>
  <Route path='/' element={<App/>}/>
  <Route path='/create-book' element={<SendBook/>}/>



</Routes>
</BrowserRouter>
  )
}
