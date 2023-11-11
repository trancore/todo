import express from 'express';
import { use } from 'passport';

import { ExpressRequest, ExpressResponse } from '../types/express';
import { paths } from '../types/openapi';

import { userService } from '../services/userService';

type GetUserResponse =
  paths['/user']['get']['responses']['200']['content']['application/json'];

const app = express;

export const userController = app.Router();

const { getUser } = await userService();

/**
 * USER-001	会員情報取得
 */
userController.get(
  '/user',
  async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: ExpressRequest<undefined, any, undefined, undefined, any>,
    res: ExpressResponse<GetUserResponse, undefined>,
  ) => {
    // TODO 一旦定数を渡す
    const user = await getUser(1);

    if (user === null || !user) {
      return;
    }

    res.json(JSON.parse(user));
  },
);
