import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    data: { token: "", data: null },
  },
  reducers: {
    login: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
    register: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.loading = "";
      state.data = "";
      state.error = "";
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
