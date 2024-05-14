import { createSlice } from '@reduxjs/toolkit';

import { TodoForm } from '~/types/todo';

import { RootState } from '~/store/root';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isTodoForm = (arg: any): arg is TodoForm => {
  return (
    typeof arg.title === 'string' &&
    typeof arg.description === 'string' &&
    typeof arg.deadlineAt === 'string'
  );
};

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
      if (typeof action.payload.id !== 'string') return;
      if (!isTodoForm(action.payload.todoForm)) return;

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
