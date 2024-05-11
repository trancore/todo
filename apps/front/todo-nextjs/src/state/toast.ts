import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/store/root';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    displayed: false,
    text: '',
  },
  reducers: {
    show: (state, action: { payload: { text: string } }) => {
      state.text = action.payload.text;
      state.displayed = true;
    },
    hide: (state) => {
      state.displayed = false;
      state.text = '';
    },
  },
});

export const { show, hide } = toastSlice.actions;

export const selectToast = (state: RootState) => state.toast;

export default toastSlice.reducer;
