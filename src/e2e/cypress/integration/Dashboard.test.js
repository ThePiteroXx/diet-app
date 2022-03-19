describe('Dashboard', () => {
  beforeEach(() => {
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
  });

  it('have 5 meals in exapmle diet', () => {
    cy.get('[data-cy=exampleMeals]').children().should('have.length', 5);
  });

  it('lets you add favourite meal on mobile and remove it', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy=buttonFavourite]').first().click();
    cy.get('[data-cy=buttonBurger]').click();
    cy.findByText(/favourites/i).click();
    cy.location().should((loc) => {
      expect(loc.href).include('dashboard/favourite');
    });
    cy.findByText(/You haven't any favourite meals/i).should('not.exist');

    cy.get('[data-cy=buttonRemoveFavourite]').click();
    cy.findByText(/You haven't any favourite meals/i).should('exist');
  });

  it('lets you add favourite meal on desktop and remove it', () => {
    cy.viewport(1920, 1080);
    cy.get('[data-cy=buttonFavourite]').first().click();
    cy.findByText(/You haven't any favourite meals/i).should('not.exist');
    cy.get('[data-cy=buttonRemoveFavourite]').click();
    cy.findByText(/You haven't any favourite meals/i).should('exist');
  });
});
