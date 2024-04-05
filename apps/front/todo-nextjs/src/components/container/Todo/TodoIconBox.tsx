import TodoIconBoxPresentation from '~/components/presentational/Todo/TodoIconBox';

import { STATUS } from '~/constants';

import {
  useChangeStatusTodoMutation,
  useDeleteTodoMutation,
} from '~/services/todo';

type Props = {
  todoId: number;
};

export default function TodoIconBox({ todoId }: Props) {
  const [changeTodoStatus] = useChangeStatusTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const uncheck = {
    has: false,
    click: () => {},
  };
  const check = {
    has: true,
    click: async () => {
      await changeTodoStatus({ todo_id: String(todoId), status: STATUS.DONE });
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
