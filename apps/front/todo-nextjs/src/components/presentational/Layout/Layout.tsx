import styled from 'styled-components';
import Header from '~/components/container/Header/Header';

type Props = {
  children: JSX.Element;
};

const StyledLayout = styled.div`
  padding: 44px 15px;
`;

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
