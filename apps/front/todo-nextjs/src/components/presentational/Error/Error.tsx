import { styled } from 'styled-components';

type Props = {
  displayed: boolean;
  text?: string;
};

const StyledErrorparagraph = styled.p`
  margin: 0px;
  padding: 24px 24px;
  background-color: pink;
  color: red;
`;

export default function Error({ displayed, text }: Props) {
  return displayed && <StyledErrorparagraph>{text}</StyledErrorparagraph>;
}
