import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import svgLoader from 'vite-svg-loader';
import AutoImportComponents from 'unplugin-vue-components/vite';

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
    config.optimizeDeps = {
      include: ['svgo'],
    };

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '~': path.resolve(__dirname, '../src'),
      };
    }

    if (config.plugins) {
      config.plugins = [
        ...config.plugins,
        svgLoader({
          defaultImport: 'component',
        }),
        AutoImportComponents({
          dirs: ['src/components'],
          dts: '.nuxt/components.d.ts',
        }),
      ];
    }

    return config;
  },
};
export default config;
