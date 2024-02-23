import styled from 'styled-components';
import Header from '~/components/container/Header/Header';

type Props = {
  children: JSX.Element;
};

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
`;

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
