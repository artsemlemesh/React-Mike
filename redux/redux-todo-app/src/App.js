import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todoSlice';
import { login, logout } from './redux/userSlice';
import { toggleTheme } from './redux/settingsSlice';

function App() {
  const [newTodo, setNewTodo] = useState('');

  //select data from the Redux store
  const todos = useSelector((state) => state.todos.items);//check what inside the locker(second todos is a name)
  const user = useSelector((state) => state.user.data)
  const isAuth = useSelector(state => state.user.isAuth)
  const theme = useSelector(state => state.settings.theme)
  const dispatch = useDispatch();//key, dispatch is for adding new things to the locker

  const handleLogin = () => {
    const userData = {name: 'Mike', id: 1}//dummy data
    dispatch(login(userData))
  }


  const handleLogout = () => {
    dispatch(logout())
  }

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleRemoveTodo = () => {
    dispatch(deleteTodo())
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div>
      <h1>todo</h1>
      <div>
        <button onClick={handleLogin}> LogIn </button>
        <button onClick={handleLogout}> LogOut </button>
        <p>User status: {isAuth ? `logged in as ${user.name} id: ${user.id}`: 'not logged in'}</p>
      </div>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleRemoveTodo}>Remove Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>


      <button onClick={handleToggleTheme}>toggle theme</button>
        <p>current theme: {theme}</p>
    </div>
  );
}

export default App;
