/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }, 'file-loader'],
    });

    return config;
  },
  images: {
    disableStaticImages: true,
  },
};

export default nextConfig;
