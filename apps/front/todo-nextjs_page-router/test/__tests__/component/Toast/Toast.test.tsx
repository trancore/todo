import { cleanup, render } from '@testing-library/react';

import Toast from '~/components/container/Toast/Toast';

const mockUseAppSelector = jest.fn();
const mockSelectToast = jest.fn();

jest.mock('~/state/toast', () => ({
  selectToast: () => mockSelectToast(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
}));

describe('~/component/container/Toast/Toast.tsx', () => {
  beforeEach(() => {
    mockUseAppSelector.mockReset();
    cleanup();
  });

  it('トーストを表示する。', async () => {
    const mockStore = {
      displayed: true,
      text: 'test',
    };
    mockUseAppSelector.mockReturnValue(mockStore);

    const { getByText } = render(<Toast />);
    const toastElement = getByText(mockStore.text);

    expect(toastElement).toHaveTextContent(mockStore.text);
  });

  it('トーストを表示しない。', async () => {
    const mockStore = {
      displayed: false,
      text: 'test',
    };
    mockUseAppSelector.mockReturnValue(mockStore);

    const { queryByText } = render(<Toast />);
    const toastElement = queryByText(mockStore.text);

    expect(toastElement).toBeNull();
  });
});
