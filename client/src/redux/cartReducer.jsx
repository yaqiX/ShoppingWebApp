import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item){
        item.quantity += action.payload.quantity;
      } else{
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
  },
});

export const { addToCart, removeFromCart } = counterSlice.actions;

// Export the reducer
export default cartSlice.reducer; // Change "counterslice" to "counterSlice"
