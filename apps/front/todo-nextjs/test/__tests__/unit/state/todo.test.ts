/**
 * @jest-environment node
 */
import reducer, { release, select } from '~/state/todo';

import { store } from '@/__mocks__/setup';

const initialState = {
  id: '',
  title: '',
  description: '',
  deadlineAt: '',
};
const dummyState = {
  id: '1',
  title: 'test',
  description: 'testtesttest',
  deadlineAt: '2024-01-01',
};

describe('🔧Reducer: todo.ts', () => {
  it('初期stateを取得する。', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('select()を実行する。', () => {
    expect(
      reducer(
        initialState,
        select({
          id: '1',
          todoForm: {
            title: 'test',
            description: 'testtesttest',
            deadlineAt: '2024-01-01',
          },
        }),
      ),
    ).toEqual(dummyState);
  });

  it('不正なIDを登録する。', () => {
    expect(
      reducer(
        initialState,
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
    ).toEqual(initialState);
  });

  it('不正なTodoを登録する。', () => {
    expect(
      reducer(
        initialState,
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
    ).toEqual(initialState);
  });

  it('release()を実行する。', () => {
    expect(reducer(dummyState, release())).toEqual(initialState);
  });
});

describe('🔧Selector: todo.ts', () => {
  beforeAll(() => {
    store.dispatch(
      select({
        id: '1',
        todoForm: {
          title: 'test',
          description: 'testtesttest',
          deadlineAt: '2024-01-01',
        },
      }),
    );
  });

  it('storeからtodoを取得する。', async () => {
    const rootStore = store.getState().todo;

    expect(rootStore).toEqual(dummyState);
  });
});
