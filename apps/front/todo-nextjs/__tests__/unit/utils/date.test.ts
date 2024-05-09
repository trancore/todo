import { addDay } from '@formkit/tempo';

import { dateFormat } from '~/utils/date';

const { formatToYYYYMMdd, colorizeDate } = dateFormat();

describe('関数formatToYYYYMMdd()', () => {
  it('引数にDate以外を指定する。', () => {
    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(() => formatToYYYYMMdd('test')).toThrow(Error);
  });

  it('YYYY/MM/ddの日付を取得する。', () => {
    const current = new Date('2024-01-01');
    expect(formatToYYYYMMdd(current)).toMatch(
      /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/,
    );
  });
});

describe('関数colorizeDate()', () => {
  const now = new Date();
  const beforeOneDay = addDay(now, -1);
  const afterTwoDay = addDay(now, 2);
  const afterFiveDay = addDay(now, 5);
  const afterEightDay = addDay(now, 8);

  it('引数にDate以外を指定するとエラーになる。', () => {
    // @ts-expect-error エラーとなる値をわざと指定するため
    expect(() => colorizeDate('test')).toThrow(Error);
  });

  it('引数deadlineAtが期限切れであれば、#ff0000を返す。', () => {
    expect(colorizeDate(beforeOneDay)).toBe('#ff0000');
  });

  it('引数deadlineAtが今日であれば、#ff4500を返す。', () => {
    expect(colorizeDate(now)).toBe('#ff4500');
  });

  it('引数deadlineAtが1日前〜2日前であれば、#bdb76bを返す。', () => {
    expect(colorizeDate(afterTwoDay)).toBe('#bdb76b');
  });

  it('引数deadlineAtが3日前〜7日前であれば、#008000を返す。', () => {
    expect(colorizeDate(afterFiveDay)).toBe('#008000');
  });

  it('引数deadlineAtが8日以降であれば、#000000を返す。', () => {
    expect(colorizeDate(afterEightDay)).toBe('#000000');
  });
});
