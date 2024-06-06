import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { client } from "../../app/api/client"

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}



export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/api/posts')
    // console.log(response.data, 'response')
    return response.data
})

//NEED TO SET UP BACKEND FOR ADD AND FETCH, also add user
export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (initialPost) => {
        console.log('hel')
        const response = await axios.post('/api/posts', initialPost)
            console.log(response, 'post.response')
        return response.data
    }
)


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.posts.push(action.payload)
        },
        postUpdated: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[index] = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.posts = state.posts.concat(action.payload)//append the new posts to the existing posts in the state
            // state.posts = action.payload  //replace the current state with the new posts
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled, (state, action)=>{
            state.posts.push(action.payload)//adds newly created post
        })
    }   
})

export const {postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer