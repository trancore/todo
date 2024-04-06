import { createSlice } from '@reduxjs/toolkit';

import { TodoForm } from '~/types/todo';

import { RootState } from '~/store/root';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    title: '',
    description: '',
    deadlineAt: '',
  },
  reducers: {
    select: (state, action: { payload: TodoForm }) => {
      state.title = action.payload.title;
      state.description = action.payload.deadlineAt || '';
      state.deadlineAt = action.payload.deadlineAt || '';
    },
    release: (state) => {
      state.title = '';
      state.description = '';
      state.deadlineAt = '';
    },
  },
});

export const { select, release } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
