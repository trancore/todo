import * as yup from 'yup';

/** カスタムバリデーション */
/** Todoのタイトルに適用されるバリデーション */
yup.addMethod<yup.StringSchema>(yup.string, 'todoText', function () {
  return this.required('必須項目です').max(
    100,
    '100文字以下で入力してください',
  );
});
/** Todoの説明に適用されるバリデーション */
yup.addMethod<yup.StringSchema>(yup.string, 'todoDescription', function () {
  return this.max(500, '500文字以下で入力してください');
});
/** Todoの期限に適用されるバリデーション */
yup.addMethod<yup.DateSchema>(yup.date, 'todoDeadline', function () {
  return this.transform(function (value, originalValue) {
    if (originalValue === '') {
      return undefined;
    }

    return value;
  });
});

/** Todoの入力フォーム用バリデーションスキーマ */
export const todoSchema = yup.object().shape({
  title: yup.string().todoText(),
  description: yup.string().todoDescription(),
  deadline: yup.date().todoDeadline(),
});

export default yup;
