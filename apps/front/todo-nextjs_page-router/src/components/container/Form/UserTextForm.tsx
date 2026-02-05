import { ComponentProps } from 'react';

import UserTextFormPresentation from '~/components/presentational/Form/UserTextForm';

export type InputType = 'text' | 'email' | 'password';

type Props = {
  presentational: Omit<ComponentProps<typeof UserTextFormPresentation>, 'type'>;
  type: InputType;
};

export default function UserTextForm({ presentational, type }: Props) {
  const { labelName, placeholder, errorMessage, register } = presentational;

  return (
    <UserTextFormPresentation
      type={type}
      labelName={labelName}
      placeholder={placeholder}
      errorMessage={errorMessage}
      register={register}
    />
  );
}
