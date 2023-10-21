import express from 'express';

import { todoController } from './controllers/todoController';

import { CONFIG } from './configrations/config';

const app = express();

// controller
app.use('/api', todoController);

app.listen(CONFIG.PORT, () => {
  console.log('server start.');
});
