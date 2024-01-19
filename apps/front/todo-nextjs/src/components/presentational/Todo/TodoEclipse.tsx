import styled from 'styled-components';

type Props = {
  title: string;
  description: string | undefined;
  click: () => undefined;
};

const StyledTodoEcipse = styled.div`
  padding: 24px 46px;
  border: 4px solid #8f8f8f;
  border-radius: 90px;
  cursor: pointer;
`;
const StyledTodoTitle = styled.h3`
  margin: 0px 0px 6px 0px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const StyledTodoDescription = styled.p`
  margin: 0px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default function TodoEclipse({ title, description, click }: Props) {
  return (
    <StyledTodoEcipse onClick={click}>
      <StyledTodoTitle>{title}</StyledTodoTitle>
      <StyledTodoDescription>{description}</StyledTodoDescription>
    </StyledTodoEcipse>
  );
}
