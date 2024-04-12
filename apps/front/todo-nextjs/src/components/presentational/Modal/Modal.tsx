'use client';

import styled from 'styled-components';

import Icon from '~/components/container/Icon/Icon';

type Props = {
  children: JSX.Element;
  clickClose: () => void;
};

const StyledBackFloat = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledModalBox = styled.div`
  width: 85%;
  height: 85%;
  background-color: white;
`;
const StyledContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
`;
const StyledIcon = styled.div`
  float: right;
  top: 8px;
  position: sticky;
  position: -webkit-sticky;
  margin: 8px 8px 0px 0px;
`;
const StyledTodoContent = styled.div`
  padding: 40px 24px;
`;

export default function Modal({ children, clickClose }: Props) {
  return (
    <StyledBackFloat>
      <StyledModalBox>
        <StyledContent>
          <StyledIcon>
            <Icon
              presentational={{ name: 'Close', size: 32 }}
              clickIcon={clickClose}
            />
          </StyledIcon>
          <StyledTodoContent>{children}</StyledTodoContent>
        </StyledContent>
      </StyledModalBox>
    </StyledBackFloat>
  );
}
