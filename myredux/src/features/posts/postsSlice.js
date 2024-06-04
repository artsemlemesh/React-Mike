import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'first post', content: 'hello' },
  { id: 2, title: 'second post', content: 'more text' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        //action signal that smth happened in the app, and they provide the info about what needs to be changed in the state, type-describes the kind of change, payload provides the data necessary for change
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },

    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postSlice.actions

export default postSlice.reducer
