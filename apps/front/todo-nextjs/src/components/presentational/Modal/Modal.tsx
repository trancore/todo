'use client';

import styled from 'styled-components';

type Props = {
  children: JSX.Element;
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

const StyledModalContent = styled.div`
  width: 85%;
  height: 85%;
  background-color: white;
`;

export default function Modal({ children }: Props) {
  return (
    <StyledBackFloat>
      <StyledModalContent>{children}</StyledModalContent>
    </StyledBackFloat>
  );
}
