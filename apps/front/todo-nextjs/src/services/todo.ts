import { createApi } from '@reduxjs/toolkit/query/react';
import { Action, PayloadAction } from '@reduxjs/toolkit/react';
import { HYDRATE } from 'next-redux-wrapper';

import { paths } from '~/types/openapi';

import { todoAxiosBaseQuery } from '~/libs/reduxQuery';

import { RootState } from '~/store/root';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: todoAxiosBaseQuery(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTodos: builder.query<GetTodosResponse, void>({
      query: () => ({ url: '/todos', method: 'get' }),
    }),
    createTodo: builder.mutation<PostTodoResponse, PostTodoRequest>({
      query: ({ title, description, deadlineAt }) => ({
        url: '/todos',
        method: 'post',
        data: {
          title: title,
          description: description,
          deadlineAt: deadlineAt,
        },
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;
export const { getTodos } = todoApi.endpoints;
