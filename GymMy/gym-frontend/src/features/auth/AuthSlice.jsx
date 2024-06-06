import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState = {
    user: null,
    status: 'idle',
    error: null
}


export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
    const response = await axios.post('/api/login', userData)
    return response.data
})


export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await axios.post('api/logout')
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //no synchronous actions for this slice
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload 
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null
        })
    }
})

export default authSlice.reducer