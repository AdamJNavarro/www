/// <reference types="cypress" />

describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render home', () => {
    cy.get('[data-cy="home-page"]').should('be.visible');
  });
});
