import { ComponentProps } from 'react';

import TodoIconBoxPresentation from '~/components/presentational/Todo/TodoIconBox';

type Props = {
  presentational: Omit<
    ComponentProps<typeof TodoIconBoxPresentation>,
    'uncheck' | 'check' | 'squareEdit' | 'trashCan'
  >;
};

export default function TodoIconBox() {
  const uncheck = {
    has: true,
    click: () => {},
  };
  const check = {
    has: true,
    click: () => {},
  };
  const squareEdit = {
    has: true,
    click: () => {},
  };
  const trashCan = {
    has: true,
    click: () => {},
  };

  return (
    <TodoIconBoxPresentation
      uncheck={uncheck}
      check={check}
      squareEdit={squareEdit}
      trashCan={trashCan}
    />
  );
}
