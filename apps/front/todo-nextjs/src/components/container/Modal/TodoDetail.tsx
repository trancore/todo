'use client';

import { selectTodo } from '~/features/todo';

import TodoDetailPresentational from '~/components/presentational/Modal/TodoDetail';

import { STATUS } from '~/constants';

import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
} from '~/services/todo';

import { useAppSelector } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

export default function TodoDetail() {
  const store = useAppSelector(selectTodo);
  const [changeTodoStatus] = useChangeStatusTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { hookToast } = useToast();
  const { closeTodoModal: closeTodoDetailModal } = useTodoModal('DETAIL');
  const { openTodoModal: openTodoEditModal } = useTodoModal('EDIT');

  async function clickCompletedButton() {
    await changeTodoStatus({ todo_id: String(store.id), status: STATUS.DONE });

    hookToast('TODOを完了にしました');
    closeTodoDetailModal();
  }

  async function clickEditButton() {
    closeTodoDetailModal();

    openTodoEditModal(String(store.id), store);
  }

  async function clickDeleteButton() {
    await deleteTodo({ todo_id: String(store.id) });

    closeTodoDetailModal();
    hookToast('TODO削除しました');
  }

  return (
    <TodoDetailPresentational
      {...store}
      clickCompletedButton={clickCompletedButton}
      clickEditButton={clickEditButton}
      clickDeleteButton={clickDeleteButton}
    />
  );
}
