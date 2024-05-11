'use client';

import { useRouter } from 'next/router';

import { selectTodo } from '~/state/todo';

import TodoDetailPresentational from '~/components/presentational/Modal/TodoDetail';

import { PAGE_PATH, STATUS } from '~/constants';

import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
} from '~/services/todo';

import { useAppSelector } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

export default function TodoDetail() {
  const store = useAppSelector(selectTodo);
  const [changeTodoStatus, { isLoading: isLoadingCompleted }] =
    useChangeStatusTodoMutation();
  const [deleteTodo, { isLoading: isLoadingDeleted }] = useDeleteTodoMutation();
  const { pathname } = useRouter();
  const { hookToast } = useToast();
  const { closeTodoModal: closeTodoDetailModal } = useTodoModal('DETAIL');
  const { openTodoModal: openTodoEditModal } = useTodoModal('EDIT');

  const locateCompleted = pathname === PAGE_PATH.COMPLETED;

  async function clickCompletedButton() {
    await changeTodoStatus({
      todo_id: String(store.id),
      status: STATUS.DONE,
      pathname,
    })
      .unwrap()
      .then(() => {
        hookToast('TODOを完了にしました');
        closeTodoDetailModal();
      })
      .catch(() => {
        hookToast('エラーが発生しました。');
      });
  }

  async function clickEditButton() {
    closeTodoDetailModal();

    openTodoEditModal(String(store.id), store);
  }

  async function clickDeleteButton() {
    await deleteTodo({ todo_id: String(store.id), pathname })
      .unwrap()
      .then(() => {
        closeTodoDetailModal();
        hookToast('TODO削除しました');
      })
      .catch(() => {
        hookToast('エラーが発生しました。');
      });
  }

  return (
    <TodoDetailPresentational
      {...store}
      locateCompleted={locateCompleted}
      completedButtonDisabled={isLoadingCompleted}
      deletedButtonDisabled={isLoadingDeleted}
      clickCompletedButton={clickCompletedButton}
      clickEditButton={clickEditButton}
      clickDeleteButton={clickDeleteButton}
    />
  );
}
