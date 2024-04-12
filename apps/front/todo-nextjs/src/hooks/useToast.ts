import { hide as hideTodo, show as showTodo } from '~/features/toast';

import { useAppDispatch } from '~/hooks/useRedux';

const DELAY_TIME_SEC = 2000;

export const useToast = () => {
  const dispatch = useAppDispatch();

  function hookToast(text: string) {
    dispatch(showTodo({ text: text }));
    setTimeout(() => {
      dispatch(hideTodo());
    }, DELAY_TIME_SEC);
  }

  return { hookToast };
};
