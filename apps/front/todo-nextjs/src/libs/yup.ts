import * as yup from 'yup';

yup.addMethod<yup.StringSchema>(yup.string, 'todoText', function () {
  return this.required('必須項目です').max(
    100,
    '100文字以下で入力してください',
  );
});

yup.addMethod<yup.StringSchema>(yup.string, 'todoDescription', function () {
  return this.max(500, '500文字以下で入力してください');
});

yup.addMethod<yup.DateSchema>(yup.date, 'todoDeadline', function () {
  return this.transform(function (value, originalValue) {
    if (originalValue === '') {
      return undefined;
    }

    return value;
  });
});

export default yup;
