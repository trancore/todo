import { cleanup, render } from '@testing-library/react';

import TextForm from '~/components/container/Form/TextForm';

const mockRegister = jest.fn();

describe('~/components/container/Form/TextForm.tsx', () => {
  const mockProps = {
    labelName: 'testLabel',
    placeholder: undefined,
    errorMessage: undefined,
    register: mockRegister(),
  };

  beforeEach(() => {
    cleanup();
    mockRegister.mockReset();
  });

  it('ラベル名を表示する', async () => {
    const { getByText } = render(
      <TextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const labelElement = getByText(mockProps.labelName);

    expect(labelElement).toHaveTextContent(mockProps.labelName);
  });

  it('プレースホルダーを表示しない', () => {
    const mockPlaceholder = 'testPlaceholder';
    const { queryByPlaceholderText } = render(
      <TextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const placeholderElement = queryByPlaceholderText(mockPlaceholder);

    expect(placeholderElement).toBeNull();
  });

  it('プレースホルダーを表示する', () => {
    const mockPlaceholder = 'testPlaceholder';
    const { queryByPlaceholderText } = render(
      <TextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockPlaceholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const placeholderElement = queryByPlaceholderText(mockPlaceholder);

    expect(placeholderElement).toBeDefined();
  });

  it('エラーメッセージを表示しない', () => {
    const { container } = render(
      <TextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const errorMessageElement = container.querySelector(
      '#textform-error-message',
    );

    expect(errorMessageElement).toHaveTextContent('');
  });

  it('エラーメッセージを表示する', () => {
    const mockErrorMessage = 'testErrorMessage';
    const { getByText } = render(
      <TextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockErrorMessage,
          register: mockProps.register,
        }}
      />,
    );
    const errorMessageElement = getByText(mockErrorMessage);

    expect(errorMessageElement).toHaveTextContent(mockErrorMessage);
  });
});
