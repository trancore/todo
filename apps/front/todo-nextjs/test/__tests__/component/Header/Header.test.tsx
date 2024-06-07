import { cleanup, render } from '@testing-library/react';

import Header from '~/components/container/Header/Header';

import { PAGE_PATH } from '~/constants';

const mockPush = jest.fn();
const mockPathname = jest.fn();
const mockOpen = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockIsAuth = jest.fn();
const mockUseRouterNav = jest.fn().mockImplementation(() => ({
  push: mockPush(),
}));
const mockUseRouter = jest.fn().mockImplementation(() => ({
  pathname: mockPathname(),
}));
const mockUseSignin = jest.fn().mockImplementation(() => ({
  isAuth: mockIsAuth(),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => mockUseRouterNav(),
}));
jest.mock('next/router', () => ({
  useRouter: () => mockUseRouter(),
}));
jest.mock('~/state/menu', () => ({
  open: () => mockOpen(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppDispatch: () => mockUseAppDispatch(),
}));
jest.mock('~/hooks/useSignin', () => ({
  useSignin: () => mockUseSignin(),
}));

describe('~/components/container/Header/Header.tsx', () => {
  beforeEach(() => {
    cleanup();
    mockIsAuth.mockReset();
    mockPathname.mockReset();
  });

  it('サインインしていない', () => {
    mockIsAuth.mockReturnValue(false);

    const { queryByText } = render(<Header />);
    const element = queryByText('todo');

    expect(element).toBeTruthy();
  });

  it('サインインしている、かつTODO登録画面の時', () => {
    mockIsAuth.mockReturnValue(true);
    mockPathname.mockReturnValue(PAGE_PATH.REGISTER);

    const { container } = render(<Header />);
    const svgElements = container.getElementsByTagName('svg');
    const noneElement = container.querySelectorAll('#None');

    expect(svgElements).toHaveLength(3);
    expect(noneElement).toHaveLength(1);
  });

  it('サインインしている、かつTODO登録画面ではない', () => {
    mockIsAuth.mockReturnValue(true);
    mockPathname.mockReturnValue(PAGE_PATH.TOP);

    const { container } = render(<Header />);
    const svgElements = container.getElementsByTagName('svg');
    const plusElement = container.querySelectorAll('#Plus');

    expect(svgElements).toHaveLength(3);
    expect(plusElement).toHaveLength(1);
  });

  // ユーザーイベント
});
