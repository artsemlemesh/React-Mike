import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log(data, 'data');
    return data;
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  const response = await fetch("http://127.0.0.1:8000/logout/", {
    method: "POST",
    credentials: "include",
  });
  if(!response.ok){
    throw new Error('Logout failed')
  }

  return {}
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //no synchronous actions for this slice
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
