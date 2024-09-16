import '=/__mocks__/window';

import { scrollTop } from '~/utils/scroll';

describe('関数scrollTop()', () => {
  const scrollSpy = jest.spyOn(window, 'scroll');

  afterEach(() => {
    scrollSpy.mockRestore(); // testが終わる毎に元へ戻す
  });

  it('画面最上部までスクロールされる。', () => {
    scrollTop();

    expect(scrollSpy).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
    expect(scrollSpy).toHaveBeenCalledTimes(1);
  });
});
