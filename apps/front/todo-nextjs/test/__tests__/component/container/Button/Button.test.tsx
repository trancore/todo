import { render, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import Button from '~/components/container/Button/Button';

const mockOnClick = jest.fn();

describe('~/component/container/Button.tsx', () => {
  let user: UserEvent;
  let button: HTMLElement;

  const mockProps = {
    presentational: {
      text: 'test',
      width: 128,
    },
    disabled: false,
    onClick: mockOnClick,
  };

  beforeEach(() => {
    mockOnClick.mockReset();

    const { getByRole } = render(
      <Button
        presentational={{
          text: mockProps.presentational.text,
          width: mockProps.presentational.width,
        }}
        disabled={mockProps.disabled}
        onClick={mockProps.onClick}
      />,
    );

    user = userEvent.setup();
    button = getByRole('button');
  });

  it('ボタンを押下すると、propsで渡したonClickを発火する。', async () => {
    await user.click(button);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
