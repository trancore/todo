import { cleanup, render } from '@testing-library/react';

import Error from '~/components/container/Error/Error';

const mockUseAppSelector = jest.fn();

jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
}));

describe('~/component/container/Error.tsx', () => {
  afterEach(() => {
    cleanup();
    mockUseAppSelector.mockReset();
  });

  it('表示しない', () => {
    mockUseAppSelector.mockReturnValue({
      displayed: false,
      text: 'test',
    });

    const { queryByText } = render(<Error />);
    const paragraph = queryByText('test');

    expect(paragraph).toBeNull();
  });

  it('表示する', () => {
    mockUseAppSelector.mockReturnValue({
      displayed: true,
      text: 'test',
    });

    const { getByText } = render(<Error />);
    const paragraph = getByText('test');

    expect(paragraph).toBeVisible();
  });

  it('テキストを表示する', () => {
    mockUseAppSelector.mockReturnValue({
      displayed: true,
      text: 'test',
    });

    const { getByText } = render(<Error />);
    const paragraph = getByText('test');

    expect(paragraph).toHaveTextContent('test');
  });
});
