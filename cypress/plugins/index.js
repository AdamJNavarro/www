/// <reference types="cypress" />

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  require('@cypress/react/plugins/next')(on, config);
  return config;
};
