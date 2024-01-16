import { ComponentProps } from 'react';

import TextFormPresentation from '~/components/presentational/Form/TextForm';

type Props = {
  presentational: ComponentProps<typeof TextFormPresentation>;
};

export default function TextForm({ presentational }: Props) {
  const { labelName, placeholder, errorMessage, register } = presentational;

  return (
    <TextFormPresentation
      labelName={labelName}
      errorMessage={errorMessage}
      placeholder={placeholder}
      register={register}
    />
  );
}
