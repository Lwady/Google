const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const { defineConfig } = require("cypress"),


defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)]
        })
      )
      
    },
  },
});
