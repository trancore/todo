import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createWrapper } from 'next-redux-wrapper';
import errorReducer from '~/state/error';
import menuReducer from '~/state/menu';
import modalReducer from '~/state/modal';
import toastReducer from '~/state/toast';
import todoReducer from '~/state/todo';

import { todoApi } from '~/services/todo';

export type AppStore = typeof rootStore;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof rootStore.dispatch;

const rootReducer = combineReducers({
  error: errorReducer,
  menu: menuReducer,
  modal: modalReducer,
  toast: toastReducer,
  todo: todoReducer,
  [todoApi.reducerPath]: todoApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
    preloadedState,
  });
};

export const rootStore = setupStore();

export const wrapper = createWrapper<AppStore>(() => rootStore);

setupListeners(rootStore.dispatch);
