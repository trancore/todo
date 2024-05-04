import { signIn } from 'next-auth/react';
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
  return (
    <StyledSignup>
      <Icon presentational={{ name: 'UserCircle', size: 128 }} />
      <StyledWrapButton>
        <Button
          presentational={{ text: 'サインイン', width: 128 }}
          onClick={signIn}
        />
      </StyledWrapButton>
    </StyledSignup>
  );
}
