import { close } from '~/features/menu';

import MenuPresentational from '~/components/presentational/Menu/Menu';

import { useAppDispatch } from '~/hooks/useRedux';

export default function Menu() {
  const dispatch = useAppDispatch();

  function clickIcon() {
    // TODO: ロジックを実装する
  }
  function onClickOutside() {
    dispatch(close());
  }

  return (
    <MenuPresentational
      userName="test"
      clickIcon={clickIcon}
      onClickOutside={onClickOutside}
    />
  );
}
