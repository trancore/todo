import { ComponentProps } from 'react';

import ButtonPresentational from '~/components/Button/ButtonPresentational';

type Props = {
  presentational: ComponentProps<typeof ButtonPresentational>;
};

export default function ButtonContainer({ presentational }: Props) {
  return (
    <ButtonPresentational
      text={presentational.text}
      width={presentational.width}
    ></ButtonPresentational>
  );
}
