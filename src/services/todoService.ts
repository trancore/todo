import { todoRepository } from '../repositories/todoRepository';
import { PostTodo } from '../types/typescript-node/api';

export const todoService = async () => {
  const { findTodo, findAllTodos, createTodo } = await todoRepository();

  const getTodo = async (todoId: string) => {
    const todoIdNum = Number(todoId);
    if (!todoIdNum) {
      // TODO エラーハンドリング
      return;
    }

    return await findTodo(todoIdNum);
  };

  const getTodos = async () => {
    return await findAllTodos();
  };

  const postTodo = async (todo: PostTodo) => {
    await createTodo(todo);
  };

  return { getTodo, getTodos, postTodo };
};
