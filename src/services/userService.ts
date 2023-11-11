import { paths } from '../types/openapi';

import { userRepository } from '../repositories/userRepository';

type GetUser =
  paths['/user']['get']['responses']['200']['content']['application/json'];

export const userService = async () => {
  const { findUser } = await userRepository();

  const getUser = async (userId: number): Promise<GetUser> => {
    try {
      const user = await findUser(userId);

      if (!user || user === null) {
        throw Error;
      }

      return {
        userId: user.id,
        nodeId: user.node_id,
        name: user.name,
        mailAddress: user.mail_address || undefined,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      };
    } catch (error) {
      // TODO 一旦無視
    }
  };

  return { getUser };
};
