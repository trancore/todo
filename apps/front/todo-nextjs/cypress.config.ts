import { defineConfig } from 'cypress';

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

      return config;
    },
  },
});
