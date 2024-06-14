import styled from 'styled-components';

import Check from '/public/images/icons/check.svg';
import Close from '/public/images/icons/close.svg';
import Error from '/public/images/icons/error.svg';
import Menu from '/public/images/icons/menu.svg';
import None from '/public/images/icons/none.svg';
import PersonOff from '/public/images/icons/person-off.svg';
import Plus from '/public/images/icons/plus.svg';
import SquareEdit from '/public/images/icons/square-edit.svg';
import TrashCan from '/public/images/icons/trash-can.svg';
import Uncheck from '/public/images/icons/uncheck.svg';
import UserCircle from '/public/images/icons/user-circle.svg';

const ICONS = {
  Check,
  Close,
  Error,
  Menu,
  None,
  PersonOff,
  Plus,
  SquareEdit,
  TrashCan,
  Uncheck,
  UserCircle,
};

type IconName = keyof typeof ICONS;
type Size = 16 | 24 | 32 | 48 | 64 | 128;
type Props = {
  name: IconName;
  size: Size;
  color?: string;
  clickIcon?: () => void;
};

const StyledIcon = styled.div<{ $hasClickIcon?: boolean }>`
  display: inline;
  cursor: ${({ $hasClickIcon }) => ($hasClickIcon ? 'pointer' : 'default')};
`;

export default function Icon({ name, size, clickIcon, color }: Props) {
  const Icon = ICONS[name];
  const isStroke = Icon.toString().includes('stroke:');
  const hasClickIcon = !!clickIcon;

  if (hasClickIcon) {
    return (
      <StyledIcon id={`styled-${name}-icon`} $hasClickIcon={hasClickIcon}>
        <Icon
          id={name}
          height={size}
          width={size}
          fill={isStroke ? undefined : color}
          stroke={isStroke ? color : undefined}
          onClick={clickIcon}
        />
      </StyledIcon>
    );
  }

  return (
    <StyledIcon id={`styled-${name}-icon`}>
      <Icon
        id={name}
        height={size}
        width={size}
        fill={isStroke ? undefined : color}
        stroke={isStroke ? color : undefined}
        onClick={clickIcon}
      />
    </StyledIcon>
  );
}
