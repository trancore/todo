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
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  return { formatToYYYYMMdd };
}
