import type { Todo } from '~/types/todo';

export const useTodoStore = defineStore('todoStore', () => {
  const todo: Todo = {
    id: NaN,
    userId: NaN,
    title: '',
    status: 'WIP',
    createdAt: '',
    updatedAt: '',
  };

  return { todo };
});
