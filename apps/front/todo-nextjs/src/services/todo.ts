import { createApi } from '@reduxjs/toolkit/query/react';
import { Action, PayloadAction } from '@reduxjs/toolkit/react';
import { HYDRATE } from 'next-redux-wrapper';

import { paths } from '~/types/openapi';

import { todoAxiosBaseQuery } from '~/libs/reduxQuery';

import { RootState } from '~/store/root';

import { STATUS } from '~/constants';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;
type PutTodosTodoIdStatusPath =
  paths['/todos/{todo_id}/status']['put']['parameters']['path'];
type PutTodosTodoIdStatusRequest =
  paths['/todos/{todo_id}/status']['put']['requestBody']['content']['application/json'];
type PutTodosTodoIdStatusResponse = undefined;

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
    getTodos: builder.query<GetTodosResponse, string>({
      query: (status) => ({ url: `/todos?status=${status}`, method: 'get' }),
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
    changeStatusTodo: builder.mutation<
      PutTodosTodoIdStatusResponse,
      PutTodosTodoIdStatusPath & PutTodosTodoIdStatusRequest
    >({
      query: ({ todo_Id: todoId, status }) => ({
        url: `/todos/${todoId}/status`,
        method: 'put',
        data: {
          status,
        },
      }),
      async onQueryStarted({ todo_Id }, { dispatch }) {
        dispatch(
          todoApi.util.updateQueryData(
            'getTodos',
            `${STATUS.TODO},${STATUS.WIP}`,
            (draft) => {
              return draft.filter((value) => value.id !== todo_Id);
            },
          ),
        );
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useChangeStatusTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;
export const { getTodos } = todoApi.endpoints;
