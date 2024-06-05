import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'


const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {//allows the slice to respond to actions defined outside of the slice, useful for handling actions from createAsyncThunk
        builder.addCase(fetchUsers.fulfilled, (state, action) => {//fetchUsers is defined outside the slice
            return action.payload
        })
    }
})

export default usersSlice.reducer


export const selectAllUsers = state => state.users

export const selectUserById = (state, userId) => 
    state.users.find(user => user.id === userId)

