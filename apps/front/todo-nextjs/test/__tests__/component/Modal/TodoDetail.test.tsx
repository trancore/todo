import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TodoDetail from '~/components/container/Modal/TodoDetail';

const mockPathneme = jest.fn();
const mockUseAppSelector = jest.fn();
const mockUseAppDispatch = jest.fn();
const mockSelectTodo = jest.fn();
const mockChangeTodoStatus = jest.fn();
const mockIsLoadingCompleted = jest.fn();
const mockDeleteTodo = jest.fn();
const mockIsLoadingDeleted = jest.fn();
const mockHookToast = jest.fn();
const mockCloseTodoDetailModal = jest.fn();
const mockOpenTodoEditModal = jest.fn();

const mockUseRouter = jest.fn().mockImplementation(() => ({
  pathneme: mockPathneme(),
}));
const mockUseChangeStatusTodoMutation = jest.fn().mockImplementation(() => [
  function changeTodoStatus() {
    mockChangeTodoStatus();
  },
  { isLoading: mockIsLoadingCompleted() },
]);
const mockUseDeleteTodoMutation = jest.fn().mockImplementation(() => [
  function deleteTodo() {
    mockDeleteTodo();
  },
  { isLoading: mockIsLoadingDeleted() },
]);
const mockUseToast = jest.fn().mockImplementation(() => ({
  hookToast: () => mockHookToast(),
}));
const mockUseTodoModal = jest.fn().mockImplementation(() => ({
  closeTodoModal: () => mockCloseTodoDetailModal(),
  openTodoModal: () => mockOpenTodoEditModal(),
}));

jest.mock('next/router', () => ({
  useRouter: () => mockUseRouter(),
}));
jest.mock('~/hooks/useRedux', () => ({
  useAppSelector:
    (...arg: unknown[]) =>
    () =>
      mockUseAppSelector(...arg),
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
  const mockProps = {
    children: <div>MockChildren</div>,
  };
  const user = userEvent.setup();

  beforeEach(() => {
    mockUseAppSelector.mockReset();
    mockIsLoadingCompleted.mockReset();
    mockIsLoadingDeleted.mockReset();
    cleanup();
  });

  it('', () => {
    const { getByText } = render(<TodoDetail />);
    // const childrenElement = getByText('MockChildren');
    // expect(childrenElement).toBeDefined();
  });

  it('', async () => {
    // const { container } = render(<Modal>{mockProps.children}</Modal>);
    // const closeIconElement = container.querySelector('#Close');
    // expect(closeIconElement).not.toBeNull();
    // await user.click(closeIconElement!);
    // await waitFor(() => {
    //   //   expect(mockClose).toHaveBeenCalledTimes(1);
    // });
  });
});
