import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '~/store/root';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    opened: false,
  },
  reducers: {
    open: (state) => {
      state.opened = true;
    },
    close: (state) => {
      state.opened = false;
    },
  },
});

export const { open, close } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
