import { http } from 'msw';
import { paths } from '~/types/openapi';

type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;

export const handlers = [
  http.post('/todos', async ({ request, params, cookies }) => {
    console.log('POST: /todos req:', request.json());
  }),
];
