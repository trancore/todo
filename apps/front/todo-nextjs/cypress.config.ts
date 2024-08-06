import webpack from '@cypress/webpack-preprocessor';
import { defineConfig } from 'cypress';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackOptions = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
};

export default defineConfig({
  e2e: {
    env: {
      BASE_URL: 'http://localhost:3000',
      API_SERVER_URL: 'http://localhost:8080/api/v1',
    },
    retries: {
      runMode: 5,
      openMode: 5,
    },
    specPattern: ['test/__tests__/e2e/**/*.cy.{ts,tsx}'],
    testIsolation: false,
    setupNodeEvents(on, config) {
      config.baseUrl = 'http://localhost:3000';

      on('file:preprocessor', webpack({ webpackOptions }));

      return config;
    },
  },
});
