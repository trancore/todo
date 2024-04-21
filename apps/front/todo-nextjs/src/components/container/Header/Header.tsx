import { useRouter as useRouterNav } from 'next/navigation';
import { useRouter } from 'next/router';

import HeaderPresentational from '~/components/presentational/Header/Header';

import { PAGE_PATH } from '~/constants';

export default function Header() {
  const { push } = useRouterNav();
  const { pathname } = useRouter();

  // TODO サインイン、サインアウト処理ができてから対応する。
  const isSignin = true;

  const hasPlusIcon = pathname !== PAGE_PATH.REGISTER;

  function onClickPlusIcon() {
    push(PAGE_PATH.REGISTER);
  }

  return (
    <HeaderPresentational
      isSignin={isSignin}
      hasPlusIcon={hasPlusIcon}
      onClickPlusIcon={onClickPlusIcon}
    />
  );
}
