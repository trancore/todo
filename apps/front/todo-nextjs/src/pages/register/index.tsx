import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

import yup from '~/libs/yup';

import { hide, show } from '~/features/toast';

import Button from '~/components/container/Button/Button';
import DateForm from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';

import { PAGE_PATH } from '~/constants';

import { useCreateTodoMutation } from '~/services/todo';

import { useAppDispatch } from '~/hooks/useRedux';

type Inputs = {
  title: string;
  description?: string;
  deadlineAt?: string;
};

const inputsSchema = yup.object().shape({
  title: yup.string().todoText(),
  description: yup.string().todoDescription(),
  deadline: yup.date().todoDeadline(),
});

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
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(inputsSchema),
  });
  const [createTodo] = useCreateTodoMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const submit: SubmitHandler<Inputs> = (inputs) => {
    createTodo(inputs);

    router.push(PAGE_PATH.TOP);

    dispatch(show({ text: 'TODOが作成されました' }));
    const timeoutId = setTimeout(() => dispatch(hide()), 2000);
    clearTimeout(timeoutId);
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
