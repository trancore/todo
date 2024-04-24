import express, { Request, Response } from 'express';
import passport from 'passport';

import { signService } from '../services/signService';

const app = express;

export const signController = app.Router();

const { signIn, signOut } = await signService();

/** サインイン */
signController.post(
  '/sign_in',
  passport.authenticate('github', { scope: ['user:email'] }),
);

/** サインインコールバック */
signController.post(
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

/** サインアウト */
signController.post(
  '/sign_out',
  async (
    req: Request<undefined, undefined, undefined, undefined>,
    res: Response<undefined>,
  ) => {
    await signOut(req);

    // TODO 暫定対応
    res.status(201).end();
  },
);
