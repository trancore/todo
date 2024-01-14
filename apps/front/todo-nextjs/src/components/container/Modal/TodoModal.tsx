'use client';

import { ComponentProps } from 'react';

import TodoModalPresentational from '~/components/presentational/Modal/TodoModal';

type Props = {
  presentational: Omit<
    ComponentProps<typeof TodoModalPresentational>,
    'children'
  >;
  children: JSX.Element;
};

export default function TodoModal({ presentational, children }: Props) {
  return (
    <TodoModalPresentational {...presentational}>
      {children}
    </TodoModalPresentational>
  );
}
