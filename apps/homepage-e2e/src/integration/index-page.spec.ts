import * as indexPage from '../support/index-page.po';

describe('Index page', () => {
  beforeEach(() => cy.visit('/'));

  it('should link to login page', () => {
    cy.intercept('GET', '/log-in').as('log-in');
    indexPage.getMainLoginButton().click();
    cy.wait('@log-in').its('response.statusCode').should('eq', 200);
  });
});
