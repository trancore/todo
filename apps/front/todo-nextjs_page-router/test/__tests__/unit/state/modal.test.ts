import reducer, { close, open } from '~/state/modal';

describe('🔧Reducer: model.ts', () => {
  it('初期stateを取得する。', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      displayedDetail: false,
      displayedEdit: false,
    });
  });

  it('Todo詳細モーダルでopen()を実行する。', () => {
    const previousState = {
      displayedDetail: false,
      displayedEdit: false,
    };

    expect(reducer(previousState, open({ type: 'DETAIL' }))).toEqual({
      displayedDetail: true,
      displayedEdit: false,
    });
  });

  it('Todo編集モーダルでopen()を実行する。', () => {
    const previousState = {
      displayedDetail: false,
      displayedEdit: false,
    };

    expect(reducer(previousState, open({ type: 'EDIT' }))).toEqual({
      displayedDetail: false,
      displayedEdit: true,
    });
  });

  it('正しいモーダルタイプを指定せずにopen()を実行する。', () => {
    const previousState = {
      displayedDetail: false,
      displayedEdit: false,
    };

    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(reducer(previousState, open({ type: 'TEST' }))).toEqual({
      displayedDetail: false,
      displayedEdit: false,
    });
  });

  it('close()を実行する。', () => {
    const previousState = {
      displayedDetail: true,
      displayedEdit: true,
    };

    expect(reducer(previousState, close())).toEqual({
      displayedDetail: false,
      displayedEdit: false,
    });
  });
});
