import { paths } from '../openapi';

export type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
