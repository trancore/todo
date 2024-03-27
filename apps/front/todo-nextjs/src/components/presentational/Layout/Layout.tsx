import styled from 'styled-components';

import Error from '~/components/container/Error/Error';
import Header from '~/components/container/Header/Header';
import TodoDetail from '~/components/container/Modal/TodoDetail';

type Props = {
  children: JSX.Element;
  opendModal: boolean;
};

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
`;

export default function Layout({ children, opendModal }: Props) {
  return (
    <>
      {opendModal && <TodoDetail />}
      <Header />
      <Error />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
