import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    posts: [],
  status: 'idle',
  error: null},
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postAdded: {
      reducer(state, action) {
        //action signal that smth happened in the app, and they provide the info about what needs to be changed in the state, type-describes the kind of change, payload provides the data necessary for change
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
          },
        }
      },
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postSlice.actions

export default postSlice.reducer


export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => 
    state.posts.posts.find(post => post.id === postId)