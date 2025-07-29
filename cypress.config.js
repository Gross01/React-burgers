const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ...
    },
    supportFile: 'cypress/support/commands.ts',
  },
});
