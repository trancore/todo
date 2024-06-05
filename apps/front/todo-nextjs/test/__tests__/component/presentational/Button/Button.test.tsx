import { cleanup, render } from '@testing-library/react';

import Button from '~/components/presentational/Button/Button';

const mockOnClick = jest.fn();

describe('~/component/container/Button.tsx', () => {
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
        text={mockProps.presentational.text}
        width={mockProps.presentational.width}
        disabled={mockProps.disabled}
        onClick={mockProps.onClick}
      />,
    );

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
      <Button
        text={mockProps.presentational.text}
        width={mockProps.presentational.width}
        disabled={true}
        onClick={mockProps.onClick}
      />,
    );
    const disabledButton = getByRoleDisabled('button');

    expect(disabledButton).toBeDisabled();
  });
});
