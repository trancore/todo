import { act, renderHook } from '@testing-library/react';

import { useToast } from '~/hooks/useToast';

const DELAY_TIME_SEC = 2000;

jest.useFakeTimers();

const mockUseAppDispatch = jest.fn();
const mockShow = jest.fn();
const mockHide = jest.fn();

jest.mock('~/hooks/useRedux', () => ({
  useAppDispatch: () => () => mockUseAppDispatch(),
}));
jest.mock('~/state/toast', () => ({
  show: (...arg: unknown[]) => mockShow(...arg),
  hide: () => mockHide(),
}));

describe('~/hooks/useToast.ts', () => {
  afterEach(() => {
    mockUseAppDispatch.mockReset();
    mockShow.mockReset();
    mockHide.mockReset();
    spySetTimeout.mockReset();
  });

  const { result } = renderHook(() => useToast());
  const hookToast = result.current.hookToast;
  const spySetTimeout = jest.spyOn(global, 'setTimeout');

  it('Toastを表示する。', async () => {
    await act(async () => {
      hookToast('test');

      expect(mockShow).toHaveBeenCalledTimes(1);
      expect(mockShow.mock.calls[0][0]).toStrictEqual({
        text: 'test',
      });
    });
  });

  it('Toastを表示後、規定時間が経過する。', async () => {
    await act(async () => {
      hookToast('test');

      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(
        expect.any(Function),
        DELAY_TIME_SEC,
      );
    });
  });

  it('Toastを隠す。', async () => {
    await act(async () => {
      hookToast('test');
      jest.advanceTimersByTime(DELAY_TIME_SEC);

      expect(mockHide).toHaveBeenCalledTimes(1);
    });
  });

  it('正しくない型をToastに渡した場合、無視する。', async () => {
    await act(async () => {
      // @ts-expect-error エラーとなる値をわざと指定するため
      hookToast(12345);

      expect(mockShow).toHaveBeenCalledTimes(0);
      expect(mockHide).toHaveBeenCalledTimes(0);
    });
  });
});
