import { createSlice } from '@reduxjs/toolkit';

import { TodoForm } from '~/types/todo';

import { RootState } from '~/store/root';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    id: '',
    title: '',
    description: '',
    deadlineAt: '',
  },
  reducers: {
    select: (
      state,
      action: { payload: { id: string; todoForm: TodoForm } },
    ) => {
      state.id = action.payload.id;
      state.title = action.payload.todoForm.title;
      state.description = action.payload.todoForm.description || '';
      state.deadlineAt = action.payload.todoForm.deadlineAt || '';
    },
    release: (state) => {
      state.id = '';
      state.title = '';
      state.description = '';
      state.deadlineAt = '';
    },
  },
});

export const { select, release } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
