import { ComponentProps } from 'react';

import MenuPresentational from '~/components/presentational/Menu/Menu';

type Props = {
  presentational: Omit<ComponentProps<typeof MenuPresentational>, 'clickIcon'>;
};

export default function Menu({ presentational }: Props) {
  function clickIcon() {
    // TODO: ロジックを実装する
  }
  return <MenuPresentational {...presentational} clickIcon={clickIcon} />;
}
