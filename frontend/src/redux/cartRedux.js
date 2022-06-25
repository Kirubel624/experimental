import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Books: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addBook: (state, action) => {
      state.quantity += 1;
      state.Books.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeBook: (state,action) => {
       state.quantity -=1 ;
      state.Books.pop(action.payload,1)
      state.total -=action.payload.price*action.payload.quantity;
    },
  },
});

export const { addBook ,removeBook} = cartSlice.actions;
export default cartSlice.reducer;
