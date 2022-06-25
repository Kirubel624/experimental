import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "blogpost",
  initialState: {
    loading: false,
    order: [],
    error: null,
  },
  reducers: {
    order: (state, action) => {
      state.loading = action.payload.loading;
      state.order = action.payload.order;
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

export const { order } = orderSlice.actions;
export default orderSlice.reducer;
