import { PrismaClient } from '@prisma/client';

import { UserData } from '../types/authentication';

export const userRepository = async () => {
  const prisma = new PrismaClient();

  const findUser = async (userId: number) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      return user;
    } catch (error) {
      // TODO 一旦無視
    }
  };

  const saveUser = async ({ node_id, name, mail_address }: UserData) => {
    try {
      const user = await prisma.user.create({
        // TODO user_id を取得する。
        data: {
          node_id: node_id,
          name: name,
          mail_address: mail_address,
        },
      });
      return user.id;
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { findUser, saveUser };
};
