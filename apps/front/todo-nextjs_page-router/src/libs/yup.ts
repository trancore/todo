import { useLocale, useTranslations } from 'next-intl';
import * as yup from 'yup';

export interface IYupValidation {
  locale: string;
  requiredValidationText?: string;
  maxValidationText?: string[];
}

/** カスタムバリデーション */
/** Todoのタイトルに適用されるバリデーション */
yup.addMethod<yup.StringSchema>(
  yup.string,
  'todoText',
  function (yupValidation: IYupValidation) {
    const { locale, requiredValidationText, maxValidationText } = yupValidation;

    // 国際化対応ができないこと、バリデーションエラーを素通ししたくないため、
    // undefinedを許容する
    return this.required(requiredValidationText).max(
      100,
      locale === 'ja'
        ? `\${max}${maxValidationText?.[0]}`
        : `${maxValidationText?.[0]}\${max}${maxValidationText?.[1]}`,
    );
  },
);
/** Todoの説明に適用されるバリデーション */
yup.addMethod<yup.StringSchema>(
  yup.string,
  'todoDescription',
  function (yupValidation: IYupValidation) {
    const { locale, maxValidationText } = yupValidation;

    // 国際化対応ができないこと、バリデーションエラーを素通ししたくないため、
    // undefinedを許容する
    return this.max(
      500,
      locale === 'ja'
        ? `\${max}${maxValidationText?.[0]}`
        : `${maxValidationText?.[0]}\${max}${maxValidationText?.[1]}`,
    );
  },
);
/** Todoの期限に適用されるバリデーション */
yup.addMethod<yup.DateSchema>(yup.date, 'todoDeadline', function () {
  return this.transform(function (value, originalValue) {
    if (originalValue === '') {
      return undefined;
    }

    return value;
  });
});

export function createTodoSchema() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations('libs.yup');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  const maxValidationText = [t('max.text.one'), t('max.text.two')];
  const requiredValidationText = t('required');

  return yup.object().shape({
    title: yup.string().todoText({
      locale,
      requiredValidationText,
      maxValidationText,
    }),
    description: yup.string().todoDescription({
      locale,
      maxValidationText,
    }),
    deadline: yup.date().todoDeadline(),
  });
}

export default yup;
