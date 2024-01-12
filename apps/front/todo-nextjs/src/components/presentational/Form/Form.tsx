import { styled } from 'styled-components';

type Props = {
  children: JSX.Element;
  submit: () => undefined;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  > input {
    width: 100%;
    border: 2px solid #000000;
    padding: 8px 10px;
  }

  > textarea {
    width: 100%;
    border: 2px solid #000000;
    padding: 8px 10px;
  }

  > p {
    margin-left: 10px;
    color: #ff0000;
  }
`;

export default function Form({ submit, children }: Props) {
  return <StyledForm onSubmit={submit()}>{children}</StyledForm>;
}
