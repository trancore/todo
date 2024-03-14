import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/store/root';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    displayed: false,
  },
  reducers: {
    display: (state) => {
      state.displayed = true;
    },
    undesplay: (state) => {
      state.displayed = false;
    },
  },
});

export const { display, undesplay } = toastSlice.actions;

export const selectToast = (state: RootState) => state.toast.displayed;

export default toastSlice.reducer;
