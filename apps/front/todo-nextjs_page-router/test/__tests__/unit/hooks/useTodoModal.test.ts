import { act, renderHook } from '@testing-library/react';

import { TodoForm } from '~/types/todo';

import { useTodoModal } from '~/hooks/useTodoModal';

const mockUseAppSelector = jest.fn().mockReturnValue({
  displayedDetail: false,
  displayedEdit: false,
});
const mockUseAppDispatch = jest.fn();

jest.mock('~/hooks/useRedux', () => ({
  useAppSelector: (...arg: unknown[]) => mockUseAppSelector(...arg),
  useAppDispatch:
    (...arg: unknown[]) =>
    () =>
      mockUseAppDispatch(...arg),
}));

const mockId: string = 'testId';
const mockTodoForm: TodoForm = {
  title: 'test',
  description: 'test',
  deadlineAt: '2024-01-01',
};

describe('~/hooks/useTodoModal.ts DETAIL', () => {
  beforeAll(() => {
    mockUseAppSelector.mockReset();
    mockUseAppDispatch.mockReset();
  });

  const { result } = renderHook(() => useTodoModal('DETAIL'));
  const {
    isOpendDetailModal,
    isOpendEditModal,
    openTodoModal,
    closeTodoModal,
  } = result.current;

  it('isOpendDetailModalをstoreから取得する。', async () => {
    await act(async () => {
      expect(isOpendDetailModal).toEqual(false);
    });
  });

  it('isOpendEditModalをstoreから取得する。', async () => {
    await act(async () => {
      expect(isOpendEditModal).toEqual(false);
    });
  });

  it('DETAILのTodoModalを表示する。', async () => {
    await act(async () => {
      openTodoModal(mockId, mockTodoForm);

      expect(mockUseAppDispatch).toHaveBeenCalledTimes(2);
    });
  });

  it('DETAILのTodoModalを閉じる。', async () => {
    await act(async () => {
      closeTodoModal();

      expect(mockUseAppDispatch).toHaveBeenCalledTimes(2);
    });
  });
});
