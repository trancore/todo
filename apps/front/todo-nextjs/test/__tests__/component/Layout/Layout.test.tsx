import { cleanup, render } from '@testing-library/react';

import Layout from '~/components/container/Layout/Layout';

const mockDisplayedDetail = jest.fn();
const mockDisplayedEdit = jest.fn();
const mockOpened = jest.fn();
const mockUseAppDispatch = jest.fn();

const mockUseAppSelector = jest.fn().mockImplementation(() => ({
  displayedDetail: (...arg: unknown[]) => mockDisplayedDetail(...arg),
  displayedEdit: (...arg: unknown[]) => mockDisplayedEdit(...arg),
  opened: (...arg: unknown[]) => mockOpened(...arg),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
  useAppDispatch: () => mockUseAppDispatch(),
}));
jest.mock(
  '~/components/container/Menu/Menu',
  () =>
    function MockMenu() {
      return <div>mockMenu</div>;
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
    children: <div>mockChildren</div>,
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
    const mockElement = getByText('mockMenu');

    expect(mockElement).toBeDefined();
  });
});
