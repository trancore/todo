import { ComponentProps } from 'react';

import TextEclipsePresentation from '~/components/presentational/Todo/TodoEclipse';

type Props = {
  presentational: Omit<ComponentProps<typeof TextEclipsePresentation>, 'click'>;
};

export default function TodoEclipse({ presentational }: Props) {
  const { title, description } = presentational;

  // TODO ロジックを実装する
  function openModal() {
    return undefined;
  }

  return (
    <TextEclipsePresentation
      title={title}
      description={description}
      click={openModal}
    />
  );
}
