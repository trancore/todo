import {
  addDay,
  format,
  isAfter,
  isBefore,
  isEqual,
  sameDay,
  sameYear,
} from '@formkit/tempo';

/**
 * 日付変換用ユーティーリティー
 */
export function dateFormat() {
  /**
   * Date型をYYYY/MM/ddの形に変換する
   * @param date Date型日付
   * @returns YYYY/MM/dd
   */
  function formatToYYYYMMdd(date: Date) {
    return format(date, 'YYYY/MM/DD');
  }

  /**
   * 現在に応じた対応期限に対する色を取得する
   * @param deadlineAt 対応期限
   * @returns カラーコード #
   */
  function colorizeDate(deadlineAt: Date) {
    const now = new Date();
    const afterThreeDay = addDay(now, 3);
    const afterSevenDay = addDay(now, 6);

    if (format(deadlineAt, 'YYYY-MM-DD') === format(now, 'YYYY-MM-DD')) {
      // 当日
      return '#ff4500';
    }
    if (isBefore(deadlineAt, now)) {
      // 期限切れ
      return '#ff0000';
    }
    if (isBefore(deadlineAt, afterThreeDay)) {
      // 3日前
      return '#bdb76b';
    }
    if (isBefore(deadlineAt, afterSevenDay)) {
      // 7日前
      return '#008000';
    }

    // 7日以降
    return '#000000';
  }

  return { formatToYYYYMMdd, colorizeDate };
}
