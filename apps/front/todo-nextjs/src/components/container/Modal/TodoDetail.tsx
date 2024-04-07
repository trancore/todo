'use client';

import { selectTodo } from '~/features/todo';

import TodoDetailPresentational from '~/components/presentational/Modal/TodoDetail';

import { STATUS } from '~/constants';

import { useChangeStatusTodoMutation } from '~/services/todo';

import { useAppSelector } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

export default function TodoDetail() {
  const store = useAppSelector(selectTodo);
  const [changeTodoStatus] = useChangeStatusTodoMutation();
  const { hookToast } = useToast();
  const { closeTodoModal } = useTodoModal('DETAIL');

  async function clickCompletedButton() {
    await changeTodoStatus({ todo_id: String(store.id), status: STATUS.DONE });

    hookToast('TODOを完了にしました');
    closeTodoModal();
  }

  return (
    <TodoDetailPresentational
      {...store}
      clickCompletedButton={clickCompletedButton}
    />
  );
}
