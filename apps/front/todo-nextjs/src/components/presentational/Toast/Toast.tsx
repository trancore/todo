'use client';

import styled from 'styled-components';

type Props = {
  text: string;
};

const StyledToast = styled.div`
  padding: 0 32px;
  width: fit-content;
  border: 2px solid red;
  font-weight: bold;
`;

export default function Modal({ text }: Props) {
  return (
    <StyledToast>
      <p>{text}</p>
    </StyledToast>
  );
}
