'use client';

import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

type Props = {
  labelName: string;
  placeholder?: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

const StyledInput = styled.input`
  border-radius: 50px;
`;

export default function Name({
  labelName,
  placeholder,
  errorMessage,
  register,
}: Props) {
  return (
    <>
      <label>{labelName}</label>
      <StyledInput placeholder={placeholder} {...register} />
      <p>{errorMessage}</p>
    </>
  );
}
