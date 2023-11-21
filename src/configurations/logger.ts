import log4js from 'log4js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_DIR = path.join(__dirname, '../logs');

/**
 * ログの共通設定
 * 本アプリケーションにおけるログの役割は動作確認が主であるため、
 * 同じ日付断面と設定にしている。
 */
const logCommonConfig: log4js.Appender = {
  type: 'dateFile',
  pattern: 'yyyy-MM-dd',
  keepFileExt: true,
  numBackups: 3,
};

export const loggerConfig: log4js.Configuration = {
  appenders: {
    console: { type: 'console' },
    // システムエラー・キャッチできなかった例外
    system: {
      filename: path.join(LOG_DIR, './system/system.log'),
      ...logCommonConfig,
    },
    // アプリケーションの動作状況・ある実行された操作の内容と操作時の値
    application: {
      filename: path.join(LOG_DIR, './application/application.log'),
      ...logCommonConfig,
    },
    // サーバリクエスト、レスポンス
    access: {
      filename: path.join(LOG_DIR, './access/access.log'),
      ...logCommonConfig,
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'INFO',
    },
    system: {
      appenders: ['system'],
      level: 'ERROR',
    },
    application: {
      appenders: ['console', 'application'],
      level: 'INFO',
    },
    access: {
      appenders: ['console', 'access'],
      level: 'INFO',
    },
  },
};
