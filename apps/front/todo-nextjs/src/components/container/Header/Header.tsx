import HeaderPresentational from '~/components/presentational/Header/Header';

export default function Header() {
  // TODO サインイン、サインアウト処理ができてから対応する。
  const isSignin = false;

  return <HeaderPresentational isSignin={isSignin} />;
}
