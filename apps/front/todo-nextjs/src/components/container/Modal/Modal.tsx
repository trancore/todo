'use client';

import ModalPresentational from '~/components/presentational/Modal/Modal';

type Props = {
  children: JSX.Element;
};

export default function Form({ children }: Props) {
  return <ModalPresentational>{children}</ModalPresentational>;
}
