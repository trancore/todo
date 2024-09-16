'use client';

import Link from 'next/link';

import styled from 'styled-components';

import { slidein } from '~/libs/styledComponent';

import Icon from '~/components/container/Icon/Icon';

type Props = {
  userName: string;
  signOut: () => void;
  closeMenu: () => void;
};

const StyledBackFloat = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledMenu = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #4d4d4d;
  color: #ffffff;

  animation: ${slidein} 0.3s ease-in;
`;
const StyledOuterMenu = styled.div`
  flex-grow: 1;
`;
const StyledMenuTitleBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #ffffff;
`;
const StyledMenuContentBox = styled.div`
  padding-top: 64px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 24px;
`;
const StyledMenuContentList = styled.li`
  list-style: none;
`;
const StyledWrapIcon = styled.div`
  margin: 0px 24px 24px 0px;
  display: flex;
  flex-direction: row-reverse;
`;

export default function Menu({ userName, signOut, closeMenu }: Props) {
  return (
    <StyledBackFloat>
      <StyledMenu test-id="menu-float">
        <StyledMenuTitleBox>
          <h1 id="user-name">{userName}</h1>
        </StyledMenuTitleBox>
        <StyledMenuContentBox>
          <StyledMenuContentList>
            <Link href={'/completed'} onClick={closeMenu}>
              <h3>完了済TODO</h3>
            </Link>
          </StyledMenuContentList>
        </StyledMenuContentBox>
        <StyledWrapIcon>
          <Icon
            presentational={{
              name: 'PersonOff',
              size: 64,
              color: '#FFFFFF',
            }}
            clickIcon={signOut}
          />
        </StyledWrapIcon>
      </StyledMenu>
      <StyledOuterMenu
        id="styled-outer-menu"
        onClick={closeMenu}
      ></StyledOuterMenu>
    </StyledBackFloat>
  );
}
