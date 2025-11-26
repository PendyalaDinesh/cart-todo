import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
