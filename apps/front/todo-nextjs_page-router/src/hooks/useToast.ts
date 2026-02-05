import { hide as hideTodo, show as showTodo } from '~/state/toast';

import { useAppDispatch } from '~/hooks/useRedux';

const DELAY_TIME_SEC = 2000;

export const useToast = () => {
  const dispatch = useAppDispatch();

  function hookToast(text: string) {
    if (typeof text !== 'string') return;

    dispatch(showTodo({ text: text }));
    setTimeout(() => {
      dispatch(hideTodo());
    }, DELAY_TIME_SEC);
  }

  return { hookToast };
};
