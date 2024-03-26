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
