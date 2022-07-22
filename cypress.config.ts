import { defineConfig } from 'cypress';

export default defineConfig({
  //projectId: 'eo976a',
  defaultCommandTimeout: 20000,
  viewportWidth: 1300,
  video: false,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.ts',
  },
});
