describe('Dog search', () => {
  it('Searches for dogs on Google', () => {
    cy.visit('https://www.google.com/')

    cy.get('#L2AGLb > .QS5gu').click()

    cy.get('.gLFyf')
      .type('dogs{enter}')
      
    })
})