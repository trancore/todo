import styled from 'styled-components';
import Icon from '~/components/container/Icon/Icon';

type Props = {
  uncheck: {
    has: boolean;
    clickUncheck: () => void;
  };
  check: {
    has: boolean;
    clickCheck: () => void;
  };
  squareEdit: {
    has: boolean;
    clickSquareEdit: () => void;
  };
  trashCan: {
    has: boolean;
    clickTrashCan: () => void;
  };
};

const StyledTodoIconBox = styled.div`
  display: flex;
  gap: 24px;
`;

export default function TodoIconBox({
  uncheck,
  check,
  squareEdit,
  trashCan,
}: Props) {
  return (
    <StyledTodoIconBox>
      {uncheck.has && (
        <Icon
          presentational={{ name: `Uncheck`, size: 48 }}
          clickIcon={uncheck.clickUncheck}
        />
      )}
      {check.has && (
        <Icon
          presentational={{ name: 'Check', size: 48 }}
          clickIcon={check.clickCheck}
        />
      )}
      {squareEdit.has && (
        <Icon
          presentational={{ name: `SquareEdit`, size: 48 }}
          clickIcon={squareEdit.clickSquareEdit}
        />
      )}
      {trashCan.has && (
        <Icon
          presentational={{ name: 'TrashCan', size: 48 }}
          clickIcon={trashCan.clickTrashCan}
        />
      )}
    </StyledTodoIconBox>
  );
}
