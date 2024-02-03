'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  labelName: string;
  placeholder?: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

export default function TextForm({
  labelName,
  placeholder,
  errorMessage,
  register,
}: Props) {
  return (
    <>
      <label>{labelName}</label>
      <input {...register} placeholder={placeholder}></input>
      <p>{errorMessage}</p>
    </>
  );
}
