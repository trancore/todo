import { rootStore } from '~/store/root';

import { todoApi as todoApiSlice } from '~/services/todo';

import { server } from '@/__mocks__/server';

export const store = rootStore;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  store.dispatch(todoApiSlice.util.resetApiState());
});

afterAll(() => server.close());
