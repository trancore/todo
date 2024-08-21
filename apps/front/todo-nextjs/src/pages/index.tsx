import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { wrapper } from '~/store/root';

import Icon from '~/components/container/Icon/Icon';
import TodoEclipse from '~/components/container/Todo/TodoEclipse';
import TodoIconBox from '~/components/container/Todo/TodoIconBox';

import { STATUS } from '~/constants';

import {
  getRunningQueriesThunk,
  getTodos,
  useGetTodosQuery,
} from '~/services/todo';

import { dateFormat } from '~/utils/date';

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTodoUnder = styled.div`
  margin-top: 8px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
`;
const StyledTodoDeadlineAt = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
`;
const StyledNotHave = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Top() {
  const { data: todoList } = useGetTodosQuery(`${STATUS.TODO},${STATUS.WIP}`, {
    refetchOnMountOrArgChange: true,
  });
  const t = useTranslations('pages');

  const { formatToYYYYMMdd, colorizeDate } = dateFormat();

  return (
    <>
      {todoList ? (
        <StyledTodoList>
          {todoList.map((todo) => (
            <StyledTodo key={todo.id} id="todo">
              <TodoEclipse
                presentational={{
                  title: todo.title,
                  description: todo.description || '',
                }}
                id={String(todo.id)}
                deadlineAt={todo.deadlineAt}
              />
              <StyledTodoUnder>
                {todo.deadlineAt ? (
                  <StyledTodoDeadlineAt
                    test-id="todo-deadline"
                    color={colorizeDate(new Date(todo.deadlineAt))}
                  >
                    {formatToYYYYMMdd(new Date(todo.deadlineAt))}
                  </StyledTodoDeadlineAt>
                ) : (
                  <p>{''}</p>
                )}
                <TodoIconBox
                  todoId={todo.id}
                  hasIcons={{
                    hasCheck: true,
                    hasSquareEdit: true,
                    hasTrashCan: true,
                  }}
                  todoForm={todo}
                />
              </StyledTodoUnder>
            </StyledTodo>
          ))}
        </StyledTodoList>
      ) : (
        <StyledNotHave>
          <Icon presentational={{ name: 'Check', size: 64 }} />
          <h2>{t('index.notHaveTodos')}</h2>
        </StyledNotHave>
      )}
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      await store.dispatch(getTodos.initiate(`${STATUS.TODO},${STATUS.WIP}`));
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      const messages = await import(`~/messages/${locale}.json`);

      return {
        props: {
          messages: messages.default,
        },
      };
    },
);
