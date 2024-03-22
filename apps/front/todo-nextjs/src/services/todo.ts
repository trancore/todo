import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { paths } from '~/types/openapi';

import { todoAxiosBaseQuery } from '~/libs/reduxQuery';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: todoAxiosBaseQuery(),
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

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi;
