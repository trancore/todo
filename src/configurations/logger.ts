import log4js, { Layout } from 'log4js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOG_DIR = path.join(__dirname, '../logs');

/** ログの共通レイアウト設定 */
const layout: Layout = {
  type: 'pattern',
  pattern: '[%d{yyyy-MM-dd hh:mm:ss}] %[%5p%] -%c: %m',
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
    // システムエラー・キャッチできなかった例外
    system: {
      type: 'dateFile',
      filename: path.join(LOG_DIR, './system/system.log'),
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      numBackups: 3,
      layout,
    },
    // アプリケーションの動作状況・ある実行された操作の内容と操作時の値
    application: {
      type: 'dateFile',
      filename: path.join(LOG_DIR, './application/application.log'),
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      numBackups: 3,
      layout,
    },
    // サーバリクエスト、レスポンス
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
