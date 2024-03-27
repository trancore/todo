'use client';

import { selectTodo } from '~/features/todo';

import TodoDetailPresentational from '~/components/presentational/Modal/TodoDetail';

import { useAppSelector } from '~/hooks/useRedux';

export default function TodoDetail() {
  const store = useAppSelector(selectTodo);

  return <TodoDetailPresentational {...store} />;
}
