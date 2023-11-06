import passport from 'passport';

import { AuthenticationData } from '../types/authentication';
import { ExpressRequest } from '../types/express';

import { tokenRepository } from '../repositories/tokenRepository';
import { userRepository } from '../repositories/userRepository';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

export const signService = async () => {
  const { saveUser } = await userRepository();
  const { saveToken } = await tokenRepository();

  const signIn = async (authData: AuthenticationData | undefined) => {
    try {
      if (!authData) throw Error;

      const userId = await saveUser(authData.userData);
      if (!userId) throw Error;

      await saveToken(userId, authData.tokenData);
    } catch (error) {
      // TODO: 一旦無視
    }
  };

  const signOut = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
