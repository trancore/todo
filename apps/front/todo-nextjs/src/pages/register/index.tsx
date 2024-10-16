﻿import { useRouter } from 'next/navigation';
import { GetServerSideProps } from 'next/types';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { hide as hideError, show as showError } from '~/state/error';

import { TodoForm } from '~/types/todo';

import { createTodoSchema } from '~/libs/yup';

import Button from '~/components/container/Button/Button';
import DateForm from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';
import Seo from '~/components/container/Seo/Seo';

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
  const todoSchema = createTodoSchema();

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
  const tPages = useTranslations('pages.register');
  const tCommonToast = useTranslations('common.toast');

  const submit: SubmitHandler<TodoForm> = (inputs) => {
    createTodo(inputs)
      .unwrap()
      .then(() => {
        dispatch(hideError());
        router.push(PAGE_PATH.TOP);
        hookToast(tCommonToast('register'));
      })
      .catch(() => {
        dispatch(showError({ text: tCommonToast('error') }));
        scrollTop();
      });
  };

  return (
    <Seo
      ogp={{
        title: tPages('seo.title'),
        description: tPages('seo.description'),
      }}
    >
      <>
        <h1>{tPages('heading')}</h1>
        <Form>
          <>
            <StyledInputForm>
              <TextForm
                presentational={{
                  labelName: tPages('form.title'),
                  errorMessage: errors.title?.message,
                  register: register('title'),
                }}
              />
              <TextArea
                presentational={{
                  labelName: tPages('form.description'),
                  errorMessage: errors.description?.message,
                  register: register('description'),
                }}
              />
              <DateForm
                presentational={{
                  labelName: tPages('form.deadline'),
                  errorMessage: errors.deadlineAt?.message,
                  register: register('deadlineAt'),
                }}
              />
            </StyledInputForm>
            <StyledButtonWrap>
              <Button
                presentational={{ text: tPages('button.register'), width: 128 }}
                onClick={handleSubmit(submit)}
              ></Button>
            </StyledButtonWrap>
          </>
        </Form>
      </>
    </Seo>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const messages = await import(`~/messages/${locale}.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
};
