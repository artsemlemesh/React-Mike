import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log('actionzzz', action);
    //   state.push(action.payload);
    return [...state, action.payload]

    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
