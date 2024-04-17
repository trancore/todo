'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { TodoForm } from '~/types/todo';

import { todoSchema } from '~/libs/yup';

import { hide as hideError, show as showError } from '~/features/error';
import { selectTodo } from '~/features/todo';

import TodoEditPresentational from '~/components/presentational/Modal/TodoEdit';

import { useEditTodoMutation } from '~/services/todo';

import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';
import { useTodoModal } from '~/hooks/useTodoModal';

export default function TodoEdit() {
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
        hookToast('Todoが更新されました');
      })
      .catch(() => {
        // TODO: エラーテキストが画面に出てしまう。
        dispatch(showError({ text: 'エラーが発生しました' }));
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
