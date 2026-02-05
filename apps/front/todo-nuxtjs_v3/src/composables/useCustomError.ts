import type { FetchError } from 'ofetch';
import type { ITodoApiErrorData } from '~/types/error';

/**
 * 非同期エラーを処理するためのカスタムコンポーザブル
 */
export const useCustomError = () => {
  const { openErrorMessage, clearErrorMessage } = useErrorStore();

  const createCustomErrorMessage = (error: FetchError<ITodoApiErrorData>) => {
    if (error) {
      const { status, data } = error;

      switch (status) {
        case 400:
          // TODO codeによりメッセージを変える
          // const { items } = data;
          break;
        case 401:
        case 403:
          openErrorMessage('認証に失敗しました');
          break;
        case 404:
          openErrorMessage('対象のデータが見つかりませんでした');
          break;
        case 500:
        case 503:
        default:
          openErrorMessage('通信に失敗しました');
          break;
      }
    }
  };

  const clearCustomErrorMessage = () => {
    clearErrorMessage();
  };

  return { createCustomErrorMessage, clearCustomErrorMessage };
};
