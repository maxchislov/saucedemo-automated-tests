import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    projectId: "007mx",
    baseUrl: "https://saucedemo.com",
    chromeWebSecurity: false,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    requestTimeout: 10000,
    viewportWidth: 1536,
    viewportHeight: 1040,
    numTestsKeptInMemory: 10,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      html: false,
      overwrite: false,
      json: true,
      reportDir: "cypress/reports/mocha",
      reportFilename: "saucedemo-tests",
      excludeSpecPattern: ["*/ignore/*"]
    },
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});