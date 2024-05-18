import { useContext, useEffect, useState } from "react";
import Note from "./notes";
import CreateNote from "./createNote";
import { GlobalCont } from "../context/context";


function Func(){
    // const [notes, setNotes] = useState([])

    const {fetchNotes, notes, setNotes} = useContext(GlobalCont)

    useEffect(()=>{
        
        fetchNotes()

    }, [])

    // const fetchNotes = async () =>{
    //     const res = await fetch('http://127.0.0.1:8000/notes/')
    //     const data = await res.json()
    //     setNotes(data)
    // }

  

    return(<div>
        {notes.map((note, index) => {
            return(<ul key={index}>
                <Note note={note} key={index} />
            </ul>)
        })}
        {<CreateNote/>}
    </div>)
}

export default Func