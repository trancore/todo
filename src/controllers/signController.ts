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

signController.get(
  '/sign_in',
  passport.authenticate('github', { scope: ['user:email'] }),
);

signController.get(
  '/auth/callback',
  passport.authenticate('github'),
  function (req, res) {},
);
