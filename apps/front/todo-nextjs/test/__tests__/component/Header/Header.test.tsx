import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import Header from '~/components/container/Header/Header';

import { PAGE_PATH } from '~/constants';

const mockPush = jest.fn();
const mockPathname = jest.fn();
const mockOpen = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockIsAuth = jest.fn();
const mockUseRouterNav = jest.fn().mockImplementation(() => ({
  push: (...arg: unknown[]) => mockPush(...arg),
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
  useAppDispatch: () => () => mockUseAppDispatch(),
}));
jest.mock('~/hooks/useSignin', () => ({
  useSignin: () => mockUseSignin(),
}));

describe('~/components/container/Header/Header.tsx', () => {
  let user: UserEvent;

  beforeEach(() => {
    cleanup();
    mockIsAuth.mockReset();
    mockPathname.mockReset();
    user = userEvent.setup();
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

  it('メニューをクリックして、メニューモーダルを表示する', async () => {
    mockIsAuth.mockReturnValue(true);
    mockPathname.mockReturnValue(PAGE_PATH.TOP);

    const { container } = render(<Header />);
    const menuElement = container.querySelector('#Menu');

    expect(menuElement).toBeDefined();

    await user.click(menuElement!);

    await waitFor(() => {
      expect(mockUseAppDispatch).toHaveBeenCalled();
      expect(mockOpen).toHaveBeenCalled();
    });
  });

  it('プラスアイコンをクリックして、TODO登録画面に遷移する', async () => {
    mockIsAuth.mockReturnValue(true);
    mockPathname.mockReturnValue(PAGE_PATH.TOP);

    const { container } = render(<Header />);
    const plusElement = container.querySelector('#Plus');

    expect(plusElement).toBeDefined();

    await user.click(plusElement!);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith(PAGE_PATH.REGISTER);
    });
  });

  it('ユーザーアイコンをクリックして、トップ画面に遷移する', async () => {
    mockIsAuth.mockReturnValue(true);
    mockPathname.mockReturnValue(PAGE_PATH.COMPLETED);

    const { container } = render(<Header />);
    const userElement = container.querySelector('#UserCircle');

    expect(userElement).toBeDefined();

    await user.click(userElement!);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith(PAGE_PATH.TOP);
    });
  });
});
