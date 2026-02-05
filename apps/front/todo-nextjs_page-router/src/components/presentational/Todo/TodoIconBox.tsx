import styled from 'styled-components';

import Icon from '~/components/container/Icon/Icon';

type Props = {
  uncheck: {
    has: boolean;
    click: () => void;
  };
  check: {
    has: boolean;
    click: () => void;
  };
  squareEdit: {
    has: boolean;
    click: () => void;
  };
  trashCan: {
    has: boolean;
    click: () => void;
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
          clickIcon={uncheck.click}
        />
      )}
      {check.has && (
        <Icon
          presentational={{ name: 'Check', size: 48 }}
          clickIcon={check.click}
        />
      )}
      {squareEdit.has && (
        <Icon
          presentational={{ name: `SquareEdit`, size: 48 }}
          clickIcon={squareEdit.click}
        />
      )}
      {trashCan.has && (
        <Icon
          presentational={{ name: 'TrashCan', size: 48 }}
          clickIcon={trashCan.click}
        />
      )}
    </StyledTodoIconBox>
  );
}
