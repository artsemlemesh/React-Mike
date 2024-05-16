import { useEffect } from "react";
import { useState } from "react";
import NewTodoForm from "../simple-todo-component/NewTodoForm";
import TodoList from "../simple-todo-component/todolist";
import "../simple-todo-component/style.css";
import "../../api";
import api from "../../api";
import axios from "axios";

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
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos(){
      const res = await fetch(`http://127.0.0.1:8000/api/notes`)
      const data = res.json()
      setTodos(data)
      console.log(todos)
    }
    fetchTodos()
  }, []);

  const apiUrl = "http://127.0.0.1:8000";
  const endpoint = "/api/notes";

  // const fetchTodos = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + endpoint);
  //     console.log(response, 'RESPONSE')
  //     setTodos(response.data);

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const fetchTodos = () => {
  //   api
  //     .get("/api/notes/")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setTodos(data);
  //       console.log(data);
  //     }).catch((e)=>alert(e));
  // };


   




  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(todos));
  // }, [todos]);

  function addTodo(title) {
    setTodos((currItem) => {
      return [
        ...currItem,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // const addTodo = async (title) => {
  //   api.post('/api/notes/', {title, content: ''})
  //   .then((res)=> {
  //     if(res.status === 201){
  //       alert('created')
  //       setTodos((currTodos)=> [...currTodos, {id: res.data.id, title,completed: false}])
  //     }else{
  //       alert('failed')
  //     }
  //   })
  //   .catch((e)=> {
  //     console.error('error', e)
  //     alert('failed to create')
  //   }

  //   )
  //   }

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
