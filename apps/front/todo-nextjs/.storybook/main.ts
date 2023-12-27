import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.(tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '~': [path.resolve(__dirname, '../src/')],
        // public: path.join(__dirname, '../public'),
      };
    }

    // config.module?.rules?.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });

    return config;
  },
};
export default config;
