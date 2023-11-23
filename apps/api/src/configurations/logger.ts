import log4js from 'log4js';
import path from 'path';
import { fileURLToPath } from 'url';
import util from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_DIR = path.join(__dirname, '../logs');

/** ログの共通レイアウト設定 */
const layout: log4js.Layout = {
  type: 'pattern',
  pattern: '[%d{yyyy-MM-dd hh:mm:ss}] %[%5p%] %f:%l -%c: %x{singleLine}',
  tokens: {
    singleLine: function (logEvent: { data: Array<unknown> }) {
      return logEvent.data
        .map((d) => {
          if (
            typeof d === 'boolean' ||
            typeof d === 'number' ||
            typeof d === 'string'
          ) {
            return d.toString().replace(/\n/gm, '\\n');
          } else {
            return util
              .inspect(d, { breakLength: Infinity })
              .replace(/\n/gm, '\\n');
          }
        })
        .filter((d) => d.length > 0)
        .join(' ');
    },
  },
};

/**
 * ロガー設定
 *
 * 本アプリケーションにおけるログの役割は動作確認が主であるため、同じ日付断面と設定にしている。
 * ログの外部出力は、その役割ごとに柔軟に変えられるように、設定を共通化していない。
 */
export const loggerConfig: log4js.Configuration = {
  appenders: {
    console: {
      type: 'console',
      layout,
    },
    system: {
      type: 'dateFile',
      filename: path.join(LOG_DIR, './system/system.log'),
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      numBackups: 3,
      layout,
    },
    application: {
      type: 'dateFile',
      filename: path.join(LOG_DIR, './application/application.log'),
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      numBackups: 3,
      layout,
    },
    access: {
      type: 'dateFile',
      filename: path.join(LOG_DIR, './access/access.log'),
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      numBackups: 3,
      layout,
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'INFO',
      enableCallStack: true,
    },
    system: {
      appenders: ['system'],
      level: 'ERROR',
      enableCallStack: true,
    },
    application: {
      appenders: ['console', 'application'],
      level: 'INFO',
      enableCallStack: true,
    },
    access: {
      appenders: ['console', 'access'],
      level: 'INFO',
      enableCallStack: true,
    },
  },
};
