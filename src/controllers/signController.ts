import express from 'express';
import passport from 'passport';

const app = express;

export const signController = app.Router();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});

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
  (req, res) => {
    // TODO 暫定対応
    res.status(201).redirect('/');
  },
);

/**
 * SIGN-003 サインアウト
 */
signController.get('/sign_out', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      next(error);
    }
    res.status(201).redirect('/');
  });
});
