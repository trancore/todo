import { selectModal } from '~/features/modal';

import LayoutPresentational from '~/components/presentational/Layout/Layout';

import { useAppSelector } from '~/hooks/useRedux';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const store = useAppSelector(selectModal);
  const { displayedDetail, displayedEdit } = store;

  return (
    <LayoutPresentational
      opendTodoDetailModal={displayedDetail}
      opendTodoEditModal={displayedEdit}
    >
      {children}
    </LayoutPresentational>
  );
}
