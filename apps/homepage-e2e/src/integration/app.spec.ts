import { getGreeting } from '../support/app.po';

describe('landing-page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.getByTestID('testingEl');
  });
});
