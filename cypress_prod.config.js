const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "ismq7t",
    // ...rest of the Cypress project config,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://santa-secret.ru/"
  },
  env: {
    login: "lm@crosslife.me",
    password: "DR6956"
  }
});
