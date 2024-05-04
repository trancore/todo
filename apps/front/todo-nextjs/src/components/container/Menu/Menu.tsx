import { signOut } from 'next-auth/react';

import { close } from '~/features/menu';

import MenuPresentational from '~/components/presentational/Menu/Menu';

import { useAppDispatch } from '~/hooks/useRedux';

export default function Menu() {
  const dispatch = useAppDispatch();

  function closeMenu() {
    dispatch(close());
  }

  return (
    <MenuPresentational
      userName="test"
      signOut={signOut}
      closeMenu={closeMenu}
    />
  );
}
