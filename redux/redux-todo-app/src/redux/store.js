import { configureStore, createSlice } from '@reduxjs/toolkit';

import todosReducer from './todoSlice'
import userReducer from './userSlice'
import settingsReducer from './settingsSlice'
// Define initial state
// const initialState = {
//   todos: []
// };

// Create a slice of the state
// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);
//     },
//     deleteTodo: (state, action) => {
//         state.todos.pop()
//     }
//   }
// });

// export const { addTodo, deleteTodo } = todoSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    // todos: todoSlice.reducer//slice
    todos: todosReducer,
    user: userReducer,
    settings: settingsReducer
  }
});

export default store;
