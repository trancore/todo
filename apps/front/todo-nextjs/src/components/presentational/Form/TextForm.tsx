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
      <label htmlFor="textform">{labelName}</label>
      <input id="textform" {...register} placeholder={placeholder} />
      <p id="textform-error-message">{errorMessage}</p>
    </>
  );
}
