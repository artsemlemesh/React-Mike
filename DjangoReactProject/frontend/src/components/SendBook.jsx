import axios from 'axios'
import { useState } from 'react';

function SendBook(props){
    const [book, setBook] = useState(
      { name : "", author: "", description: ""}
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
      e.preventDefault()
      axios.defaults.xsrfCookieName ='csrftoken';
      axios.defaults.xsrfHeaderName ='X-CSRFToken';

    //   const csrfToken = document.cookie.match(/csrftoken=([^ ;]+)/)[1];
    //     console.log(csrfToken, 'hey')

      axios.post('http://127.0.0.1:8000/create-book', book, {headers: {"X-CSRFToken": 'csrftoken'} })
      .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
     })
    }
    return(
     <div className="book-create">
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" value={book.name} onChange={handleChange} />
         <input type="text" name="author" value={book.author} onChange={handleChange} />
         <textarea name="description" value={book.description} onChange={handleChange} ></textarea>
         <button> Save </button>
       </form>
     </div>
    )
  }

export default SendBook