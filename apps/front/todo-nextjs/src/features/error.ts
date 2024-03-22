import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/store/root';

import { scrollTop } from '~/utils/scroll';

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    displayed: false,
    text: '',
  },
  reducers: {
    show: (state, action: { payload: { text: string } }) => {
      state.text = action.payload.text;
      state.displayed = true;
      scrollTop();
    },
    hide: (state) => {
      state.displayed = false;
      state.text = '';
    },
  },
});

export const { show, hide } = errorSlice.actions;

export const selectError = (state: RootState) => state.error;

export default errorSlice.reducer;
