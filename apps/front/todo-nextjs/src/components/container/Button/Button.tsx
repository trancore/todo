import { ComponentProps } from 'react';

import ButtonPresentational from '~/components/presentational/Button/Button';

type Props = {
  presentational: Omit<
    ComponentProps<typeof ButtonPresentational>,
    'disabled' | 'onClick'
  >;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({
  presentational,
  disabled = false,
  onClick,
}: Props) {
  return (
    <ButtonPresentational
      text={presentational.text}
      width={presentational.width}
      disabled={disabled}
      onClick={onClick}
    ></ButtonPresentational>
  );
}
