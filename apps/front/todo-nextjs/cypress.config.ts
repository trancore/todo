import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: ['test/__tests__/e2e/**/*.cy.{ts,tsx}'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
