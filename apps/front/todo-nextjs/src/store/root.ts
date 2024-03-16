import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import errorReducer from '~/features/error';
import toastReducer from '~/features/toast';

import { todoApi } from '~/services/todo';

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const rootStore = configureStore({
  reducer: {
    toast: toastReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(rootStore.dispatch);
