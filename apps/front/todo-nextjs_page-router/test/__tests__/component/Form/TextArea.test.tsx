import { cleanup, render } from '@testing-library/react';

import TextArea from '~/components/container/Form/TextArea';

const mockRegister = jest.fn();

describe('~/components/container/Form/TextArea.tsx', () => {
  const mockProps = {
    labelName: 'testLabel',
    errorMessage: undefined,
    placeholder: undefined,
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
      <TextArea
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
      <TextArea
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
      <TextArea
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
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
