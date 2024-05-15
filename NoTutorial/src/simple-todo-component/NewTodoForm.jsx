// import { useEffect, useState } from "react"

import { useState } from "react"



// const NewTodoForm = ({onSubmit}) => {
//     const[newItem, setNewItem] = useState('')

//     function handleSubmit(e){
//         e.preventDefault()

//         if(newItem === '') return

//         onSubmit(newItem)

//         setNewItem('')

//     }

//     return <div>
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="todo">new todo: </label>
//             <input
//                 id='todo'
//                 value={newItem}
//                 onChange={(e)=> setNewItem(e.target.value)}
//             />

//         </div>
//         <div>
//             <button type="submit">click</button>
//         </div>
//         </form>
//     </div>


// }


// export default  NewTodoForm







const NewTodoForm = ({onSubmit}) => {
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        if(newItem === '') return

        onSubmit(newItem)

        setNewItem('')
    }



    return (<div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="form">todo</label>
            <input
                id='form'
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)}
            />
            <button type="submit"> click!</button>

        </form>
    </div>)



}
export default  NewTodoForm