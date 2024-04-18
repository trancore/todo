'use client';

import { FormState, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import { TodoForm } from '~/types/todo';

import Button from '~/components/container/Button/Button';
import Date from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';
import Modal from '~/components/container/Modal/Modal';

type Props = {
  title: string;
  description: string | undefined;
  formState: FormState<TodoForm>;
  register: UseFormRegister<TodoForm>;
  onClickEdit: () => void;
};

const StyledContent = styled.div`
  width: 100%;
  margin-bottom: 24px;

  > p {
    padding-left: 8px;
  }
`;
const StyledButtonBox = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export default function TodoEdit({
  title,
  description,
  formState,
  register,
  onClickEdit,
}: Props) {
  const { errors, isValid } = formState;
  return (
    <Modal>
      <>
        <h1>編集</h1>
        <Form submit={() => {}}>
          <>
            <StyledContent>
              <TextForm
                presentational={{
                  labelName: 'タイトル',
                  placeholder: title,
                  errorMessage: errors.title?.message,
                  register: register('title'),
                }}
              />
            </StyledContent>
            <StyledContent>
              <TextArea
                presentational={{
                  labelName: '説明',
                  placeholder: description,
                  errorMessage: errors.description?.message,
                  register: register('description'),
                }}
              />
            </StyledContent>
            <StyledContent>
              <Date
                presentational={{
                  labelName: '期限',
                  errorMessage: errors.deadlineAt?.message,
                  register: register('deadlineAt'),
                }}
              />
            </StyledContent>
            <StyledButtonBox>
              <Button
                presentational={{ text: '編集' }}
                disabled={!isValid}
                onClick={onClickEdit}
              />
            </StyledButtonBox>
          </>
        </Form>
      </>
    </Modal>
  );
}
