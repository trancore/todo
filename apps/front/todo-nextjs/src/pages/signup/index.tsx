import { GetServerSideProps } from 'next/types';

import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import Button from '~/components/container/Button/Button';
import Form from '~/components/container/Form/Form';
import UserTextForm from '~/components/container/Form/UserTextForm';
import Icon from '~/components/container/Icon/Icon';
import Seo from '~/components/container/Seo/Seo';

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
// TODO サインアップ画面は、eメールとパスワードによる認証認可が実装されていないため
// TODO 一旦放置
export default function Signup() {
  const tPage = useTranslations('pages.signup');

  return (
    <Seo title={tPage('seo.title')} description={tPage('seo.description')}>
      <StyledSignup>
        <Icon presentational={{ name: 'UserCircle', size: 128 }} />
        <Form submit={() => {}}>
          <>
            <StyledInputForm>
              <UserTextForm
                type="text"
                presentational={{
                  labelName: tPage('form.name'),
                  errorMessage: 'エラーメッセージが表示されます',
                  register: undefined,
                }}
              />
              <UserTextForm
                type="email"
                presentational={{
                  labelName: tPage('form.email'),
                  errorMessage: 'エラーメッセージが表示されます',
                  register: undefined,
                }}
              />
              <UserTextForm
                type="password"
                presentational={{
                  labelName: tPage('form.password'),
                  errorMessage: 'エラーメッセージが表示されます',
                  register: undefined,
                }}
              />
            </StyledInputForm>
            <StyledWrapButton>
              <Button
                presentational={{ text: tPage('button.signup'), width: 128 }}
                onClick={() => {}}
              />
            </StyledWrapButton>
          </>
        </Form>
      </StyledSignup>
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
