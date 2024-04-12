import { ModelType, TodoForm } from '~/types/todo';

import { selectModal } from '~/features/modal';
import { close, open } from '~/features/modal';
import { release, select } from '~/features/todo';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';

export const useTodoModal = (type: ModelType) => {
  const storeModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const isOpendDetailModal = storeModal.displayedDetail;
  const isOpendEditModal = storeModal.displayedEdit;

  const openTodoModal = (id: string, todo: TodoForm) => {
    dispatch(open({ type: type }));
    dispatch(select({ id: id, todoForm: todo }));
  };

  const closeTodoModal = () => {
    dispatch(close());
    dispatch(release());
  };

  return {
    isOpendDetailModal,
    isOpendEditModal,
    openTodoModal,
    closeTodoModal,
  };
};
