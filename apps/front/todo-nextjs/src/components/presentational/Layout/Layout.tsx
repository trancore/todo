import styled from 'styled-components';

import Error from '~/components/container/Error/Error';
import Header from '~/components/container/Header/Header';
import Menu from '~/components/container/Menu/Menu';
import TodoDetail from '~/components/container/Modal/TodoDetail';
import TodoEdit from '~/components/container/Modal/TodoEdit';

type Props = {
  children: JSX.Element;
  openedTodoDetailModal: boolean;
  openedTodoEditModal: boolean;
  openedMenu: boolean;
};

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 44px 15px;
  max-width: 512px;
`;

export default function Layout({
  children,
  openedTodoDetailModal,
  openedTodoEditModal,
  openedMenu,
}: Props) {
  return (
    <>
      {openedMenu && <Menu />}
      {openedTodoDetailModal && <TodoDetail />}
      {openedTodoEditModal && <TodoEdit />}
      <Header />
      <Error />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
