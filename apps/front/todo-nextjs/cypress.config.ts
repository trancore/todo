import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: ['test/__tests__/e2e/**/*.cy.{ts,tsx}'],
    setupNodeEvents(on, config) {
      config.baseUrl = 'http://localhost:3000';

      return config;
    },
  },
});
