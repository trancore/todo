import { TodoForm } from '~/types/todo';

import { selectModal } from '~/features/modal';
import { close, open } from '~/features/modal';
import { release, select } from '~/features/todo';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';

export const useTodoModal = () => {
  const storeModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const isOpendModal = storeModal.displayed;

  const openTodoModal = (todo: TodoForm) => {
    dispatch(open());
    dispatch(select(todo));
  };

  const closeTodoModal = () => {
    dispatch(close());
    dispatch(release());
  };

  return { isOpendModal, openTodoModal, closeTodoModal };
};
