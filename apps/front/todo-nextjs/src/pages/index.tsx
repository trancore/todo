import styled from 'styled-components';

import { wrapper } from '~/store/root';

import TodoEclipse from '~/components/container/Todo/TodoEclipse';
import TodoIconBox from '~/components/container/Todo/TodoIconBox';

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

export default function Top() {
  const { data: todoList } = useGetTodosQuery();

  const { formatToYYYYMMdd } = dateFormat();

  return (
    <StyledTodoList>
      {(todoList ?? []).map((todo) => (
        <StyledTodo key={todo.id}>
          <TodoEclipse
            presentational={{
              title: todo.title,
              description: todo.description || '',
            }}
          />
          <StyledTodoUnder>
            {todo.deadlineAt ? (
              <p>{formatToYYYYMMdd(new Date(todo.deadlineAt))}</p>
            ) : (
              <p>{''}</p>
            )}
            <TodoIconBox />
          </StyledTodoUnder>
        </StyledTodo>
      ))}
    </StyledTodoList>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getTodos.initiate());
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return { props: '' };
  },
);
