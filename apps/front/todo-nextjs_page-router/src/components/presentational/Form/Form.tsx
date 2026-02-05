import { styled } from 'styled-components';

type Props = {
  children: JSX.Element;
  submit?: () => undefined;
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
    box-sizing: content-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 2px solid #000000;
    padding: 8px 10px;
  }

  textarea {
    width: 100%;
    box-sizing: content-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 2px solid #000000;
    padding: 8px 10px;
  }

  p {
    margin-left: 10px;
    color: #ff0000;
  }
`;

export default function Form({ submit, children }: Props) {
  return <StyledForm onSubmit={submit && submit()}>{children}</StyledForm>;
}
