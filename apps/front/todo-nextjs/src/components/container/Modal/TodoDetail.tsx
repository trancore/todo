'use client';

import { ComponentProps } from 'react';

import ModalPresentational from '~/components/presentational/Modal/Modal';

type Props = {
  presentational: ComponentProps<typeof ModalPresentational>;
};

export default function TodoModal({ presentational }: Props) {
  return <ModalPresentational {...presentational} />;
}
