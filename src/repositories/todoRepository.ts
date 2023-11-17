import { PrismaClient } from '@prisma/client';

import { PostTodoRequest, PutTodosTodoIdRequest } from '../types/api/todos';

export const todoRepository = async () => {
  const prisma = new PrismaClient();

  const findTodo = async (todoId: number) => {
    return await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
  };

  const findAllTodos = async () => {
    return await prisma.todo.findMany();
  };

  const createTodo = async ({
    title,
    description,
    deadlineAt,
  }: PostTodoRequest) => {
    await prisma.todo.create({
      // TODO user_id を取得する。
      data: {
        title,
        description,
        deadline_at: deadlineAt && new Date(deadlineAt),
        user_id: 1,
      },
    });
  };

  const updateTodo = async (
    todoId: number,
    { title, description, deadlineAt }: PutTodosTodoIdRequest,
  ) => {
    await prisma.todo.update({
      where: {
        id: todoId,
      },
      // TODO user_id を取得する。
      data: {
        title,
        description,
        deadline_at: deadlineAt && new Date(deadlineAt),
        user_id: 1,
      },
    });
  };

  const deleteTodo = async (todoId: number) => {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
  };

  return { findTodo, findAllTodos, createTodo, updateTodo, deleteTodo };
};
