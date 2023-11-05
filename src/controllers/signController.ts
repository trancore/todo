import express from 'express';
import passport from 'passport';

import { signService } from '../services/signService';
import { ExpressRequest, ExpressResponse } from '../types/express';

const app = express;

export const signController = app.Router();

const { signIn, signOut } = await signService();

/**
 * SIGN-002 サインイン
 */
signController.get(
  '/sign_in',
  passport.authenticate('github', { scope: ['user:email'] }),
);

signController.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  (
    req: ExpressRequest<undefined, any, undefined, undefined, undefined>,
    res: ExpressResponse<any, undefined>,
  ) => {
    // TODO 暫定対応
    res.status(201).redirect('/');
  },
);

/**
 * SIGN-003 サインアウト
 */
signController.get(
  '/sign_out',
  async (
    req: ExpressRequest<undefined, any, undefined, undefined, undefined>,
    res: ExpressResponse<any, undefined>,
  ) => {
    const { errorObject } = await signOut(req);

    if (errorObject) {
      // TODO: 一旦何も記載しない
    }

    // TODO 暫定対応
    res.status(201).redirect('/');
  },
);
