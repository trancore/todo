import { ErrorRequestHandler } from 'express';
import log4js from 'log4js';

import { loggerConfig } from '../configurations/logger';

log4js.configure(loggerConfig);

export const console = log4js.getLogger();
export const system = log4js.getLogger('system');
export const logger = log4js.getLogger('application');

/** システムロガー */
export const systemLogger = (options = {}): ErrorRequestHandler => {
  return (err, req, res, next) => {
    system.error(err.message);
    next(err);
  };
};
