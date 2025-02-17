import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    setDataCart: (state, action) => {
      state.cartData = action.payload;
    },
    addToCart: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item._id !== action.payload._id,
      );
    },
    emptyCart: (state) => {
      state.cartData = [];
    },
  },
});

export const { setDataCart, addToCart, removeFromCart, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
