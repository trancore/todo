import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import ButtonContainer from '~/components/container/Button/Button';

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
      <ButtonContainer
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

  it('propsで渡した文言でボタンを表示する。', async () => {
    expect(button).toHaveTextContent('test');
  });

  it('propsで渡したサイズでボタンを表示する。', async () => {
    expect(button).toHaveStyle({ width: '128px' });
  });

  it('活性化したボタンを表示する。', async () => {
    expect(button).toBeEnabled();
  });

  it('非活性化したボタンを表示する。', async () => {
    cleanup();

    const { getByRole: getByRoleDisabled } = render(
      <ButtonContainer
        presentational={{
          text: mockProps.presentational.text,
          width: mockProps.presentational.width,
        }}
        disabled={true}
        onClick={mockProps.onClick}
      />,
    );
    const disabledButton = getByRoleDisabled('button');

    expect(disabledButton).toBeDisabled();
  });

  it('ボタンを押下すると、propsで渡したonClickを発火する。', async () => {
    await user.click(button);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
