// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as yup from '~/libs/yup';

import { rootStore } from '~/store/root';

declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    todoText(): StringSchema<NonNullable<TType>, TContext, TDefault, TFlags>;
    todoDescription(): StringSchema<TType, TContext, TDefault, TFlags>;
  }
  interface DateSchema<TType, TContext, TDefault, TFlags> {
    todoDeadline(): DateSchema<TType, TContext, TDefault, TFlags>;
  }
}
declare global {
  interface Window {
    store: typeof rootStore;
  }
}
