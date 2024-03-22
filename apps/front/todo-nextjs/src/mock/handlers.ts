import { HttpResponse, http } from 'msw';

export const handlers = [
  http.post(`${process.env.TODO_API_URL}/todos`, async () => {
    return new HttpResponse(undefined, { status: 201 });
  }),
];
