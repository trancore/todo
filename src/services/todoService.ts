import { todoRepository } from '../repositories/todoRepository';
import { PostTodo } from '../types/typescript-node/api';

export const todoService = async () => {
  const { findAllTodos, createTodo } = await todoRepository();

  const getTodos = async () => {
    return await findAllTodos();
  };

  const postTodo = async (todo: PostTodo) => {
    await createTodo(todo);
  };

  return { getTodos, postTodo };
};
