import { NextFunction } from 'express';
import passport from 'passport';

import { ExpressRequest } from '../types/express';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

export const signService = async () => {
  const signIn = async () => {
    let errorObject = {};
    try {
      await passport.authenticate('github', { scope: ['user:email'] });
    } catch (error) {
      // TODO: 一旦無視
    }

    return { errorObject };
  };

  const signOut = async (
    req: ExpressRequest<undefined, any, undefined, undefined, undefined>,
  ) => {
    // TODO: 一旦any型で定義
    let errorObject = {};
    req.logout((error) => {
      if (error) {
        errorObject = error;
      }
    });
    return { errorObject };
  };

  return { signIn, signOut };
};
