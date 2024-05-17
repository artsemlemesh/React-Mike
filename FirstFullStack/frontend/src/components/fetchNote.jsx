import { useEffect, useState } from "react";
import Note from "./notes";


function Func(){
    const [notes, setNotes] = useState([])


    useEffect(()=>{
        async function fetchNotes(){
            const res = await fetch('http://127.0.0.1:8000/notes/')
            const data = await res.json()
            setNotes(data)
        }
        fetchNotes()

    }, [notes])

    return(<div>
        {notes.map((note, index) => {
            return(<ul key={index}>
                <Note note={note} key={index} />
            </ul>)
        })}
    </div>)
}

export default Func