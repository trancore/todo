import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {},
        },
      ],
    });

    return config;
  },
  images: {
    disableStaticImages: true,
  },
  compiler: { styledComponents: true },
  env: {
    // TODO APIサーバのURL
    TODO_API_URL: 'http://localhost:8080/api/v1',
    // NextAuth.js用環境変数
    NEXTAUTH_URL: 'http://localhost:3000',
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    domains: [
      {
        http: true,
        domain: 'localhost',
        defaultLocale: 'ja',
      },
      {
        http: true,
        domain: 'localhost',
        defaultLocale: 'en',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
