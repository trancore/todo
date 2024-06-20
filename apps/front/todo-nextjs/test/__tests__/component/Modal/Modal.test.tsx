import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '~/components/container/Modal/Modal';

const mockUseAppDispatch = jest.fn();
const mockClose = jest.fn();

jest.mock('~/hooks/useRedux', () => ({
  useAppDispatch:
    (...arg: unknown[]) =>
    () =>
      mockUseAppDispatch(...arg),
}));
jest.mock('~/state/modal', () => ({
  close: () => mockClose(),
}));

describe('~/component/container/Modal/Modal.tsx', () => {
  const mockProps = {
    children: <div>MockChildren</div>,
  };
  const user = userEvent.setup();

  beforeEach(() => {
    cleanup();
  });

  it('子要素を表示する。', () => {
    const { getByText } = render(<Modal>{mockProps.children}</Modal>);
    const childrenElement = getByText('MockChildren');

    expect(childrenElement).toBeDefined();
  });

  it('モーダルを閉じる。', async () => {
    const { container } = render(<Modal>{mockProps.children}</Modal>);
    const closeIconElement = container.querySelector('#Close');

    expect(closeIconElement).not.toBeNull();

    await user.click(closeIconElement!);
    await waitFor(() => {
      expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
