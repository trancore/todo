import { paths } from '../openapi';

export type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];

export type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];

export type PostTodoResponse =
  paths['/todos']['post']['responses']['201']['content'];

export type PostTodosTodoIdParams =
  paths['/todos/{todo_id}']['get']['parameters']['path'];

export type PostTodosTodoIdResponse =
  paths['/todos/{todo_id}']['get']['responses']['200']['content']['application/json'];
