'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  labelName: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

export default function Date({ labelName, errorMessage, register }: Props) {
  return (
    <>
      <label htmlFor="date">{labelName}</label>
      <input id="date" type="date" {...register}></input>
      <p id="date-error-message">{errorMessage}</p>
    </>
  );
}
