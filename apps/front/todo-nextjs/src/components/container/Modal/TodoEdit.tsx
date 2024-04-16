'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { TodoForm } from '~/types/todo';

import { todoSchema } from '~/libs/yup';

import { selectTodo } from '~/features/todo';

import TodoEditPresentational from '~/components/presentational/Modal/TodoEdit';

import { useAppSelector } from '~/hooks/useRedux';

export default function TodoEdit() {
  const storeTodo = useAppSelector(selectTodo);
  const { formState, register, handleSubmit } = useForm<TodoForm>({
    mode: 'onChange',
    resolver: yupResolver(todoSchema),
  });

  return (
    <TodoEditPresentational
      {...{
        title: storeTodo.title,
        description: storeTodo.description,
        formState: formState,
        register: register,
      }}
    />
  );
}
