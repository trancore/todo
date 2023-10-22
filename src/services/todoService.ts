import { todoRepository } from '../repositories/todoRepository';

export const todoService = async () => {
  const { findAllTodos } = await todoRepository();

  const getTodos = async () => {
    return await findAllTodos();
  };

  return { getTodos };
};
