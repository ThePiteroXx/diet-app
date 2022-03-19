describe('Landing page', () => {
  it('Render landing page', () => {
    cy.visit('/');
    cy.findByText(/calculate your caloric demand/i).should('exist');
  });
  it('Fill in form and route to dashboard', () => {
    cy.visit('/');
    cy.findByText(/age/i).click().type('18');
    cy.findByText(/height/i)
      .click()
      .type('180');
    cy.findByLabelText(/weight/i)
      .click()
      .type('98');
    cy.findByLabelText(/activity/i).select(2);
    cy.findByText(/submit/i).click();

    cy.findByText(/your diet information/i).should('exist');
  });
});
