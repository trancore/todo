'use client';

import { ComponentProps } from 'react';

import TodoModalPresentational from '~/components/presentational/Modal/TodoModal';

type Props = {
  presentational: ComponentProps<typeof TodoModalPresentational>;
};

export default function TodoModal({ presentational }: Props) {
  return <TodoModalPresentational {...presentational} />;
}
