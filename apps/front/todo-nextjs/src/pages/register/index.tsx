import styled from 'styled-components';
import Button from '~/components/container/Button/Button';
import Date from '~/components/container/Form/Date';
import Form from '~/components/container/Form/Form';
import TextArea from '~/components/container/Form/TextArea';
import TextForm from '~/components/container/Form/TextForm';

const StyledInputForm = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;
const StyledButtonWrap = styled.div`
  margin: 0 auto;
`;

export default function Register() {
  return (
    <>
      <h1>登録</h1>
      <Form submit={() => {}}>
        <>
          <StyledInputForm>
            <TextForm
              presentational={{
                labelName: 'タイトル',
                errorMessage: 'エラーメッセージが表示されます。',
                register: undefined,
              }}
            />
            <TextArea
              presentational={{
                labelName: '説明',
                errorMessage: 'エラーメッセージが表示されます。',
                register: undefined,
              }}
            />
            <Date
              presentational={{
                labelName: '期限',
                errorMessage: 'エラーメッセージが表示されます。',
                register: undefined,
              }}
            />
          </StyledInputForm>
          <StyledButtonWrap>
            <Button presentational={{ text: '登録', width: 128 }}></Button>
          </StyledButtonWrap>
        </>
      </Form>
    </>
  );
}
