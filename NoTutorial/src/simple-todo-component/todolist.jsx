import TodoItem from "./todoitem";

// const TodoList = ({todo, completedTodo, deleteTodo}) => {

// return (
//     <ul>
//         {todo.length === 0 && 'no todos'}
//         {todo.map(td=>{
//             return (
//                 <TodoItem  {...td} key={td.id} completedTodo={completedTodo} deleteTodo={deleteTodo}/>
//             )
//         })}
//     </ul>
// )
// }

// export default TodoList

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {/* {todos.length === 0 && "no todos"} */}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
