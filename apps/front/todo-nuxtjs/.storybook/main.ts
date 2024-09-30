import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  staticDirs: ['../src/public'],
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '~': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  },
};
export default config;
