import { createSlice } from "@reduxjs/toolkit";



const settingsSlice = createSlice({
    name: 'settings',
    initialState:{
        theme: 'light'
    },
    reducers: {
        toggleTheme: state => {
            state.theme = state.theme === 'light'?'dark':'light'
        }
    }
})

export default settingsSlice.reducer
export const {toggleTheme} = settingsSlice.actions