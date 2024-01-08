import { ComponentProps } from 'react';

import TextFormPresentation from '~/components/presentational/Form/TextForm';

type Props = {
  presentational: ComponentProps<typeof TextFormPresentation>;
};

export default function TextForm({ presentational }: Props) {
  const { labelName, errorMessage, register } = presentational;

  return (
    <TextFormPresentation
      labelName={labelName}
      errorMessage={errorMessage}
      register={register}
    />
  );
}
