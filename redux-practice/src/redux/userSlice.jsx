import { createSlice } from "@reduxjs/toolkit";



const  userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        data: null
    },
    reducers: {
        login: (state, action) => {//we put action bcz this reducer does need to know what else data it should be adding to the login
            state.isAuth = true,
            state.data = action.payload
        },
        logout: (state) => {// no data no action
            state.isAuth = false,
            state.data = null
        }
    }
})

export default userSlice.reducer
export const {login, logout} = userSlice.actions