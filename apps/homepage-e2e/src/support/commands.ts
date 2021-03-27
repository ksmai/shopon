// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

type Options = Parameters<typeof cy.get>[1];

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getByTestId(testId: string, options?: Options): Chainable<HTMLElement>;
  }
}

// -- This is a parent command --
Cypress.Commands.add('getByTestId', (testId: string, options?: Options) => {
  return cy.get(`[data-testid=${testId}]`, options);
});
