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
    locales: ['ja', 'en-US'],
    defaultLocale: 'ja',
    domains: [
      {
        http: true,
        domain: 'localhost',
        defaultLocale: 'ja',
        locales: ['ja'],
      },
      {
        http: true,
        domain: 'en.localhost',
        defaultLocale: 'en-US',
        locales: ['en-US'],
      },
    ],
  },
};

export default nextConfig;
