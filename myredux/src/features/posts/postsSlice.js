import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { client } from '../../api/client'

const initialState =
  //should be an object rather than array like before
  {
    posts: [],
    status: 'idle',
    error: null,
  }

//createAsyncThunk(one, two) one-prefix for the generated action types
//two - 'payload creator' callback func that should return/reject Promise
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (initialPost) => {
    const response = await client.post('/fakeApi/posts', initialPost)
    return response.data
  },
)

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
        //prepare formats the data before the action is dispatched(eg. adding a unique ID and timestamp)
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        }
      },
    },

    postUpdated(state, action) {
      //updates existing post based on the id
      const { id, title, content } = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
  extraReducers(builder) {
    //handles actions defined outside of the slice or that are async
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload) //updates the state with fetched posts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload) //adds newly created post to the state once the POST request is successful
      })
  },
})
//selectors used to derive or compute values from the state
export const selectAllPosts = (state) => state.posts.posts //returns all posts from the state
export const selectPostById = (state, postId) =>//returns posts by ID
  state.posts.posts.find((post) => post.id === postId)

export const selectPostsByUser = createSelector(//memoised selector, returns posts created by a specific user
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId),
)

export const { postAdded, postUpdated, reactionAdded } = postSlice.actions

export default postSlice.reducer
