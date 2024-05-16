import './style.css'



// const TodoItem = ({id, completed, title, completedTodo, deleteTodo}) => {

//     return (
//         <li>
//             <label>
//                 <input
//                     type="checkbox" checked={completed}
//                     onChange={e=>completedTodo(id, e.target.checked)}
//                 />
//                 {title}
//             </label>
//             <button onClick={()=>deleteTodo(id)}>delete</button>
//         </li>
//     )

// }

// export default TodoItem



const TodoItem = ({id, completed, title, toggleTodo, deleteTodo}) => {



    return (
        <li>
            <label>
                <input
                type="checkbox" checked={completed}
                    onChange={e=>toggleTodo(id, e.target.checked)}
                />
                {title}

            </label>
            <button onClick={()=> deleteTodo(id)}>delete</button>
        </li>
    )

}

export default TodoItem