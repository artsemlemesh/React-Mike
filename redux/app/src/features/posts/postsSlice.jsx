import { createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'first post', content: 'hello'},
    {id: 2, title: 'second post', content: 'more text'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer