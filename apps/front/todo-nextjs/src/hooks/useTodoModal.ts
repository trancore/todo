import { TodoForm } from '~/types/todo';

import { selectTodoModal } from '~/features/todoModal';
import { close, open } from '~/features/todoModal';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';

export const useTodoModal = () => {
  const store = useAppSelector(selectTodoModal);
  const dispatch = useAppDispatch();

  const isOpendModal = store.displayed;

  const openTodoModal = (todo: TodoForm) => {
    dispatch(open(todo));
  };

  const closeTodoModal = () => {
    dispatch(close());
  };

  return { isOpendModal, openTodoModal, closeTodoModal };
};
