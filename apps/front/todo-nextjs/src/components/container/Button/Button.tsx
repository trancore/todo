import { ComponentProps } from 'react';

import ButtonPresentational from '~/components/presentational/Button/Button';

type Props = {
  presentational: Omit<ComponentProps<typeof ButtonPresentational>, 'onClick'>;
  onClick: () => void;
};

export default function Button({ presentational, onClick }: Props) {
  return (
    <ButtonPresentational
      text={presentational.text}
      width={presentational.width}
      onClick={onClick}
    ></ButtonPresentational>
  );
}
