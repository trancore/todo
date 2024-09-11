import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { wrapper } from '~/store/root';

import Icon from '~/components/container/Icon/Icon';
import Seo from '~/components/container/Seo/Seo';
import TodoEclipse from '~/components/container/Todo/TodoEclipse';
import TodoIconBox from '~/components/container/Todo/TodoIconBox';

import { OGP_TYPE, TODO_STATUS } from '~/constants';

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
  const { data: todoList } = useGetTodosQuery(
    `${TODO_STATUS.TODO},${TODO_STATUS.WIP}`,
    {
      refetchOnMountOrArgChange: true,
    },
  );
  const t = useTranslations('pages.index');

  const metadata = {
    title: t('seo.title'),
    description: t('seo.description'),
  };
  const ogp = {
    title: t('ogp.title'),
    description: t('ogp.description'),
    type: OGP_TYPE.WEBSITE,
    url: process.env.NEXT_PUBLIC_DOMAIN,
  };

  const { formatToYYYYMMdd, colorizeDate } = dateFormat();

  return (
    <Seo metadata={metadata} ogp={ogp}>
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
          <h2>{t('notHaveTodos')}</h2>
        </StyledNotHave>
      )}
    </Seo>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      await store.dispatch(
        getTodos.initiate(`${TODO_STATUS.TODO},${TODO_STATUS.WIP}`),
      );
      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      const messages = await import(`~/messages/${locale}.json`);

      return {
        props: {
          messages: messages.default,
        },
      };
    },
);
