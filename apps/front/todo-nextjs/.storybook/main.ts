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
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': [path.resolve(__dirname, '../src/')],
      };
    }

    if (config.module) {
      /**
       * @see https://zenn.dev/link/comments/4030a89b460de7
       */
      const newRule = config.module.rules?.map((rule) => {
        if (
          rule &&
          typeof rule === 'object' &&
          rule.test?.toString().includes('svg')
        ) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      });

      config.module.rules = [
        ...(newRule || []),
        {
          test: /\.svg$/i,
          issuer: /\.tsx?$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {},
            },
          ],
        },
      ];
    }

    return config;
  },
};
export default config;
