import { ComponentProps } from 'react';

import NamePresentation from '~/components/presentational/Form/Name';

type Props = {
  presentational: ComponentProps<typeof NamePresentation>;
};

export default function Name({ presentational }: Props) {
  const { labelName, placeholder, errorMessage, register } = presentational;

  return (
    <NamePresentation
      labelName={labelName}
      placeholder={placeholder}
      errorMessage={errorMessage}
      register={register}
    />
  );
}
