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
  },
};

export default nextConfig;
