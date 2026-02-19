import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * クラス名管理カスタムヘルパー関数。\
 * 引数の順番に応じてグルーピングされたスタイルが定義される。
 *
 * 第1引数：カスタムクラス\
 * 第2引数：余白、大きさ\
 * 第3引数：配置\
 * 第4引数：フォント\
 * 第5引数：装飾\
 * 末端引数：条件分岐によって変わるスタイル
 *
 * @param inputs クラス名
 * @returns マージされたクラス名
 */
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
