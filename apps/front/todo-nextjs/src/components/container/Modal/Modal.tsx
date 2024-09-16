'use client';

import { close } from '~/state/modal';

import ModalPresentational from '~/components/presentational/Modal/Modal';

import { useAppDispatch } from '~/hooks/useRedux';

type Props = {
  children: JSX.Element;
};

export default function Modal({ children }: Props) {
  const dispatch = useAppDispatch();

  const clickClose = () => {
    dispatch(close());
  };

  return (
    <ModalPresentational clickClose={clickClose}>
      {children}
    </ModalPresentational>
  );
}
