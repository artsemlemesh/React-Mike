import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/todoSlice";
import { login, logout } from "./redux/userSlice";
import { toggleTheme } from "./redux/settingsSlice";

function App() {

  const [newT, setNewT] = useState('')


  const todos = useSelector(state=>state.mytodos.items)
  const isAuth = useSelector(state=> state.user.isAuth)
  const user = useSelector(state=> state.user.data)
  const theme = useSelector(state=> state.settings.theme)
  const dispatch = useDispatch()

  const handleLogin = () => {
    const userData = {name: 'mike', id: 2}
    dispatch(login(userData))
  }

  const handleLogout = () => {
    dispatch(logout())
  }


  // const handleTodoA = () => dispatch => {
  //   setTimeout(() => {
  //     dispatch(addTodo(newT))
  //   }, 1000)
  //   console.log('hey')
  // }

  const handleAddTodo = () => {
    dispatch(addTodo(newT))
    setNewT('')
  }
  const handleDelete =() => {
    dispatch(deleteTodo())
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }


  return <>

    <h1>my todos:</h1>
    <ul>
    <input
    value={newT}
    onChange={(e)=>{setNewT(e.target.value)}}
    placeholder="type"
    />
    <button onClick={handleAddTodo}>add</button>
    <button onClick={handleDelete}>del</button>
    
    {todos.map((todo, index) => <li key={index}>{todo}</li> )}
    </ul>
    <button onClick={isAuth? handleLogout : handleLogin}>{isAuth? 'logout': 'login'}</button>
    <h4>current user is</h4>
    <h1> {isAuth? `name: ${user.name} id ${user.id}`: 'not logged in'}</h1>
  
    <button onClick={handleToggleTheme}>click</button>
    <p>theme is {theme}</p>
  </>;
}

export default App;
