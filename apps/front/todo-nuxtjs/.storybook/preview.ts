import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { plugin } from '@formkit/vue';
import config from '../formkit.config.mjs';

setup((app) => {
  app.use(plugin, config);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
