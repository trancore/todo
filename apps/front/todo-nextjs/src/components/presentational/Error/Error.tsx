import { styled } from 'styled-components';

type Props = {
  text?: string;
};

const StyledErrorparagraph = styled.p`
  margin: 0px;
  padding: 24px 24px;
  background-color: pink;
  color: red;
`;

export default function Error({ text }: Props) {
  return <StyledErrorparagraph>{text}</StyledErrorparagraph>;
}
