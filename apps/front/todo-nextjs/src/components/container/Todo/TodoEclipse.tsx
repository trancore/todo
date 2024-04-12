import { ComponentProps } from 'react';

import TextEclipsePresentation from '~/components/presentational/Todo/TodoEclipse';

import { TYPE } from '~/constants';

import { useTodoModal } from '~/hooks/useTodoModal';

type Props = {
  presentational: Omit<ComponentProps<typeof TextEclipsePresentation>, 'click'>;
  id: string;
  deadlineAt: string | undefined;
};

export default function TodoEclipse({ presentational, id, deadlineAt }: Props) {
  const { title, description } = presentational;
  const { openTodoModal } = useTodoModal(TYPE.DETAIL);

  function openModal() {
    openTodoModal(id, { title, description, deadlineAt });
  }

  return (
    <TextEclipsePresentation
      title={title}
      description={description}
      click={openModal}
    />
  );
}
