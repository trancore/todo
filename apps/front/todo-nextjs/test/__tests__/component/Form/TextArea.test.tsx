import { cleanup, render } from '@testing-library/react';

import TextArea from '~/components/container/Form/TextArea';

const mockRegister = jest.fn();

describe('~/components/container/Form/TextArea.tsx', () => {
  const mockProps = {
    labelName: 'testLabel',
    errorMessage: undefined,
    register: mockRegister(),
  };

  beforeEach(() => {
    cleanup();
    mockRegister.mockReset();
  });

  it('ラベル名を表示する', async () => {
    const { getByText } = render(
      <TextArea
        presentational={{
          labelName: mockProps.labelName,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const labelElement = getByText(mockProps.labelName);

    expect(labelElement).toHaveTextContent(mockProps.labelName);
  });

  it('エラーメッセージを表示しない', () => {
    const { container } = render(
      <TextArea
        presentational={{
          labelName: mockProps.labelName,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const errorMessageElement = container.querySelector(
      '#textarea-error-message',
    );

    expect(errorMessageElement).toHaveTextContent('');
  });

  it('エラーメッセージを表示する', () => {
    const mockErrorMessage = 'testErrorMessage';
    const { getByText } = render(
      <TextArea
        presentational={{
          labelName: mockProps.labelName,
          errorMessage: mockErrorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const errorMessageElement = getByText(mockErrorMessage);

    expect(errorMessageElement).toHaveTextContent(mockErrorMessage);
  });
});
