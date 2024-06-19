import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Menu from '~/components/container/Menu/Menu';

const mockUseAppDispatch = jest.fn();
const mockName = jest.fn();
const mockSignOut = jest.fn();
const mockClose = jest.fn();

const mockUser = jest.fn().mockImplementation(() => ({
  name: mockName(),
}));
const mockGetUser = jest.fn().mockImplementation(() => ({
  user: mockUser(),
}));
const mockUseSignin = jest.fn().mockImplementation(() => ({
  getUser: () => mockGetUser(),
}));

jest.mock('next-auth/react', () => ({
  signOut: () => mockSignOut(),
}));
jest.mock('~/state/menu', () => ({
  close: () => mockClose(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppDispatch:
    (...arg: unknown[]) =>
    () =>
      mockUseAppDispatch(...arg),
}));
jest.mock('~/hooks/useSignin', () => ({
  useSignin: () => mockUseSignin(),
}));

describe('~/component/container/Layout/Layout.tsx', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockName.mockReset();
    cleanup();
  });

  it('ユーザー名を表示する。', () => {
    const userName = 'mockUserName';
    mockName.mockReturnValue(userName);

    const { getByText } = render(<Menu />);
    const userNameElement = getByText(userName);

    expect(userNameElement).toHaveTextContent(userName);
  });

  it('ユーザー名を表示しない。', () => {
    const userName = undefined;
    mockName.mockReturnValue(userName);

    const { container } = render(<Menu />);
    const userNameElement = container.querySelector('#user-name');

    expect(userNameElement).toHaveTextContent('');
  });

  it('サインアウトする', async () => {
    const iconName = 'PersonOff';
    const { container } = render(<Menu />);
    const iconElement = container.querySelector(`#${iconName}`);

    expect(iconElement).not.toBeNull();

    await user.click(iconElement!);
    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalledTimes(1);
    });
  });

  it('メニューを閉じる', async () => {
    const { container } = render(<Menu />);
    const styledOuterMenuElement =
      container.querySelector(`#styled-outer-menu`);

    expect(styledOuterMenuElement).not.toBeNull();

    await user.click(styledOuterMenuElement!);
    await waitFor(() => {
      expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
