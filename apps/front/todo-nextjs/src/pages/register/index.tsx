import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { hide as hideError, show as showError } from '~/state/error';

import { TodoForm } from '~/types/todo';

import { todoSchema } from '~/libs/yup';

import Button from '~/components/container/Button/Button';
import DateForm from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';

import { PAGE_PATH } from '~/constants';

import { useCreateTodoMutation } from '~/services/todo';

import { useAppDispatch } from '~/hooks/useRedux';
import { useToast } from '~/hooks/useToast';

import { scrollTop } from '~/utils/scroll';

const StyledInputForm = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;
const StyledButtonWrap = styled.div`
  margin: 0 auto;
`;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>({
    mode: 'onChange',
    resolver: yupResolver(todoSchema),
  });
  const [createTodo] = useCreateTodoMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { hookToast } = useToast();

  const submit: SubmitHandler<TodoForm> = (inputs) => {
    createTodo(inputs)
      .unwrap()
      .then(() => {
        dispatch(hideError());
        router.push(PAGE_PATH.TOP);
        hookToast('TODOが作成されました');
      })
      .catch(() => {
        dispatch(showError({ text: 'エラーが発生しました' }));
        scrollTop();
      });
  };

  return (
    <>
      <h1>登録</h1>
      <Form>
        <>
          <StyledInputForm>
            <TextForm
              presentational={{
                labelName: 'タイトル',
                errorMessage: errors.title?.message,
                register: register('title'),
              }}
            />
            <TextArea
              presentational={{
                labelName: '説明',
                errorMessage: errors.description?.message,
                register: register('description'),
              }}
            />
            <DateForm
              presentational={{
                labelName: '期限',
                errorMessage: errors.deadlineAt?.message,
                register: register('deadlineAt'),
              }}
            />
          </StyledInputForm>
          <StyledButtonWrap>
            <Button
              presentational={{ text: '登録', width: 128 }}
              onClick={handleSubmit(submit)}
            ></Button>
          </StyledButtonWrap>
        </>
      </Form>
    </>
  );
}
