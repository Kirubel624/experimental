import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    users: { token: "", data: null },
  },
  reducers: {
    getAllUser: (state, action) => {
      state.loading = action.payload.loading;
      state.users = action.payload.data;
      state.error = action.payload.error;
    },
    register: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
      state.error = action.payload.error;
    },
  },
});

export const { getAllUser } = userSlice.actions;
export default userSlice.reducer;
