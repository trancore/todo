import { selectMenu } from '~/features/menu';
import { selectModal } from '~/features/modal';

import LayoutPresentational from '~/components/presentational/Layout/Layout';

import { useAppSelector } from '~/hooks/useRedux';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const { displayedDetail, displayedEdit } = useAppSelector(selectModal);
  const { opened: openedMenu } = useAppSelector(selectMenu);

  return (
    <LayoutPresentational
      openedTodoDetailModal={displayedDetail}
      openedTodoEditModal={displayedEdit}
      openedMenu={openedMenu}
    >
      {children}
    </LayoutPresentational>
  );
}
