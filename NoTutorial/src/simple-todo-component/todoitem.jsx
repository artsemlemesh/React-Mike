



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




const TodoItem = ({id, completed, title, toggleTodo, deleteTodo})=>{





return (<li>
    <input type="checkbox" checked={completed}
    onChange={e=>toggleTodo(e.target.value)}/>
    {title}
    <button onClick={()=> deleteTodo(id)}>del</button>
    fsd
</li>)



}
export default TodoItem
