import { HttpResponse, http } from 'msw';
import { paths } from '~/types/openapi';

type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];
type PostTodoResponse = undefined;

export const handlers = [
  http.post(
    `${process.env.TODO_API_URL}/todos`,
    async ({ request, params, cookies }) => {
      console.log('POST: /todos req:', request.json());
      return new HttpResponse(undefined, { status: 201 });
    },
  ),
];
