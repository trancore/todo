import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import github from 'passport-github2';

import { CONFIG } from './configrations/config';
import { SESSION_CONFIG } from './configrations/session';

import { API } from './constants';

import { signController } from './controllers/signController';
import { todoController } from './controllers/todoController';

import { TokenData, UserData } from './types/authentication';

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
app.use(auth.initialize());
app.use(auth.session());

auth.use(
  new github.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: process.env.GITHUB_CALLBACK_URL || '',
    },
    (
      accessToken: string,
      refreshToken: string | null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      profile: any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      done: any,
    ) => {
      const userData: UserData = {
        nodeId: profile.nodeId,
        name: profile.username,
        mailAddress: profile._json_email,
      };
      const tokenData: TokenData = { accessToken, refreshToken };
      return done(null, { userData, tokenData });
    },
  ),
);

// controller
app.use(PATH, todoController);
app.use(PATH, signController);

app.listen(CONFIG.PORT, () => {
  console.log('server start.');
});
