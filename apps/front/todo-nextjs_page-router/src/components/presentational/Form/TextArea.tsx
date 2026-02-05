'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  labelName: string;
  placeholder?: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

export default function TextArea({
  labelName,
  placeholder,
  errorMessage,
  register,
}: Props) {
  return (
    <>
      <label htmlFor="textarea">{labelName}</label>
      <textarea
        id="textarea"
        rows={10}
        placeholder={placeholder}
        {...register}
      />
      <p id="textarea-error-message">{errorMessage}</p>
    </>
  );
}
