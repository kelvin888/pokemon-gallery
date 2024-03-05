describe('Categories Component', () => {
    it('renders categories when data is loaded', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/type', { fixture: 'categories.json' });
  
      cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  
      cy.get('[data-cy=pokemon-category]').should('have.length', 3); 
    });
  
    it('displays skeleton loader when data is loading', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/type', { fixture: 'categories.json', delay: 10000});
  
      cy.visit(Cypress.env("CYPRESS_BASE_URL"));
  
      cy.get('[data-testid=category-loading-skeleton]').should('exist'); 
    });
  });
  