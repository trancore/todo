import { PrismaClient } from '@prisma/client';

export const todoRepository = async () => {
  const prisma = new PrismaClient();

  const findAllTodos = async () => {
    try {
      return await prisma.todo.findMany();
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { findAllTodos };
};
