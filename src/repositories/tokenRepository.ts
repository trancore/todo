import { PrismaClient } from '@prisma/client';

import { TokenData } from '../types/authentication';

export const tokenRepository = async () => {
  const prisma = new PrismaClient();

  const saveToken = async (
    userId: number,
    { accessToken, refreshToken }: TokenData,
  ) => {
    try {
      await prisma.token.upsert({
        where: {
          id: userId,
        },
        update: {
          accessToken: accessToken,
          refreshToken: refreshToken || 'hoge',
        },
        create: {
          user_id: userId,
          accessToken: accessToken,
          refreshToken: refreshToken || 'hoge',
        },
      });
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { saveToken };
};
