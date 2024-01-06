import styled from 'styled-components';
import Icon from '~/components/container/Icon/Icon';

type Props = {
  isSignin: boolean;
};

export default function Header({ isSignin }: Props) {
  const Header = styled.header`
    height: 64px;
    padding: 18px 21px;
    background-color: #8f8f8f;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const HeadingOne = styled.h1`
    margin: auto;
  `;

  return (
    <Header>
      {isSignin ? (
        <>
          <Icon presentational={{ name: 'Menu', size: 64 }}></Icon>
          <Icon presentational={{ name: 'UserCircle', size: 64 }}></Icon>
          <Icon presentational={{ name: 'Plus', size: 64 }}></Icon>{' '}
        </>
      ) : (
        <HeadingOne>todo</HeadingOne>
      )}
    </Header>
  );
}
