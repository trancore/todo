import { useRouter as useRouterNav } from 'next/navigation';
import { useRouter } from 'next/router';

import { open } from '~/features/menu';

import HeaderPresentational from '~/components/presentational/Header/Header';

import { PAGE_PATH } from '~/constants';

import { useAppDispatch } from '~/hooks/useRedux';
import { useSignin } from '~/hooks/useSignin';

export default function Header() {
  const dispatch = useAppDispatch();
  const { push } = useRouterNav();
  const { pathname } = useRouter();
  const { isAuth } = useSignin();

  const hasPlusIcon = pathname !== PAGE_PATH.REGISTER;

  function onClickMenuIcon() {
    dispatch(open());
  }
  function onClickPlusIcon() {
    push(PAGE_PATH.REGISTER);
  }

  function onClickuserIcon() {
    push(PAGE_PATH.TOP);
  }

  return (
    <HeaderPresentational
      isSignin={isAuth}
      hasPlusIcon={hasPlusIcon}
      onClickMenuIcon={onClickMenuIcon}
      onClickPlusIcon={onClickPlusIcon}
      onClickUserIcon={onClickuserIcon}
    />
  );
}
