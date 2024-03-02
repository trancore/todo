import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import Button from '~/components/container/Button/Button';
import DateForm from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';

type Inputs = {
  title: string;
  description?: string;
  deadline?: Date;
};

const inputsSchema = yup.object().shape({
  title: yup
    .string()
    .required('必須項目です')
    .max(100, '100文字以下で入力してください'),
  description: yup.string().max(500, '500文字以下で入力してください'),
  deadline: yup.date().transform(function (value, originalValue) {
    if (originalValue === '') {
      return undefined;
    }

    return value;
  }),
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

  const submit: SubmitHandler<Inputs> = (inputs) => {
    console.log('🚀 ~ Register ~ inputs:', inputs);
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
                errorMessage: errors.deadline?.message,
                register: register('deadline'),
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
