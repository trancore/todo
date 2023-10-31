import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import github from 'passport-github2';

import { API } from './constants';

import { signController } from './controllers/signController';
import { todoController } from './controllers/todoController';

import { CONFIG } from './configrations/config';
import { SESSION_CONFIG } from './configrations/session';

dotenv.config();

const PATH = `${API.API}/${CONFIG.API_VERSION}`;

const app = express();
const auth = passport;

app.use(express.json());
app.use(
  session({
    name: SESSION_CONFIG.NAME,
    resave: true,
    saveUninitialized: false,
    secret: SESSION_CONFIG.SEACRET,
    cookie: { maxAge: SESSION_CONFIG.COOKIE.MAX_AGE },
  }),
);

auth.use(
  new github.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: process.env.GITHUB_CALLBACK_URL || '',
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
      return done(null, profile);
    },
  ),
);

// controller
app.use(PATH, todoController);
app.use(PATH, signController);

app.listen(CONFIG.PORT, () => {
  console.log('server start.');
});
