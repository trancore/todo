import { PrismaClient } from '@prisma/client';

import { TokenData } from '../types/authentication';

export const tokenRepository = async () => {
  const prisma = new PrismaClient();

  const saveToken = async (
    userId: number,
    { accessToken, refreshToken }: TokenData,
  ) => {
    await prisma.token.upsert({
      where: {
        id: userId,
      },
      update: {
        accessToken: accessToken,
        // TODO refreshTokenの取得
        refreshToken: refreshToken || 'hoge',
      },
      create: {
        user_id: userId,
        accessToken: accessToken,
        // TODO refreshTokenの取得
        refreshToken: refreshToken || 'hoge',
      },
    });
  };

  const deleteToken = async (userId: number) => {
    await prisma.token.deleteMany({
      where: {
        id: userId,
      },
    });
  };

  return { saveToken, deleteToken };
};
