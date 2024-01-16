import { ComponentProps } from 'react';

import TextAreaPresentation from '~/components/presentational/Form/TextArea';

type Props = {
  presentational: ComponentProps<typeof TextAreaPresentation>;
};

export default function TextForm({ presentational }: Props) {
  const { labelName, placeholder, errorMessage, register } = presentational;

  return (
    <TextAreaPresentation
      labelName={labelName}
      placeholder={placeholder}
      errorMessage={errorMessage}
      register={register}
    />
  );
}
