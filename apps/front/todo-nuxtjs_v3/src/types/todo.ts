export type Todo = {
  id: number;
  userId: number;
  title: string;
  description?: string;
  deadlineAt?: string;
  status: 'TODO' | 'WIP' | 'DONE';
  createdAt: string;
  updatedAt: string;
};
