// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IYupValidation } from '~/libs/yup';

import ja from '~/messages/ja.json';

import { rootStore } from '~/store/root';

type Messages = typeof ja;

declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    todoText(
      yupValidation: IYupValidation,
    ): StringSchema<NonNullable<TType>, TContext, TDefault, TFlags>;
    todoDescription(
      yupValidation: IYupValidation,
    ): StringSchema<TType, TContext, TDefault, TFlags>;
  }
  interface DateSchema<TType, TContext, TDefault, TFlags> {
    todoDeadline(): DateSchema<TType, TContext, TDefault, TFlags>;
  }
}
declare global {
  interface Window {
    store: typeof rootStore;
  }
  interface IntlMessages extends Messages {}
}
