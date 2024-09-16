import reducer, { hide, show } from '~/state/error';

describe('🔧Reducer: error.ts', () => {
  it('初期stateを取得する。', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      displayed: false,
      text: '',
    });
  });

  it('show()を実行する。', () => {
    const previousState = {
      displayed: false,
      text: '',
    };

    expect(reducer(previousState, show({ text: 'test' }))).toEqual({
      displayed: true,
      text: 'test',
    });
  });

  it('show()に型の異なる引数を渡す。', () => {
    const previousState = {
      displayed: false,
      text: '',
    };

    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(reducer(previousState, show({ text: false }))).toEqual({
      displayed: false,
      text: '',
    });
  });

  it('hide()を実行する。', () => {
    const previousState = {
      displayed: true,
      text: 'test',
    };

    expect(reducer(previousState, hide())).toEqual({
      displayed: false,
      text: '',
    });
  });
});
