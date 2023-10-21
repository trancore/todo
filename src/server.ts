import express from 'express';
import { CONFIG } from './configrations/config';

const app = express();

app.listen(CONFIG.PORT, () => {
  console.log('server start.');
});
