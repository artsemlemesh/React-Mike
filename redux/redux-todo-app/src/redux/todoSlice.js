import { createSlice } from "@reduxjs/toolkit";

//create a slice of the state
const todoSlice = createSlice({
    name: 'todos',
    initialState: {//defined here, but can be outside
        items: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.items.pop()
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer