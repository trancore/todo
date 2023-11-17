import express, { Request, Response } from 'express';
import passport from 'passport';

import { ExpressRequest, ExpressResponse } from '../types/express';

import { signService } from '../services/signService';

const app = express;

export const signController = app.Router();

const { signIn, signOut } = await signService();

/** サインイン */
signController.get(
  '/sign_in',
  passport.authenticate('github', { scope: ['user:email'] }),
);

/** サインインコールバック */
signController.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  async (
    req: Request<undefined, undefined, undefined, undefined>,
    res: Response<undefined>,
  ) => {
    await signIn(req.user);
    // TODO 暫定対応
    res.status(201).end();
  },
);

/**
 * SIGN-003 サインアウト
 */
signController.get(
  '/sign_out',
  async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: ExpressRequest<undefined, any, undefined, undefined, undefined>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: ExpressResponse<any, undefined>,
  ) => {
    await signOut(req);

    // TODO 暫定対応
    res.status(201).json();
  },
);
