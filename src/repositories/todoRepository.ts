import { PrismaClient } from '@prisma/client';

export const todoRepository = async () => {
  const prisma = new PrismaClient();

  const findAllTodos = async () => {
    return await prisma.user.findMany();
  };

  return { findAllTodos };
};
