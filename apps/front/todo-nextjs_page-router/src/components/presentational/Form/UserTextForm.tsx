'use client';

import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { InputType } from '~/components/container/Form/UserTextForm';

type Props = {
  type: InputType;
  labelName: string;
  placeholder?: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

const StyledInput = styled.input`
  border-radius: 50px;
`;

export default function UserTextForm({
  type,
  labelName,
  placeholder,
  errorMessage,
  register,
}: Props) {
  return (
    <>
      <label htmlFor="user-text-form">{labelName}</label>
      <StyledInput
        id="user-text-form"
        type={type}
        placeholder={placeholder}
        {...register}
      />
      <p id="user-text-form-error-message">{errorMessage}</p>
    </>
  );
}
