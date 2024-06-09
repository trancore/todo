import { cleanup, queryAllByAltText, render } from '@testing-library/react';

import Date from '~/components/container/Form/Date';

const mockRegister = jest.fn();

describe('~/components/container/Form/Date.tsx', () => {
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
      <Date
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
      <Date
        presentational={{
          labelName: mockProps.labelName,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const errorMessageElement = container.querySelector('#date-error-message');

    expect(errorMessageElement).toHaveTextContent('');
  });

  it('エラーメッセージを表示する', () => {
    const mockErrorMessage = 'testErrorMessage';
    const { getByText } = render(
      <Date
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

  // どうやるか
  it('フォームと連携する', () => {
    const { getByLabelText } = render(
      <Date
        presentational={{
          labelName: mockProps.labelName,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const inputElement = getByLabelText(mockProps.labelName);
  });
});
