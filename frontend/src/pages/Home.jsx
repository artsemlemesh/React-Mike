import { useState, useEffect } from "react"
import api from '../api'
import Note from "../components/Note";
import '../styles/Home.css'


function Home(){
    const [notes, setNotes] = useState([]);
    const [content, setContend] = useState('');
    const [title, setTitle] = useState('');

    useEffect (() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api
        .get('/api/notes/')
        .then((res) => res.data)
        .then((data) => {setNotes(data); console.log(data)})
        .catch((err) => alert(err));
    }

   
   
    return 

}

export default Home;