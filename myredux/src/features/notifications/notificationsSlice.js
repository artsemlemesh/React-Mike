import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from '../../api/client'

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())

    //the purpost of the line is to quickly access the most recent notification without needing to use array indexing syntax like array[0]. it simplifies accessing elements in the array
    const [latestNotification] = allNotifications //is using destructuring, to extract the first element from the allNotifications and assign it to the variable latestNotification

    const latestTimestamp = latestNotification ? latestNotification.date : '' //if the array (allNotifications) is empty
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`,
    )
    return response.data
  },
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    allNotificationsRead(state, action) {
      state.forEach((notification) => {
        notification.read = true
      })
    },
  }, //was empty bcz all the logic is handled by the async actions
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      //fetchNotifications.fulfilled handles the successful async fetch of notification
      state.push(...action.payload) //adds them to the state
      state.forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read
      })

      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date)) //sorts them by date
    })
  },
})

export const { allNotificationsRead } = notificationsSlice.actions


export default notificationsSlice.reducer

export const selectAllNotifications = (state) => state.notifications
