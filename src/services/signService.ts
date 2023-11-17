import { Request } from 'express';
import passport from 'passport';

import { AuthenticationData } from '../types/authentication';

import { tokenRepository } from '../repositories/tokenRepository';
import { userRepository } from '../repositories/userRepository';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  return done(null, user);
});

export const signService = async () => {
  const { saveUser, findUser } = await userRepository();
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
    req: Request<undefined, undefined, undefined, undefined>,
  ) => {
    try {
      const nodeId = req.user?.userData.nodeId;
      if (!nodeId) {
        // TODO 一旦エラーに飛ばす
        throw Error;
      }

      // TODO 一旦適当に指定する
      const user = await findUser(1);
      if (!user) {
        // TODO 一旦適当に渡す
        throw Error;
      }

      deleteToken(user.id);

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
    } catch (error) {
      // TODO 一旦適当に定義
    }
  };

  return { signIn, signOut };
};
