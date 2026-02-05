import { createSlice } from '@reduxjs/toolkit';

import { ModelType } from '~/types/todo';

import { RootState } from '~/store/root';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    displayedDetail: false,
    displayedEdit: false,
  },
  reducers: {
    open: (state, action: { payload: { type: ModelType } }) => {
      if (action.payload.type === 'DETAIL') {
        state.displayedDetail = true;
      }
      if (action.payload.type === 'EDIT') {
        state.displayedEdit = true;
      }

      // typeが無い場合は何もしない
    },
    close: (state) => {
      state.displayedDetail = false;
      state.displayedEdit = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
