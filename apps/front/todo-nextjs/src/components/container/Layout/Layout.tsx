import { selectModal } from '~/features/modal';

import LayoutPresentational from '~/components/presentational/Layout/Layout';

import { useAppSelector } from '~/hooks/useRedux';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const store = useAppSelector(selectModal);

  return (
    <LayoutPresentational opendModal={store.displayed}>
      {children}
    </LayoutPresentational>
  );
}
