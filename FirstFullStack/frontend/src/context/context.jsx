import axios from "axios";
import { createContext, useState } from "react";



export const GlobalCont = createContext(null)


export default function GlobalState({children}){
    const [completed, setCompleted] = useState(false)
    console.log('completed', completed)

    const deleteNote = (id) => {
        axios.delete(`http://127.0.0.1:8000/notes/delete/${id}`)
        console.log('note has been deleted')
    }
    

 

    return (
        <GlobalCont.Provider value={{completed, deleteNote, setCompleted}}>
            {children}
        </GlobalCont.Provider>
    )

}