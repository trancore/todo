import { dateFormat } from '~/utils/date';

const { formatToYYYYMMdd } = dateFormat();

describe('関数formatToYYYYMMdd()', () => {
  it('引数にDate以外を指定する。', () => {
    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(() => formatToYYYYMMdd('test')).toThrow(Error);
  });

  it('引数にDate型を指定する。', () => {
    const current = new Date('2024-01-01');
    expect(formatToYYYYMMdd(current)).toMatch(
      /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/,
    );
  });
});
