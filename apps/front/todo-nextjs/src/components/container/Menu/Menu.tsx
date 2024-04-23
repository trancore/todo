import { close } from '~/features/menu';

import MenuPresentational from '~/components/presentational/Menu/Menu';

import { useAppDispatch } from '~/hooks/useRedux';

export default function Menu() {
  const dispatch = useAppDispatch();

  function clickIcon() {
    // TODO: ロジックを実装する
  }
  function closeMenu() {
    dispatch(close());
  }

  return (
    <MenuPresentational
      userName="test"
      clickIcon={clickIcon}
      closeMenu={closeMenu}
    />
  );
}
