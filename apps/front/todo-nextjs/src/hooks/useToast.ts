import { hide as hideTodo, show as showTodo } from '~/features/toast';

import { useAppDispatch } from '~/hooks/useRedux';

const DELAY_TIME = 2000;

export const useToast = () => {
  const dispatch = useAppDispatch();

  function hookToast(text: string) {
    dispatch(showTodo({ text: text }));
    const timeoutId = setTimeout(() => dispatch(hideTodo()), DELAY_TIME);
    clearTimeout(timeoutId);
  }

  return { hookToast };
};
