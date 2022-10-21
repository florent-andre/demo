const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://caddy',
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    video: false,
  },
});
