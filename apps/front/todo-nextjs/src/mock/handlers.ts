import { HttpResponse, StrictResponse, http } from 'msw';

import { paths } from '~/types/openapi';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];

export const handlers = [
  http.get(
    `${process.env.TODO_API_URL}/todos`,
    async (): Promise<StrictResponse<GetTodosResponse>> => {
      return HttpResponse.json(
        [
          {
            id: 1,
            userId: 1,
            title: 'title1',
            description: 'description1',
            deadlineAt: '2024-03-17 17:25:10.247',
            status: 'TODO',
            createdAt: '2024-03-01 17:25:10.247',
            updatedAt: '2024-03-01 17:25:10.247',
          },
          {
            id: 2,
            userId: 1,
            title: 'titletitletitletitletitletitletitletitletitletitle',
            description:
              'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription1',
            deadlineAt: '2024-03-02 17:25:10.247',
            status: 'TODO',
            createdAt: '2024-03-02 17:25:10.247',
            updatedAt: '2024-03-02 17:25:10.247',
          },
          {
            id: 3,
            userId: 1,
            title: 'title undefined',
            status: 'TODO',
            createdAt: '2024-03-02 17:25:10.247',
            updatedAt: '2024-03-02 17:25:10.247',
          },
          {
            id: 4,
            userId: 1,
            title: 'title WIP',
            status: 'WIP',
            createdAt: '2024-03-02 17:25:10.247',
            updatedAt: '2024-03-02 17:25:10.247',
          },
          {
            id: 5,
            userId: 1,
            title: 'title DONE',
            status: 'DONE',
            createdAt: '2024-03-02 17:25:10.247',
            updatedAt: '2024-03-02 17:25:10.247',
          },
        ],
        { status: 200 },
      );
    },
  ),
  http.post(`${process.env.TODO_API_URL}/todos`, async () => {
    return new HttpResponse(undefined, { status: 201 });
  }),
];
