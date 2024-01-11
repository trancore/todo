﻿'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  labelName: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

export default function TextArea({ labelName, errorMessage, register }: Props) {
  return (
    <>
      <label>{labelName}</label>
      <textarea rows={10} {...register}></textarea>
      <p>{errorMessage}</p>
    </>
  );
}
