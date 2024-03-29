﻿'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  labelName: string;
  errorMessage: string | undefined;
  register: UseFormRegisterReturn | undefined;
};

export default function Date({ labelName, errorMessage, register }: Props) {
  return (
    <>
      <label>{labelName}</label>
      <input type="date" {...register}></input>
      <p>{errorMessage}</p>
    </>
  );
}
