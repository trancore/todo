import { TYPE } from '~/constants';

/**
 * TODO Form用型
 */
export type TodoForm = {
  /** タイトル */
  title: string;
  /** 説明 */
  description?: string;
  /** 対応期限 */
  deadlineAt?: string;
};

/**
 * Todo Modalの種類
 */
export type ModelType = typeof TYPE.DETAIL | typeof TYPE.EDIT;
