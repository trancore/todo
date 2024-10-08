﻿'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { hide as hideError, show as showError } from '~/state/error';
import { selectTodo } from '~/state/todo';

import { TodoForm } from '~/types/todo';

import { createTodoSchema } from '~/libs/yup';

import TodoEditPresentational from '~/components/presentational/Modal/TodoEdit';

import { useEditTodoMutation } from '~/services/todo';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

import { scrollTop } from '~/utils/scroll';

export default function TodoEdit() {
  const todoSchema = createTodoSchema();

  const dispatch = useAppDispatch();
  const storeTodo = useAppSelector(selectTodo);
  const [editTodo] = useEditTodoMutation();
  const { formState, register, handleSubmit } = useForm<TodoForm>({
    mode: 'onChange',
    resolver: yupResolver(todoSchema),
  });
  const { hookToast } = useToast();
  const { closeTodoModal } = useTodoModal('EDIT');

  const submit: SubmitHandler<TodoForm> = (inputs) => {
    editTodo({ todo_id: storeTodo.id, ...inputs })
      .unwrap()
      .then(() => {
        dispatch(hideError());
        closeTodoModal();
        hookToast('TODOが更新されました');
      })
      .catch(() => {
        closeTodoModal();
        dispatch(showError({ text: 'エラーが発生しました' }));
        scrollTop();
      });
  };

  return (
    <TodoEditPresentational
      {...{
        title: storeTodo.title,
        description: storeTodo.description,
        formState: formState,
        register: register,
        onClickEdit: handleSubmit(submit),
      }}
    />
  );
}
