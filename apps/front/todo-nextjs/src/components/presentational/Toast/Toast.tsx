'use client';

import styled from 'styled-components';

import { popup } from '~/libs/styledComponent';

type Props = {
  text: string;
  displayed: boolean;
};

const StyledToast = styled.div`
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 24px;
  width: fit-content;
  padding: 0 32px;
  border: 2px solid red;
  background-color: white;
  font-weight: bold;

  animation: ${popup} 2s cubic-bezier(0.33, 1, 0.68, 1) forwards;
`;

export default function Toast({ text, displayed }: Props) {
  return (
    displayed && (
      <StyledToast>
        <p>{text}</p>
      </StyledToast>
    )
  );
}
