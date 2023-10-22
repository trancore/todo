import express from 'express';

import { API } from './constants';

import { todoController } from './controllers/todoController';

import { CONFIG } from './configrations/config';

const PATH = `${API.API}/${CONFIG.API_VERSION}`;

const app = express();

app.use(express.json());
// controller
app.use(PATH, todoController);

app.listen(CONFIG.PORT, () => {
  console.log('server start.');
});
