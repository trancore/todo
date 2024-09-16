import { createApi } from '@reduxjs/toolkit/query/react';
import { Action, PayloadAction } from '@reduxjs/toolkit/react';
import { HYDRATE } from 'next-redux-wrapper';

import { paths } from '~/types/openapi';

import { todoAxiosBaseQuery } from '~/libs/reduxQuery';

import { RootState } from '~/store/root';

import { PAGE_PATH, STATUS } from '~/constants';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;
type DeleteTodosTodoIdParams =
  paths['/todos/{todo_id}']['delete']['parameters']['path'];
type DeleteTodosTodoIdResponse = undefined;
type PutTodosTodoIdParams =
  paths['/todos/{todo_id}']['put']['parameters']['path'];
type PutTodosTodoIdRequest =
  paths['/todos/{todo_id}']['put']['requestBody']['content']['application/json'];
type PutTodosTodoIdResponse = undefined;
type PutTodosTodoIdStatusPath =
  paths['/todos/{todo_id}/status']['put']['parameters']['path'];
type PutTodosTodoIdStatusRequest =
  paths['/todos/{todo_id}/status']['put']['requestBody']['content']['application/json'];
type PutTodosTodoIdStatusResponse = undefined;
/** storeのクエリ判別用に画面のURLパス名用型定義 */
type PathName = { pathname: string };

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
    deleteTodo: builder.mutation<
      DeleteTodosTodoIdResponse,
      DeleteTodosTodoIdParams & PathName
    >({
      query: ({ todo_id: todoId }) => ({
        url: `/todos/${todoId}`,
        method: 'delete',
      }),
      async onQueryStarted(
        { todo_id, pathname },
        { dispatch, queryFulfilled },
      ) {
        const args =
          pathname === PAGE_PATH.COMPLETED
            ? STATUS.DONE
            : `${STATUS.TODO},${STATUS.WIP}`;
        const result = dispatch(
          todoApi.util.updateQueryData('getTodos', args, (draft) => {
            return draft.filter((value) => value.id !== Number(todo_id));
          }),
        );

        queryFulfilled.catch(result.undo);
      },
    }),
    editTodo: builder.mutation<
      PutTodosTodoIdResponse,
      PutTodosTodoIdParams & PutTodosTodoIdRequest
    >({
      query: ({ todo_id: todoId, title, description, deadlineAt }) => ({
        url: `/todos/${todoId}`,
        method: 'put',
        data: {
          title,
          description,
          deadlineAt,
        },
      }),
      async onQueryStarted(
        { todo_id: todoId, title, description, deadlineAt },
        { dispatch, queryFulfilled },
      ) {
        const result = dispatch(
          todoApi.util.updateQueryData(
            'getTodos',
            `${STATUS.TODO},${STATUS.WIP}`,
            (draft) => {
              const updatedTodo = { title, description, deadlineAt };
              return draft.map((value) =>
                value.id === Number(todoId)
                  ? { ...value, ...updatedTodo }
                  : value,
              );
            },
          ),
        );

        queryFulfilled.catch(result.undo);
      },
    }),
    changeStatusTodo: builder.mutation<
      PutTodosTodoIdStatusResponse,
      PutTodosTodoIdStatusPath & PutTodosTodoIdStatusRequest & PathName
    >({
      query: ({ todo_id: todoId, status }) => ({
        url: `/todos/${todoId}/status`,
        method: 'put',
        data: {
          status,
        },
      }),
      async onQueryStarted(
        { todo_id: todoId, pathname },
        { dispatch, queryFulfilled },
      ) {
        const args =
          pathname === PAGE_PATH.COMPLETED
            ? STATUS.DONE
            : `${STATUS.TODO},${STATUS.WIP}`;
        const result = dispatch(
          todoApi.util.updateQueryData('getTodos', args, (draft) => {
            return draft.filter((value) => value.id !== Number(todoId));
          }),
        );

        queryFulfilled.catch(result.undo);
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useChangeStatusTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;
export const { getTodos } = todoApi.endpoints;
