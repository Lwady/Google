import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to Google', () => {
  cy.visit('https://www.google.com/')
  cy.get('#L2AGLb > .QS5gu').click()
})

When('I search for dogs', () => {
  cy.get('.gLFyf')
  .type('dogs{enter}')
})

Then('I expect to see results for dogs', () => {
  cy.get('input.gLFyf').should('include.text', 'dogs')
})