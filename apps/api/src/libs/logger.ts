import { ErrorRequestHandler } from 'express';
import log4js from 'log4js';

import { loggerConfig } from '../configurations/logger';

type AccessLoggerOptions = {
  format?: log4js.Format | undefined;
  level?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nolog?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  statusRules?: any[] | undefined;
  context?: boolean | undefined;
};

log4js.configure(loggerConfig);

export const console = log4js.getLogger();
export const system = log4js.getLogger('system');
export const logger = log4js.getLogger('application');
export const access = log4js.getLogger('access');

/** システムロガー */
export const systemLogger = (options = {}): ErrorRequestHandler => {
  return (err, req, res, next) => {
    system.error(err.message);
    next(err);
  };
};

/**
 * アクセスロガー
 * any型を許容しているのは、log4jsに合わせるため。
 * @param options ロガーオプション
 * @returns any コネクトロガー
 */
export const accessLogger = (options?: AccessLoggerOptions) => {
  const option: typeof options = {
    level: options?.level || 'auto',
    format: (req, res, formatter) => {
      return formatter(`:method :status :url req: ${JSON.stringify(req.body)}`);
    },
    ...options,
  };
  return log4js.connectLogger(access, option);
};
