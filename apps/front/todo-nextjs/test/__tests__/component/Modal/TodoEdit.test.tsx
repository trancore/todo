import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoEdit from '~/components/container/Modal/TodoEdit';

const mockUseAppSelector = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockSelectTodo = jest.fn();
const mockHookToast = jest.fn();
const mockCloseTodoDetailModal = jest.fn();

const mockUnwrap = jest.fn(() => new Promise(() => {}));

const mockEditTodo = jest.fn().mockImplementation(() => ({
  unwrap: () => mockUnwrap(),
}));
const mockUseEditTodoMutation = jest
  .fn()
  .mockImplementation(() => [mockEditTodo]);
const mockUseToast = jest.fn().mockImplementation(() => ({
  hookToast: (...args: unknown[]) => mockHookToast(...args),
}));
const mockUseTodoModal = jest.fn().mockImplementation(() => ({
  closeTodoModal: () => mockCloseTodoDetailModal(),
}));

jest.mock('~/state/todo', () => ({
  selectTodo: () => mockSelectTodo(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
  useAppDispatch:
    () =>
    (...arg: unknown[]) =>
      mockUseAppDispatch(...arg),
}));
jest.mock('~/services/todo', () => ({
  useEditTodoMutation: () => mockUseEditTodoMutation(),
}));
jest.mock('~/hooks/useToast', () => ({
  useToast: () => mockUseToast(),
}));
jest.mock('~/hooks/useTodoModal', () => ({
  useTodoModal: (...args: unknown[]) => mockUseTodoModal(...args),
}));

describe('~/component/container/Modal/TodoEdit.tsx', () => {
  const user = userEvent.setup();

  const mockStore = {
    id: '1',
    title: 'mockTitle',
    description: 'mockDescription',
    deadlineAt: '2024-01-01',
  };
  const mockInput = {
    title: 'mockInputTitle',
    description: 'mockInputDescription',
    deadlineAt: '2024-04-01',
  };

  beforeEach(() => {
    mockUseAppSelector.mockReset();
    mockUseAppSelector.mockReturnValue(mockStore);
    cleanup();
  });

  describe('タイトル入力フォーム', () => {
    it('有効なテキストを入力する。', async () => {
      const { container, getByRole } = render(<TodoEdit />);
      const titleInputElement = getByRole('textbox', { name: 'タイトル' });
      const titleInputErrorElement = container.querySelector(
        '#textform-error-message',
      );

      expect(titleInputErrorElement).not.toBeNull();

      await user.type(titleInputElement!, mockInput.title);

      expect(titleInputElement).toHaveValue(mockInput.title);
      expect(titleInputErrorElement).toHaveTextContent('');
    });

    it('何も入力しない。', async () => {
      const { container, getByRole } = render(<TodoEdit />);
      const titleInputElement = getByRole('textbox', { name: 'タイトル' });
      const titleInputErrorElement = container.querySelector(
        '#textform-error-message',
      );

      expect(titleInputErrorElement).not.toBeNull();

      await user.type(titleInputElement, mockInput.title);
      await user.clear(titleInputElement);

      expect(titleInputErrorElement).toHaveTextContent('必須項目です');
    });

    it('101文字のテキストを入力する。', async () => {
      const { container, getByRole } = render(<TodoEdit />);
      const titleInputElement = getByRole('textbox', { name: 'タイトル' });
      const titleInputErrorElement = container.querySelector(
        '#textform-error-message',
      );

      expect(titleInputErrorElement).not.toBeNull();

      // 101文字
      const inValidText =
        '10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす1';

      await user.type(titleInputElement!, inValidText);

      expect(titleInputElement).toHaveValue(inValidText);
      expect(titleInputErrorElement).toHaveTextContent(
        '100文字以下で入力してください',
      );
    });
  });

  describe('説明入力フォーム', () => {
    it('有効なテキストを入力する。', async () => {
      const { container, getByRole } = render(<TodoEdit />);
      const descriptionInputElement = getByRole('textbox', { name: '説明' });
      const descriptionInputErrorElement = container.querySelector(
        '#textarea-error-message',
      );

      expect(descriptionInputErrorElement).not.toBeNull();

      await user.type(descriptionInputElement, mockInput.description);

      expect(descriptionInputElement).toHaveValue(mockInput.description);
      expect(descriptionInputErrorElement).toHaveTextContent('');
    });

    it('501文字のテキストを入力する。', async () => {
      const { container, getByRole } = render(<TodoEdit />);
      const descriptionInputElement = getByRole('textbox', { name: '説明' });
      const descriptionInputErrorElement = container.querySelector(
        '#textarea-error-message',
      );

      expect(descriptionInputErrorElement).not.toBeNull();

      // 501文字
      const inValidText =
        '10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす10文字ですすすすす1';

      await user.type(descriptionInputElement, inValidText);

      expect(descriptionInputElement).toHaveValue(inValidText);
      expect(descriptionInputErrorElement).toHaveTextContent(
        '500文字以下で入力してください',
      );
    });
  });

  it('編集ボタンを押下する。', async () => {
    mockUnwrap.mockResolvedValue(() => {});

    const { getByRole, container } = render(<TodoEdit />);
    const titleInputElement = getByRole('textbox', { name: 'タイトル' });
    const descriptionInputElement = container.querySelector('#textarea');
    const deadlineAtInputElement = container.querySelector('#date');
    const editButtonElement = getByRole('button');

    expect(descriptionInputElement).not.toBeNull();
    expect(deadlineAtInputElement).not.toBeNull();

    await user.type(titleInputElement, mockInput.title);
    await user.type(descriptionInputElement!, mockInput.description);
    await user.type(deadlineAtInputElement!, mockInput.deadlineAt);

    await user.click(editButtonElement);
    await waitFor(async () => {
      expect(mockEditTodo).toHaveBeenCalledTimes(1);
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockHookToast).toHaveBeenCalledTimes(1);
      expect(mockHookToast.mock.calls[0][0]).toBe('Todoが更新されました');
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(1);
    });
  });
});
