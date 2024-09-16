/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('signin', () => {
  Cypress.session.clearAllSavedSessions();

  cy.getAllCookies().then((cookies) => {
    if (!cookies || (cookies && cookies.length < 3)) {
      cy.session(
        'signin',
        () => {
          cy.visit('/signin')
            .then(() => {
              cy.get('button').click();
            })
            .then(() => {
              cy.get('button').click();
            });

          cy.origin('https://github.com', () => {
            const username = (Cypress.env('GITHUB_USERNAME') as string) || '';
            const password = (Cypress.env('GITHUB_PASSWORD') as string) || '';

            cy.get('input[name="login"]').type(username);
            cy.get('input[name="password"]').type(password, { log: false });
            cy.get('input[name="commit"]').click();

            cy.get('a[data-test-selector="gh-mobile-link"]').click();

            cy.wait(20000);
          });
        },
        { cacheAcrossSpecs: true },
      );
    }
  });
});
