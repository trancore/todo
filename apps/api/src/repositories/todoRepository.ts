﻿import { $Enums, Prisma, PrismaClient } from '@prisma/client';

import {
  PostTodoRequest,
  PutTodosTodoIdRequest,
  PutTodosTodoIdStatusRequest,
} from '../types/api/todos';

export const todoRepository = async () => {
  const prisma = new PrismaClient();

  const findTodo = async (todoId: number) => {
    return await prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });
  };

  const findAllTodos = async (statusList: $Enums.STATUS[] | undefined) => {
    return await prisma.todo.findMany({
      where: {
        OR: statusList?.map((stat) => {
          return { status: stat };
        }),
      },
    });
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

  const putTodoStatus = async (
    todoId: number,
    { status }: PutTodosTodoIdStatusRequest,
  ) => {
    await prisma.todo.update({
      where: {
        id: todoId,
      },
      data: {
        status: status,
      },
    });
  };

  return {
    findTodo,
    findAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    putTodoStatus,
  };
};
