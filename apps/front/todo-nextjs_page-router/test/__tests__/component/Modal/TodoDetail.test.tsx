import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoDetail from '~/components/container/Modal/TodoDetail';

import { PAGE_PATH } from '~/constants';

const mockUnwrap = jest.fn(() => new Promise(() => {}));
const mockPathneme = jest.fn();
const mockUseAppSelector = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockSelectTodo = jest.fn();
const mockIsLoadingCompleted = jest.fn();
const mockIsLoadingDeleted = jest.fn();
const mockHookToast = jest.fn();
const mockCloseTodoDetailModal = jest.fn();
const mockOpenTodoEditModal = jest.fn();

const mockDeleteTodo = jest.fn().mockImplementation(() => ({
  unwrap: () => mockUnwrap(),
}));
const mockChangeTodoStatus = jest.fn().mockImplementation(() => ({
  unwrap: () => mockUnwrap(),
}));
const mockUseRouter = jest.fn().mockImplementation(() => ({
  pathname: mockPathneme(),
}));
const mockUseChangeStatusTodoMutation = jest
  .fn()
  .mockImplementation(() => [
    mockChangeTodoStatus,
    { isLoading: mockIsLoadingCompleted() },
  ]);
const mockUseDeleteTodoMutation = jest
  .fn()
  .mockImplementation(() => [
    mockDeleteTodo,
    { isLoading: mockIsLoadingDeleted() },
  ]);
const mockUseToast = jest.fn().mockImplementation(() => ({
  hookToast: (...args: unknown[]) => mockHookToast(...args),
}));
const mockUseTodoModal = jest.fn().mockImplementation(() => ({
  closeTodoModal: () => mockCloseTodoDetailModal(),
  openTodoModal: (firstValue: unknown, secondValue: unknown) =>
    mockOpenTodoEditModal(firstValue, secondValue),
}));

jest.mock('next/router', () => ({
  useRouter: () => mockUseRouter(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
  useAppDispatch:
    () =>
    (...arg: unknown[]) =>
      mockUseAppDispatch(...arg),
}));
jest.mock('~/state/todo', () => ({
  selectTodo: () => mockSelectTodo(),
}));
jest.mock('~/services/todo', () => ({
  useChangeStatusTodoMutation: () => mockUseChangeStatusTodoMutation(),
  useDeleteTodoMutation: () => mockUseDeleteTodoMutation(),
}));
jest.mock('~/hooks/useToast', () => ({
  useToast: () => mockUseToast(),
}));
jest.mock('~/hooks/useTodoModal', () => ({
  useTodoModal: (...args: unknown[]) => mockUseTodoModal(...args),
}));

describe('~/component/container/Modal/TodoDetail.tsx', () => {
  const user = userEvent.setup();
  const mockStore = {
    id: '1',
    title: 'mock-title',
    description: 'mockDescription',
    deadlineAt: '2024-01-01',
  };

  beforeEach(() => {
    mockUseAppSelector.mockReset();
    mockUseAppSelector.mockReturnValue(mockStore);
    mockIsLoadingCompleted.mockReset();
    mockIsLoadingDeleted.mockReset();
    cleanup();
  });

  it('TODO完了画面で表示している。', () => {
    mockPathneme.mockReturnValue(PAGE_PATH.COMPLETED);

    const { queryAllByRole } = render(<TodoDetail />);
    const buttonElements = queryAllByRole('button');

    expect(buttonElements).toHaveLength(0);

    ['完了', '編集', '削除'].forEach((text) => {
      const result = buttonElements.find(
        (buttonElement) => (buttonElement.textContent = text),
      );
      expect(result).not.toBeDefined();
    });
  });

  it('TODO完了画面意外で表示している。', () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);

    const { queryAllByRole } = render(<TodoDetail />);
    const buttonElements = queryAllByRole('button');

    expect(buttonElements).toHaveLength(3);

    ['完了', '編集', '削除'].forEach((text) => {
      const result = buttonElements.find(
        (buttonElement) => (buttonElement.textContent = text),
      );
      expect(result).toBeDefined();
    });
  });

  it('完了ボタンを押下するとトーストが表示される。', async () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);
    mockUnwrap.mockResolvedValue(() => {});

    const { getByText } = render(<TodoDetail />);
    const completedButtonElement = getByText('完了');

    await user.click(completedButtonElement);
    await waitFor(async () => {
      expect(mockChangeTodoStatus).toHaveBeenCalledTimes(1);
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockHookToast).toHaveBeenCalledTimes(1);
      expect(mockHookToast.mock.calls[0][0]).toBe('TODOを完了にしました');
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(1);
    });
  });

  it('完了ボタンを押下したが、エラーが発生する。', async () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);
    mockUnwrap.mockRejectedValue(() => {});

    const { getByText } = render(<TodoDetail />);
    const completedButtonElement = getByText('完了');

    await user.click(completedButtonElement);
    await waitFor(async () => {
      expect(mockChangeTodoStatus).toHaveBeenCalledTimes(1);
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(0);
      expect(mockHookToast).toHaveBeenCalledTimes(1);
      expect(mockHookToast.mock.calls[0][0]).toBe('エラーが発生しました。');
    });
  });

  it('編集ボタンを押下すると、TODO編集モーダルが表示する。', async () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);

    const { getByText } = render(<TodoDetail />);
    const edittButtonElement = getByText('編集');

    await user.click(edittButtonElement);
    await waitFor(async () => {
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(1);
      expect(mockOpenTodoEditModal).toHaveBeenCalledTimes(1);
      expect(mockOpenTodoEditModal.mock.calls[0][0]).toBe(mockStore.id);
      expect(mockOpenTodoEditModal.mock.calls[0][1]).toBe(mockStore);
    });
  });

  it('削除ボタンを押下するとトーストが表示される。', async () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);
    mockUnwrap.mockResolvedValue(() => {});

    const { getByText } = render(<TodoDetail />);
    const deleteButtonElement = getByText('削除');

    await user.click(deleteButtonElement);
    await waitFor(async () => {
      expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(1);
      expect(mockHookToast).toHaveBeenCalledTimes(1);
      expect(mockHookToast.mock.calls[0][0]).toBe('TODO削除しました');
    });
  });

  it('削除ボタンを押下したが、エラーが発生する。', async () => {
    mockPathneme.mockReturnValue(PAGE_PATH.TOP);
    mockUnwrap.mockRejectedValue(() => {});

    const { getByText } = render(<TodoDetail />);
    const deleteButtonElement = getByText('削除');

    await user.click(deleteButtonElement);
    await waitFor(async () => {
      expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
      expect(mockUnwrap).toHaveBeenCalledTimes(1);
      expect(mockCloseTodoDetailModal).toHaveBeenCalledTimes(0);
      expect(mockHookToast).toHaveBeenCalledTimes(1);
      expect(mockHookToast.mock.calls[0][0]).toBe('エラーが発生しました。');
    });
  });
});
