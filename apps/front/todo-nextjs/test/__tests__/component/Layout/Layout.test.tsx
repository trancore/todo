import { cleanup, render } from '@testing-library/react';

import Layout from '~/components/container/Layout/Layout';

const mockDisplayedDetail = jest.fn();
const mockDisplayedEdit = jest.fn();
const mockOpened = jest.fn();
const mockUseAppDispatch = jest.fn();

const mockUseAppSelector = jest.fn().mockImplementation(() => ({
  displayedDetail: mockDisplayedDetail(),
  displayedEdit: mockDisplayedEdit(),
  opened: mockOpened(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
  useAppDispatch: () => mockUseAppDispatch(),
}));
jest.mock(
  '~/components/container/Menu/Menu',
  () =>
    function MockMenu() {
      return <div>MockMenu</div>;
    },
);
jest.mock(
  '~/components/container/Modal/TodoDetail',
  () =>
    function MockTodoDetail() {
      return <div>MockTodoDetail</div>;
    },
);
jest.mock(
  '~/components/container/Modal/TodoEdit',
  () =>
    function MockTodoTodoEdit() {
      return <div>MockTodoTodoEdit</div>;
    },
);
jest.mock(
  '~/components/container/Header/Header',
  () =>
    function MockHeader() {
      return <div>MockHeader</div>;
    },
);

describe('~/component/container/Layout/Layout.tsx', () => {
  const mockProps = {
    children: <div>MockChildren</div>,
  };

  beforeEach(() => {
    mockDisplayedDetail.mockReset();
    mockDisplayedEdit.mockReset();
    mockOpened.mockReset();
    cleanup();
  });

  it('メニューを表示する。', () => {
    mockOpened.mockReturnValue(true);
    const { getByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockMenuElement = getByText('MockMenu');

    expect(mockMenuElement).toBeDefined();
  });

  it('メニューを表示しない。', () => {
    mockOpened.mockReturnValue(false);
    const { queryByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockMenuElement = queryByText('MockMenu');

    expect(mockMenuElement).toBeNull();
  });

  it('Todo詳細モーダルを表示する。', () => {
    mockDisplayedDetail.mockReturnValue(true);
    const { getByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockTodoDetailModalElement = getByText('MockTodoDetail');

    expect(mockTodoDetailModalElement).toBeDefined();
  });

  it('Todo詳細モーダルを表示しない。', () => {
    mockOpened.mockReturnValue(false);
    const { queryByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockTodoDetailModalElement = queryByText('MockTodoDetail');

    expect(mockTodoDetailModalElement).toBeNull();
  });

  it('Todo編集モーダルを表示する。', () => {
    mockDisplayedDetail.mockReturnValue(true);
    const { getByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockTodoEditModalElement = getByText('MockTodoDetail');

    expect(mockTodoEditModalElement).toBeDefined();
  });

  it('Todo編集モーダルを表示しない。', () => {
    mockOpened.mockReturnValue(false);
    const { queryByText } = render(<Layout>{mockProps.children}</Layout>);
    const mockTodoEditModalElement = queryByText('MockTodoDetail');

    expect(mockTodoEditModalElement).toBeNull();
  });

  it('childrenを表示する。', () => {
    const { getByText } = render(<Layout>{mockProps.children}</Layout>);
    const children = getByText('MockChildren');

    expect(children).toBeDefined();
  });
});
