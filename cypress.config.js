const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "ismq7t",
    // ...rest of the Cypress project config,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://staging.lpitko.ru"
  },
});
