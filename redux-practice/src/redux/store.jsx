import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todoSlice'
import userReducer from './userSlice'
import settingsReducer from './settingsSlice'



const store = configureStore({
    reducer:{
        mytodos: todosReducer,
        user: userReducer,
        settings: settingsReducer
    }
})

export default store