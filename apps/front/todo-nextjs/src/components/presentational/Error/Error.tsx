import { styled } from 'styled-components';

type Props = {
  text?: string;
};

const StyledErrorparagraph = styled.p`
  padding: 24px 24px;
  background-color: lightcoral;
  color: crimson;
`;

export default function Error({ text }: Props) {
  return <StyledErrorparagraph>{text}</StyledErrorparagraph>;
}
