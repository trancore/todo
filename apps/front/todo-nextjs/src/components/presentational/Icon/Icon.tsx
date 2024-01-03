import Check from '/public/images/icons/check.svg';
import Menu from '/public/images/icons/menu.svg';
import Plus from '/public/images/icons/plus.svg';
import SquareEdit from '/public/images/icons/square-edit.svg';
import TrashCan from '/public/images/icons/trash-can.svg';
import Uncheck from '/public/images/icons/uncheck.svg';
import UserCircle from '/public/images/icons/user-circle.svg';

const ICONS = { Check, Menu, Plus, SquareEdit, TrashCan, Uncheck, UserCircle };

type IconName = keyof typeof ICONS;
type Size = 16 | 24 | 32 | 64;
type Props = {
  name: IconName;
  size: Size;
  color?: string;
};

export default function Icon({ name, size, color }: Props) {
  const Icon = ICONS[name];
  const isStroke = Icon.toString().includes('stroke:');

  return (
    <Icon
      height={size}
      width={size}
      fill={isStroke ? undefined : color}
      stroke={isStroke ? color : undefined}
    />
  );
}
