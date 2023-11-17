import { PrismaClient, User } from '@prisma/client';

import { UserData } from '../types/authentication';

export const userRepository = async () => {
  const prisma = new PrismaClient();

  const findUser = async (userId: number): Promise<User | null> => {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  };

  const saveUser = async ({
    nodeId,
    name,
    mailAddress,
  }: UserData): Promise<User> => {
    return await prisma.user.create({
      data: {
        node_id: nodeId,
        name: name,
        mail_address: mailAddress,
      },
    });
  };

  return { findUser, saveUser };
};
