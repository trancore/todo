import styled from 'styled-components';

import Error from '~/components/container/Error/Error';
import Header from '~/components/container/Header/Header';
import TodoDetail from '~/components/container/Modal/TodoDetail';
import TodoEdit from '~/components/container/Modal/TodoEdit';

type Props = {
  children: JSX.Element;
  opendTodoDetailModal: boolean;
  opendTodoEditModal: boolean;
};

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
`;

export default function Layout({
  children,
  opendTodoDetailModal,
  opendTodoEditModal,
}: Props) {
  return (
    <>
      {opendTodoDetailModal && <TodoDetail />}
      {opendTodoEditModal && <TodoEdit />}
      <Header />
      <Error />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
