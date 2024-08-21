import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || 'ja';

  return {
    locale,
    messages: (await import(`~/messages/${currentLocale}.json`)).default,
  };
});
