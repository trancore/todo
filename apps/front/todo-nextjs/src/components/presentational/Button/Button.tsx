import styled from 'styled-components';

type Props = {
  text: string;
  width?: number;
  disabled?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button<{ width?: number; disabled?: boolean }>`
  border: none;
  border-radius: 9em;
  padding: 16px 12px;
  width: ${(props) => {
    return props.width && `${props.width}px`;
  }};
  color: #ffffff;
  // TODO: storeでテーマ管理したい
  background-color: ${(props) => {
    return props.disabled ? '#8f8f8f99' : '#8f8f8f';
  }};
`;

export default function Button({ text, width, disabled, onClick }: Props) {
  return (
    <StyledButton width={width} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
}
