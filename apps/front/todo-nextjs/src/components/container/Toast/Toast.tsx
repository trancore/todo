'use client';

import { ComponentProps } from 'react';

import ToastPresentational from '~/components/presentational/Toast/Toast';

type Props = {
  presentational: ComponentProps<typeof ToastPresentational>;
};

export default function Toast({ presentational }: Props) {
  return <ToastPresentational text={presentational.text} />;
}
