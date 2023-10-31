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
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
);

signController.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  },
);
