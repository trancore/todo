import { signOut } from 'next-auth/react';

import { close } from '~/features/menu';

import MenuPresentational from '~/components/presentational/Menu/Menu';

import { useAppDispatch } from '~/hooks/useRedux';
import { useSignin } from '~/hooks/useSignin';

export default function Menu() {
  const dispatch = useAppDispatch();
  const { getUser } = useSignin();

  const username = getUser()?.user?.name || '';

  function closeMenu() {
    dispatch(close());
  }

  return (
    <MenuPresentational
      userName={username}
      signOut={signOut}
      closeMenu={closeMenu}
    />
  );
}
