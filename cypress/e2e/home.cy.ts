// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('[data-cy=initialInvestment]').invoke('val', '2000').trigger('input')
    cy.get('[data-cy=monthInvestment]').invoke('val', '3000').trigger('input')
    cy.get('[data-cy=stayInvestment]').invoke('val', '28').trigger('input')
  })
})
