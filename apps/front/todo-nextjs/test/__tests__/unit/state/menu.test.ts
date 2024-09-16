import reducer, { close, open } from '~/state/menu';

describe('🔧Reducer: menu.ts', () => {
  it('初期stateを取得する。', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      opened: false,
    });
  });

  it('open()を実行する。', () => {
    const previousState = {
      opened: false,
    };

    expect(reducer(previousState, open())).toEqual({
      opened: true,
    });
  });

  it('close()を実行する。', () => {
    const previousState = {
      opened: true,
    };

    expect(reducer(previousState, close())).toEqual({
      opened: false,
    });
  });
});
