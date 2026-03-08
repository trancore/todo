/**
 * 日付を「YYYY/MM/DD」形式でフォーマットする関数
 * @param date フォーマットする日付
 * @return フォーマットされた日付文字列
 */
export const formatYYYYMMHH = (date: Date) => {
	return new Intl.DateTimeFormat('ja-JP', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	}).format(date);
};
