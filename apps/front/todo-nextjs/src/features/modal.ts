import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/store/root';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    displayed: false,
  },
  reducers: {
    open: (state) => {
      state.displayed = true;
    },
    close: (state) => {
      state.displayed = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
