import { ComponentProps } from 'react';

import DatePresentation from '~/components/presentational/Form/Date';

type Props = {
  presentational: ComponentProps<typeof DatePresentation>;
};

export default function Date({ presentational }: Props) {
  const { labelName, errorMessage, register } = presentational;

  return (
    <DatePresentation
      labelName={labelName}
      errorMessage={errorMessage}
      register={register}
    />
  );
}
