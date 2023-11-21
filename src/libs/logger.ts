import { ErrorRequestHandler } from 'express';
import log4js from 'log4js';

import { loggerConfig } from '../configurations/logger';

log4js.configure(loggerConfig);

export const console = log4js.getLogger();
export const system = log4js.getLogger('system');

/** システムロガーモジュール */
export const systemLogger =
  (options = {}): ErrorRequestHandler =>
  (err, req, res, next) => {
    system.error(err.message);
    next(err);
  };
