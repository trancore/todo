import React from 'react';

import type { Preview } from '@storybook/react';
import { Provider as StateProvider } from 'react-redux';

import '../public/css/reset.css';
import { useAppWrappedStore } from '../src/hooks/useRedux';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { store } = useAppWrappedStore({});
      return (
        <StateProvider store={store}>
          <Story />
        </StateProvider>
      );
    },
  ],
};

export default preview;
