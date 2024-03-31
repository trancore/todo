import { paths } from '../openapi';

export type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];

export type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];

export type PostTodoResponse =
  paths['/todos']['post']['responses']['201']['content'];

export type TodosTodoIdParams = paths['/todos/{todo_id}']['parameters']['path'];

export type GetTodosTodoIdResponse =
  paths['/todos/{todo_id}']['get']['responses']['200']['content']['application/json'];

export type PutTodosTodoIdRequest =
  paths['/todos/{todo_id}']['put']['requestBody']['content']['application/json'];

export type PutTodosTodoIdResponse =
  paths['/todos/{todo_id}']['put']['responses']['204']['content'];

export type DeleteTodosTodoIdResponse =
  paths['/todos/{todo_id}']['delete']['responses']['204']['content'];

export type PutTodosTodoIdStatusParams =
  paths['/todos/{todo_id}/status']['parameters']['path'];

export type PutTodosTodoIdStatusRequest =
  paths['/todos/{todo_id}/status']['put']['requestBody']['content']['application/json'];

export type PutTodosTodoIdStatusResponse =
  paths['/todos/{todo_id}/status']['put']['responses']['204']['content'];
