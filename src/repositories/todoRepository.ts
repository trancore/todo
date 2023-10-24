﻿import { PrismaClient } from '@prisma/client';

import { PostTodo } from '../types/typescript-node/api';

export const todoRepository = async () => {
  const prisma = new PrismaClient();

  const findTodo = async (todoId: number) => {
    try {
      return await prisma.todo.findUniqueOrThrow({
        where: {
          id: todoId,
        },
      });
    } catch (error) {
      // TODO 一旦無視
      console.log(error);
    }
  };

  const findAllTodos = async () => {
    try {
      return await prisma.todo.findMany();
    } catch (error) {
      // TODO 一旦無視
    }
  };

  const createTodo = async ({ title, description, deadlineAt }: PostTodo) => {
    try {
      await prisma.todo.create({
        // TODO user_id を取得する。
        data: { title, description, deadline_at: deadlineAt, user_id: 1 },
      });
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { findTodo, findAllTodos, createTodo };
};
