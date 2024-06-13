import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Icon from '~/components/container/Icon/Icon';

const mockClickIcon = jest.fn();

describe('~/component/container/Button.tsx', () => {
  const user = userEvent.setup();

  const mockProps = {
    presentational: {
      name: 'Check',
      size: 16,
      color: undefined,
    },
    clickIcon: mockClickIcon,
  };

  beforeEach(() => {
    mockClickIcon.mockReset();
    cleanup();
  });

  it('アイコンボタン押下すると、propsで渡したclickIconを発火する。', async () => {
    const name = 'Check' as const;
    const { container } = render(
      <Icon
        presentational={{
          name: name,
          size: 16,
          color: mockProps.presentational.color,
        }}
        clickIcon={mockProps.clickIcon}
      />,
    );
    const iconElement = container.querySelector(`#${name}`);

    expect(iconElement).not.toBeNull();

    await user.click(iconElement!);
    await waitFor(() => {
      expect(mockClickIcon).toHaveBeenCalled();
    });
  });
});
