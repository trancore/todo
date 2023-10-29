﻿import { todoRepository } from '../repositories/todoRepository';
import { PostTodo } from '../types/typescript-node/api';

export const todoService = async () => {
  const { findTodo, findAllTodos, createTodo, updateTodo } =
    await todoRepository();

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

  const putTodo = async (todoId: string, todo: PostTodo) => {
    const todoIdNum = Number(todoId);
    await updateTodo(todoIdNum, todo);
  };

  return { getTodo, getTodos, postTodo, putTodo };
};