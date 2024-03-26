import { createSlice } from '@reduxjs/toolkit';

import { TodoForm } from '~/types/todo';

import { RootState } from '~/store/root';

export const todoModalSlice = createSlice({
  name: 'todoModal',
  initialState: {
    displayed: false,
    todo: {
      title: '',
      description: '',
      deadlineAt: '',
    },
  },
  reducers: {
    open: (
      state,
      action: {
        payload: TodoForm;
      },
    ) => {
      state.todo.title = action.payload.title;
      state.todo.description = action.payload.description || '';
      state.todo.deadlineAt = action.payload.deadlineAt || '';
      state.displayed = true;
    },
    close: (state) => {
      state.todo.title = '';
      state.todo.description = '';
      state.todo.deadlineAt = '';
      state.displayed = false;
    },
  },
});

export const { open, close } = todoModalSlice.actions;

export const selectTodoModal = (state: RootState) => state.todoModal;

export default todoModalSlice.reducer;
