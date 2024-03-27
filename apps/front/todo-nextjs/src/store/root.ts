import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createWrapper } from 'next-redux-wrapper';

import errorReducer from '~/features/error';
import modalReducer from '~/features/modal';
import toastReducer from '~/features/toast';

import { todoApi } from '~/services/todo';

export type AppStore = typeof rootStore;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const rootStore = configureStore({
  reducer: {
    toast: toastReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    error: errorReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export const wrapper = createWrapper<AppStore>(() => rootStore, {});

setupListeners(rootStore.dispatch);
