import { useRouter } from 'next/router';

import { TodoForm } from '~/types/todo';

import TodoIconBoxPresentation from '~/components/presentational/Todo/TodoIconBox';

import { STATUS } from '~/constants';

import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
} from '~/services/todo';

import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

type Props = {
  todoId: number;
  hasIcons: {
    hasUncheck?: boolean;
    hasCheck?: boolean;
    hasSquareEdit?: boolean;
    hasTrashCan?: boolean;
  };
  todoForm?: TodoForm;
};

export default function TodoIconBox({ todoId, todoForm, hasIcons }: Props) {
  const [changeTodoStatus] = useChangeStatusTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { pathname } = useRouter();
  const { hookToast } = useToast();
  const { openTodoModal: openTodoEditModal } = useTodoModal('EDIT');

  const uncheck = {
    has: hasIcons.hasUncheck || false,
    click: async () => {
      await changeTodoStatus({
        todo_id: String(todoId),
        status: STATUS.TODO,
        pathname,
      });

      hookToast('TODOを未完了にしました');
    },
  };
  const check = {
    has: hasIcons.hasCheck || false,
    click: async () => {
      await changeTodoStatus({
        todo_id: String(todoId),
        status: STATUS.DONE,
        pathname,
      });

      hookToast('TODOを完了にしました');
    },
  };
  const squareEdit = {
    has: hasIcons.hasSquareEdit || false,
    click: () => {
      todoForm && openTodoEditModal(String(todoId), todoForm);
    },
  };
  const trashCan = {
    has: hasIcons.hasTrashCan || false,
    click: async () => {
      await deleteTodo({ todo_id: String(todoId), pathname });

      hookToast('TODOを削除しました');
    },
  };

  return (
    <TodoIconBoxPresentation
      uncheck={uncheck}
      check={check}
      squareEdit={squareEdit}
      trashCan={trashCan}
    />
  );
}
