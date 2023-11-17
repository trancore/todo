import passport from 'passport';

import { AuthenticationData } from '../types/authentication';
import { ExpressRequest } from '../types/express';

import { tokenRepository } from '../repositories/tokenRepository';
import { userRepository } from '../repositories/userRepository';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  return done(null, user);
});

export const signService = async () => {
  const { saveUser } = await userRepository();
  const { saveToken, deleteToken } = await tokenRepository();

  const signIn = async (authData: AuthenticationData | undefined) => {
    try {
      // TODO 一旦適当に定義
      if (!authData) throw Error;

      const user = await saveUser(authData.userData);

      await saveToken(user.id, authData.tokenData);
    } catch (error) {
      // TODO: 一旦無視
    }
  };

  const signOut = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: ExpressRequest<undefined, any, undefined, undefined, undefined>,
  ) => {
    const nodeId = req.user?.userData.nodeId;

    if (!nodeId) {
      // TODO 一旦エラーに飛ばす
      throw Error;
    }

    deleteToken(nodeId);

    req.logout((error) => {
      if (error) {
        // TODO: 一旦errorそのものを返す
        throw error || 'error';
      }
    });
    req.session.destroy((error) => {
      // TODO: 一旦errorそのものを返す
      if (error) {
        throw error || 'error';
      }
    });
  };

  return { signIn, signOut };
};
