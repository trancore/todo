export interface ITodoApiErrorData {
  title: string;
  detail: string;
  instance: string;
  invalidParameters?: {
    code: Record<string, never>;
    fieldName: string;
    reason: string;
  }[];
}
