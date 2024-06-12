import { cleanup, render } from '@testing-library/react';

import UserTextForm from '~/components/container/Form/UserTextForm';

const mockRegister = jest.fn();

describe('~/components/container/Form/UserTextForm.tsx', () => {
  const mockProps = {
    labelName: 'testLabel',
    placeholder: 'testPlaceholder',
    errorMessage: undefined,
    register: mockRegister(),
  };

  beforeEach(() => {
    cleanup();
    mockRegister.mockReset();
  });

  it('テキストフォームを表示する', async () => {
    const type = 'text';
    const { getByPlaceholderText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={type}
      />,
    );
    const placeholderElement = getByPlaceholderText(mockProps.placeholder);

    expect(placeholderElement).toHaveAttribute('type', type);
  });

  it('メールフォームを表示する', async () => {
    const type = 'email';
    const { getByPlaceholderText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={type}
      />,
    );
    const placeholderElement = getByPlaceholderText(mockProps.placeholder);

    expect(placeholderElement).toHaveAttribute('type', type);
  });

  it('パスワードフォームを表示する', async () => {
    const type = 'password';
    const { getByPlaceholderText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={type}
      />,
    );
    const placeholderElement = getByPlaceholderText(mockProps.placeholder);

    expect(placeholderElement).toHaveAttribute('type', type);
  });

  it('ラベル名を表示する', async () => {
    const { getByText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={'text'}
      />,
    );
    const labelElement = getByText(mockProps.labelName);

    expect(labelElement).toHaveTextContent(mockProps.labelName);
  });

  it('プレースホルダーを表示しない', () => {
    const { queryByPlaceholderText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: undefined,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={'text'}
      />,
    );
    const placeholderElement = queryByPlaceholderText('');

    expect(placeholderElement).toBeNull();
  });

  it('プレースホルダーを表示する', () => {
    const mockPlaceholder = 'testPlaceholder';
    const { queryByPlaceholderText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockPlaceholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={'text'}
      />,
    );
    const placeholderElement = queryByPlaceholderText(mockPlaceholder);

    expect(placeholderElement).toBeDefined();
  });

  it('エラーメッセージを表示しない', () => {
    const { container } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockProps.errorMessage,
          register: mockProps.register,
        }}
        type={'text'}
      />,
    );
    const errorMessageElement = container.querySelector(
      '#user-text-form-error-message',
    );

    expect(errorMessageElement).toHaveTextContent('');
  });

  it('エラーメッセージを表示する', () => {
    const mockErrorMessage = 'testErrorMessage';
    const { getByText } = render(
      <UserTextForm
        presentational={{
          labelName: mockProps.labelName,
          placeholder: mockProps.placeholder,
          errorMessage: mockErrorMessage,
          register: mockProps.register,
        }}
        type={'text'}
      />,
    );
    const errorMessageElement = getByText(mockErrorMessage);

    expect(errorMessageElement).toHaveTextContent(mockErrorMessage);
  });
});
