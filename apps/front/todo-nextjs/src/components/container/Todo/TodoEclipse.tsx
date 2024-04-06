import { ComponentProps } from 'react';

import TextEclipsePresentation from '~/components/presentational/Todo/TodoEclipse';

import { TYPE } from '~/constants';

import { useTodoModal } from '~/hooks/useTodoModal';

type Props = {
  presentational: Omit<ComponentProps<typeof TextEclipsePresentation>, 'click'>;
  deadlineAt: string | undefined;
};

export default function TodoEclipse({ presentational, deadlineAt }: Props) {
  const { title, description } = presentational;
  const { openTodoModal } = useTodoModal(TYPE.DETAIL);

  function openModal() {
    openTodoModal({ title, description, deadlineAt });
  }

  return (
    <TextEclipsePresentation
      title={title}
      description={description}
      click={openModal}
    />
  );
}
