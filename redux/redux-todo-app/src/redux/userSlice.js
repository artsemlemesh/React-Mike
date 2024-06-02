import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user', 
    initialState: {
        isAuth: false,
        data: null
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.data = action.payload
        },
        logout: (state) => {
            state.isAuth = false;
            state.data = null
        }

    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer