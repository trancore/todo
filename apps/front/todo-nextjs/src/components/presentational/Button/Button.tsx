import styled from 'styled-components';

type Props = {
  text: string;
  width?: number;
};

const StyledButton = styled.button<{ width?: number }>`
  border: none;
  border-radius: 9em;
  padding: 16px 12px;
  width: ${(props) => {
    return props.width && `${props.width}px`;
  }};
  color: #ffffff;
  // TODO: storeでテーマ管理したい
  background-color: #8f8f8f;
`;

export default function Button({ text, width }: Props) {
  return <StyledButton width={width}>{text}</StyledButton>;
}
