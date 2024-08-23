import { GetServerSideProps } from 'next/types';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import Button from '~/components/container/Button/Button';
import Icon from '~/components/container/Icon/Icon';

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledWrapButton = styled.div`
  margin-top: 32px;
`;

export default function Signin() {
  const tPage = useTranslations('pages.signin');

  return (
    <StyledSignup>
      <Icon presentational={{ name: 'UserCircle', size: 128 }} />
      <StyledWrapButton>
        <Button
          presentational={{ text: tPage('button.signin'), width: 128 }}
          onClick={signIn}
        />
      </StyledWrapButton>
    </StyledSignup>
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
