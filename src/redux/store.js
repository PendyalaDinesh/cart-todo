// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    addCart: cartReducer,  // shopping cart reducer
    todo: todoReducer      // ✅ register todo slice under `todo`
  },
});

export default store;
