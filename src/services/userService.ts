import { GetUserResponse } from '../types/api/users';

import { userRepository } from '../repositories/userRepository';

export const userService = async () => {
  const { findUser } = await userRepository();

  const getUser = async (
    userId: number,
  ): Promise<GetUserResponse | undefined> => {
    try {
      const user = await findUser(userId);

      // TODO 一旦適当にエラーを渡す
      if (!user || user === null) {
        throw Error;
      }

      return {
        userId: user.id,
        nodeId: user.node_id,
        name: user.name,
        mailAddress: user.mail_address || undefined,
        createdAt: user.created_at.toLocaleString(),
        updatedAt: user.updated_at.toLocaleString(),
      };
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { getUser };
};
