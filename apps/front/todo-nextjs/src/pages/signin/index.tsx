import { GetServerSideProps } from 'next/types';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import Button from '~/components/container/Button/Button';
import Icon from '~/components/container/Icon/Icon';
import Seo from '~/components/container/Seo/Seo';

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledWrapButton = styled.div`
  margin-top: 32px;
`;

export default function Signin() {
  const tPages = useTranslations('pages.signin');

  return (
    <Seo
      metadata={{
        title: tPages('seo.title'),
        description: tPages('seo.description'),
      }}
    >
      <StyledSignup>
        <Icon presentational={{ name: 'UserCircle', size: 128 }} />
        <StyledWrapButton>
          <Button
            presentational={{ text: tPages('button.signin'), width: 128 }}
            onClick={signIn}
          />
        </StyledWrapButton>
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
