import { TodoForm } from '~/types/todo';

import { selectModal } from '~/features/modal';
import { close, open } from '~/features/modal';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';

export const useTodoModal = () => {
  const storeModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const isOpendModal = storeModal.displayed;

  const openTodoModal = (todo: TodoForm) => {
    dispatch(open());
  };

  const closeTodoModal = () => {
    dispatch(close());
  };

  return { isOpendModal, openTodoModal, closeTodoModal };
};
