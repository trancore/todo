import { addDays, isBefore } from 'date-fns';
import { format } from 'date-fns/format';

/**
 * Date型をYYYY/MM/ddの形に変換する
 * @param date Date型日付
 * @returns yyyy/MM/dd
 */
export function formatToYyyyMMDd(date: Date) {
  return format(date, 'yyyy/MM/dd');
}

/**
 * 現在に応じた対応期限に対する色を取得する
 * @param deadlineAt 対応期限
 * @returns カラーコード #
 */
export function colorizeDate(deadlineAt: Date) {
  const now = new Date();
  const afterThreeDay = addDays(now, 3);
  const afterSevenDay = addDays(now, 6);

  if (format(deadlineAt, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')) {
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
