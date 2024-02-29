import styled from 'styled-components';
import Button from '~/components/container/Button/Button';
import Form from '~/components/container/Form/Form';
import UserTextForm from '~/components/container/Form/UserTextForm';
import Icon from '~/components/container/Icon/Icon';

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInputForm = styled.div`
  margin-bottom: 46px;
  display: flex;
  flex-direction: column;
`;
const StyledWrapButton = styled.div`
  margin: 0 auto;
`;

export default function Signup() {
  return (
    <StyledSignup>
      <Icon presentational={{ name: 'UserCircle', size: 128 }} />
      <Form submit={() => {}}>
        <>
          <StyledInputForm>
            <UserTextForm
              type="text"
              presentational={{
                labelName: '名前',
                errorMessage: 'エラーメッセージが表示されます',
                register: undefined,
              }}
            />
            <UserTextForm
              type="email"
              presentational={{
                labelName: 'メールアドレス',
                errorMessage: 'エラーメッセージが表示されます',
                register: undefined,
              }}
            />
            <UserTextForm
              type="password"
              presentational={{
                labelName: 'パスワード',
                errorMessage: 'エラーメッセージが表示されます',
                register: undefined,
              }}
            />
          </StyledInputForm>
          <StyledWrapButton>
            <Button presentational={{ text: 'サインアップ', width: 128 }} />
          </StyledWrapButton>
        </>
      </Form>
    </StyledSignup>
  );
}
