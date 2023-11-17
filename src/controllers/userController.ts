import express, { Request, Response } from 'express';

import { GetUserResponse } from '../types/api/users';

import { userService } from '../services/userService';

const app = express;

export const userController = app.Router();

const { getUser } = await userService();

/**
 * 会員情報取得
 */
userController.get(
  '/user',
  async (
    req: Request<undefined, GetUserResponse, undefined, undefined>,
    res: Response<GetUserResponse>,
  ) => {
    // TODO 一旦定数を渡す
    const user = await getUser(1);

    // TODO 一旦保留
    if (!user) {
      return;
    }

    res.json(user);
  },
);
