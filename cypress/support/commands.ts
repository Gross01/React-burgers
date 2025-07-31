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
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import '@4tw/cypress-drag-drop';
import {
    BASE_URL,
    CONSTRUCTOR_SELECTOR,
    INGREDIENT_SELECTOR,
    INGREDIENTS_URL,
    ORDERS_URL
} from "../../src/utils/constants";

Cypress.Commands.add('dragAndDrop', () => {
    cy.get(INGREDIENT_SELECTOR).should('exist').as('ingredient')
    cy.get(CONSTRUCTOR_SELECTOR).should('exist').as('constructor')
    cy.get('@ingredient')
        .eq(1)
        .drag('@constructor')
    cy.get('@ingredient')
        .eq(3)
        .drag('@constructor')
})

Cypress.Commands.add('prepare', () => {
    cy.visit('/');
    cy.intercept('GET', INGREDIENTS_URL, {fixture: 'ingredients.json'})
    cy.intercept('POST', ORDERS_URL, {fixture: 'order.json'})
    cy.intercept('GET', `${BASE_URL}/auth/user`, {fixture: 'user.json'})

    window.localStorage.setItem(
        'refreshToken',
        JSON.stringify('test-refreshToken')
    )

    window.localStorage.setItem(
        'accessToken',
        JSON.stringify('test-accessToken')
    )
})

declare global {
    namespace Cypress {
        interface Chainable {
            dragAndDrop(): Chainable<void>;
            prepare(): void;
        }
    }
}