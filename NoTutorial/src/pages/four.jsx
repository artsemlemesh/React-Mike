import { useEffect } from "react";
import { useState } from "react";
import NewTodoForm from "../simple-todo-component/NewTodoForm";
import TodoList from "../simple-todo-component/todolist";
import "../simple-todo-component/style.css";

// const Four = () => {

//     const [todo, setTodo] = useState(()=>{
//         const localValue = localStorage.getItem('ITEMS')
//         if(localValue == null) return []

//         return JSON.parse(localValue)
//     })

//     useEffect(()=>{
//         localStorage.setItem('ITEMS', JSON.stringify(todo))
//     }, [todo])

//     function addTodo(title){
//         setTodo(currentItem => {
//             return [...currentItem, {id: crypto.randomUUID(), title, completed: false}]
//         })
//     }

//     function completedTodo(id, completed){
//         setTodo(currentItem =>{
//             return currentItem.map(todo=>{
//                 if(todo.id === id){
//                     return {...todo, completed}
//                 }
//                 return todo
//             })
//         })
//     }

//     function deleteTodo(id){
//         setTodo(currentItem=>{
//             return currentItem.filter(todo=> todo.id !== id)
//         })
//     }

//     return (
//         <div>
//                 <NewTodoForm onSubmit={addTodo}/>
//                 <h1>todo list</h1>
//                 <TodoList todo={todo} completedTodo={completedTodo} deleteTodo={deleteTodo} />
//         </div>
//     )

// }

// export default Four

const Four = () => {
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("items");
    if (localVal == null) return [];

    return JSON.parse(localVal);
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currItem) => {
      return [
        ...currItem,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currItem) => {
      return currItem.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currItem) => {
      return currItem.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="container">
      <div className="top">
        <NewTodoForm onSubmit={addTodo} />
      </div>

      <h1 className="title">my todos</h1>
      <div className="bottom">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};
export default Four;
