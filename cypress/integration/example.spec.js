describe('Cypress.io', () => {
  it('should navigate to blog page', () => {
    cy.visit('https://www.cypress.io/');

    cy.get('header').contains('Blog').invoke('removeAttr', 'target').click();

    cy.get('.blogtitle_purus').should('contain', 'Cypress Blog');

    cy.screenshot({
      fullPage: true,
    });
  });
});
