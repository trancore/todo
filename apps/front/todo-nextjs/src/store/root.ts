import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createWrapper } from 'next-redux-wrapper';

import errorReducer from '~/features/error';
import menuReducer from '~/features/menu';
import modalReducer from '~/features/modal';
import toastReducer from '~/features/toast';
import todoReducer from '~/features/todo';

import { todoApi } from '~/services/todo';

export type AppStore = typeof rootStore;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const rootStore = configureStore({
  reducer: {
    error: errorReducer,
    menu: menuReducer,
    modal: modalReducer,
    toast: toastReducer,
    todo: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export const wrapper = createWrapper<AppStore>(() => rootStore);

setupListeners(rootStore.dispatch);
