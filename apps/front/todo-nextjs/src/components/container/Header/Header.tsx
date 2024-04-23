import { useRouter as useRouterNav } from 'next/navigation';
import { useRouter } from 'next/router';

import { open } from '~/features/menu';

import HeaderPresentational from '~/components/presentational/Header/Header';

import { PAGE_PATH } from '~/constants';

import { useAppDispatch } from '~/hooks/useRedux';

export default function Header() {
  const dispatch = useAppDispatch();
  const { push } = useRouterNav();
  const { pathname } = useRouter();

  // TODO サインイン、サインアウト処理ができてから対応する。
  const isSignin = true;

  const hasPlusIcon = pathname !== PAGE_PATH.REGISTER;

  function onClickMenuIcon() {
    dispatch(open());
  }
  function onClickPlusIcon() {
    push(PAGE_PATH.REGISTER);
  }

  return (
    <HeaderPresentational
      isSignin={isSignin}
      hasPlusIcon={hasPlusIcon}
      onClickMenuIcon={onClickMenuIcon}
      onClickPlusIcon={onClickPlusIcon}
    />
  );
}
