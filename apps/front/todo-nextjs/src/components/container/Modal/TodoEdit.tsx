'use client';

import { useForm } from 'react-hook-form';

import { TodoForm } from '~/types/todo';

import { selectError } from '~/features/error';
import { selectTodo } from '~/features/todo';

import TodoEditPresentational from '~/components/presentational/Modal/TodoEdit';

import { useAppSelector } from '~/hooks/useRedux';

export default function TodoEdit() {
  const storeTodo = useAppSelector(selectTodo);
  const storeError = useAppSelector(selectError);
  const { register } = useForm<TodoForm>();

  return (
    <TodoEditPresentational
      {...{
        title: storeTodo.title,
        description: storeTodo.description,
        errorMessage: storeError.text,
        register: register,
      }}
    />
  );
}
