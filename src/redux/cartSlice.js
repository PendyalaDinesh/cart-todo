import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Orange', price: 2 }
  ], // sample products
  taxRate: 0.07
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(item => item.id === id);
      if (existing) {
        existing.quantity -= 1;
        if (existing.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
