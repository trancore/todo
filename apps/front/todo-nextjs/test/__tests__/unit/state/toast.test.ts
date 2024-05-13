import reducer, { hide, show } from '~/state/toast';

describe('🔧Reducer: toast.ts', () => {
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

  it('テキスト以外をshow()に渡す。', () => {
    const previousState = {
      displayed: false,
      text: '',
    };

    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(reducer(previousState, show({ text: 12345 }))).toEqual(
      previousState,
    );
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
