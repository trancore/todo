import { Request, Response } from 'express';

/**
 * expressのRequest用型定義
 *
 * T: リクエストパラメータ
 * U: レスポンスボディ
 * V: リクエストボディ
 * W: リクエストクエリパラメータ
 * X: 拡張用
 */
export type ExpressRequest<T, U, V, W, X> = Request<
  T,
  U,
  V,
  W,
  Record<string, X>
>;

/**
 * expressのResponse用型定義
 *
 * T: レスポンスボディ
 * U: 拡張用
 */
export type ExpressResponse<T, U> = Response<Record<string, U>>;
