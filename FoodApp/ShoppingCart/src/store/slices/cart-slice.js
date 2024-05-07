import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        console.log('actionzzz', action);
      state.items.push(action.payload);
    // return [...state, action.payload]

    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
