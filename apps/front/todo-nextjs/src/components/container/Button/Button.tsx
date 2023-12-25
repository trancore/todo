import { ComponentProps } from 'react';

import ButtonPresentational from '~/components/presentational/Button/Button';

type Props = {
  presentational: ComponentProps<typeof ButtonPresentational>;
};

export default function Button({ presentational }: Props) {
  return (
    <ButtonPresentational
      text={presentational.text}
      width={presentational.width}
    ></ButtonPresentational>
  );
}
