import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '~/components/container/Button/Button';

const mockOnClick = jest.fn();

describe('~/component/container/Button.tsx', () => {
  const user = userEvent.setup();

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
    cleanup();
  });

  it('ボタンを押下すると、propsで渡したonClickを発火する。', async () => {
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
    const button = getByRole('button');

    await user.click(button);
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  it('propsで渡した文言でボタンを表示する。', async () => {
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
    const button = getByRole('button');

    expect(button).toHaveTextContent('test');
  });

  it('propsで渡したサイズでボタンを表示する。', async () => {
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
    const button = getByRole('button');

    expect(button).toHaveStyle({ width: '128px' });
  });

  it('活性化したボタンを表示する。', async () => {
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
    const button = getByRole('button');

    expect(button).toBeEnabled();
  });

  it('非活性化したボタンを表示する。', async () => {
    cleanup();

    const { getByRole: getByRoleDisabled } = render(
      <Button
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
});
