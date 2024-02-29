import styled from 'styled-components';
import TodoEclipse from '~/components/container/Todo/TodoEclipse';
import TodoIconBox from '~/components/container/Todo/TodoIconBox';

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
  return (
    <StyledTodoList>
      <StyledTodo>
        <TodoEclipse
          presentational={{ title: 'test', description: 'description' }}
        />
        <StyledTodoUnder>
          <p>2024/01/01</p>
          <TodoIconBox />
        </StyledTodoUnder>
      </StyledTodo>
      <StyledTodo>
        <TodoEclipse
          presentational={{ title: 'test', description: 'description' }}
        />
        <StyledTodoUnder>
          <p>2024/01/01</p>
          <TodoIconBox />
        </StyledTodoUnder>
      </StyledTodo>
      <StyledTodo>
        <TodoEclipse
          presentational={{ title: 'test', description: 'description' }}
        />
        <StyledTodoUnder>
          <p>2024/01/01</p>
          <TodoIconBox />
        </StyledTodoUnder>
      </StyledTodo>
      <StyledTodo>
        <TodoEclipse
          presentational={{ title: 'test', description: 'description' }}
        />
        <StyledTodoUnder>
          <p>2024/01/01</p>
          <TodoIconBox />
        </StyledTodoUnder>
      </StyledTodo>
      <StyledTodo>
        <TodoEclipse
          presentational={{ title: 'test', description: 'description' }}
        />
        <StyledTodoUnder>
          <p>2024/01/01</p>
          <TodoIconBox />
        </StyledTodoUnder>
      </StyledTodo>
    </StyledTodoList>
  );
}
