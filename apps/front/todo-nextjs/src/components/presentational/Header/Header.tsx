import styled from 'styled-components';
import Icon from '~/components/container/Icon/Icon';

type Props = {
  isSignin: boolean;
};

const StyledHeader = styled.header`
  height: 64px;
  padding: 18px 21px;
  background-color: #8f8f8f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeadingOne = styled.h1`
  margin: auto;
`;

export default function Header({ isSignin }: Props) {
  return (
    <StyledHeader>
      {isSignin ? (
        <>
          <Icon
            presentational={{ name: 'Menu', size: 64 }}
            clickIcon={() => {}}
          ></Icon>
          <Icon
            presentational={{ name: 'UserCircle', size: 64 }}
            clickIcon={() => {}}
          ></Icon>
          <Icon
            presentational={{ name: 'Plus', size: 64 }}
            clickIcon={() => {}}
          ></Icon>
        </>
      ) : (
        <StyledHeadingOne>todo</StyledHeadingOne>
      )}
    </StyledHeader>
  );
}
