import axios from "axios";
import { createContext, useState } from "react";



export const GlobalCont = createContext(null)


export default function GlobalState({children}){
    const [completedNotes, setCompletedNotes] = useState([])


    const setCompleted = (noteId, isChecked) => {
        setCompletedNotes((prevCompleted)=> {
            if(isChecked){
                return [...prevCompleted, noteId]

            }else{
                return prevCompleted.filter((id)=> id !== noteId)
            }
        })
    }

    // const [completed, setCompleted] = useState(false)
    console.log('completed', completedNotes)

    const deleteNote = (id) => {
        axios.delete(`http://127.0.0.1:8000/notes/delete/${id}`)
        console.log('note has been deleted')
    
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

    }

    const [notes, setNotes] = useState([])


    const fetchNotes = async () =>{
        const res = await fetch('http://127.0.0.1:8000/notes/')
        const data = await res.json()
        setNotes(data)
    }
    

 

    return (
        <GlobalCont.Provider value={{completedNotes, deleteNote, setCompleted, fetchNotes, notes, setNotes}}>
            {children}
        </GlobalCont.Provider>
    )

}