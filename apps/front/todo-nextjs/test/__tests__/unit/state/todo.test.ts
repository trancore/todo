import reducer, { release, select } from '~/state/todo';

describe('🔧Reducer: toast.ts', () => {
  it('初期stateを取得する。', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      id: '',
      title: '',
      description: '',
      deadlineAt: '',
    });
  });

  it('select()を実行する。', () => {
    const previousState = {
      id: '',
      title: '',
      description: '',
      deadlineAt: '',
    };

    expect(
      reducer(
        previousState,
        select({
          id: '1',
          todoForm: {
            title: 'test',
            description: 'testtesttest',
            deadlineAt: '2024-01-01',
          },
        }),
      ),
    ).toEqual({
      id: '1',
      title: 'test',
      description: 'testtesttest',
      deadlineAt: '2024-01-01',
    });
  });

  it('不正なIDを登録する。', () => {
    const previousState = {
      id: '',
      title: '',
      description: '',
      deadlineAt: '',
    };

    expect(
      reducer(
        previousState,
        select({
          // @ts-expect-error エラーとなる値をわざと指定するため
          id: 1,
          todoForm: {
            title: 'test',
            description: 'testtesttest',
            deadlineAt: '2024-01-01',
          },
        }),
      ),
    ).toEqual(previousState);
  });

  it('不正なTodoを登録する。', () => {
    const previousState = {
      id: '',
      title: '',
      description: '',
      deadlineAt: '',
    };

    expect(
      reducer(
        previousState,
        select({
          id: '1',
          todoForm: {
            // @ts-expect-error エラーとなる値をわざと指定するため
            title: 123,
            // @ts-expect-error エラーとなる値をわざと指定するため
            description: 123,
            // @ts-expect-error エラーとなる値をわざと指定するため
            deadlineAt: 123,
          },
        }),
      ),
    ).toEqual(previousState);
  });

  it('release()を実行する。', () => {
    const previousState = {
      id: '1',
      title: 'test',
      description: 'testtesttest',
      deadlineAt: '2024-01-01',
    };

    expect(reducer(previousState, release())).toEqual({
      id: '',
      title: '',
      description: '',
      deadlineAt: '',
    });
  });
});
