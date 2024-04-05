import TodoIconBoxPresentation from '~/components/presentational/Todo/TodoIconBox';

import { STATUS } from '~/constants';

import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
} from '~/services/todo';

import { useToast } from '~/hooks/useToast';

type Props = {
  todoId: number;
};

export default function TodoIconBox({ todoId }: Props) {
  const [changeTodoStatus] = useChangeStatusTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const { hookToast } = useToast();

  const uncheck = {
    has: false,
    click: () => {},
  };
  const check = {
    has: true,
    click: async () => {
      await changeTodoStatus({ todo_id: String(todoId), status: STATUS.DONE });

      hookToast('TODOを完了にしました');
    },
  };
  const squareEdit = {
    has: true,
    click: () => {},
  };
  const trashCan = {
    has: true,
    click: async () => {
      await deleteTodo({ todo_id: String(todoId) });

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
