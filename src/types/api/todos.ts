import { paths } from '../openapi';

export type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];

export type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];

export type PostTodoResponse =
  paths['/todos']['post']['responses']['201']['content'];

export type GetTodosTodoIdParams =
  paths['/todos/{todo_id}']['parameters']['path'];

export type GetTodosTodoIdResponse =
  paths['/todos/{todo_id}']['get']['responses']['200']['content']['application/json'];

export type PutTodosTodoIdResponse =
  paths['/todos/{todo_id}']['get']['responses']['200']['content']['application/json'];
