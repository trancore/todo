'use client';

import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

type Props = {
  labelName: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

const StyledTextForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  > input {
    width: 100%;
    border: 2px solid #000000;
    padding: 8px 10px;
  }

  > p {
    margin-left: 10px;
    color: #ff0000;
  }
`;

export default function TextForm({ labelName, errorMessage, register }: Props) {
  return (
    <StyledTextForm>
      <label>{labelName}</label>
      <input {...register}></input>
      <p>{errorMessage}</p>
    </StyledTextForm>
  );
}
