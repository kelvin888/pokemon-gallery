describe('Category Details', () => {
    it('renders correctly', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'pokemons.json' });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('[data-cy=category-title]').should('contain', 'NORMAL Pokemons');
    });
  
    it('displays loading skeleton', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'pokemons.json', delay: 10000 });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('[data-testid=pokemon-loading-skeleton]').should('exist');
    });
  
    it('displays Pokémon items after loading', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'pokemons.json' });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('[data-cy=pokemon]').should("exist"); 
    });
  
    it('allows pagination', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'pokemons.json' });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('[data-cy=pagination-next-button]').first().click();
  
      cy.get('[data-cy=pagination-information]').should('contain', 'Showing 26 to');
    });
  
    it('allows searching', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'pokemons.json' });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('input[type="text"]').type('pidgeotto');
  
      cy.get('[data-cy=pokemon]').should('have.length', 1); 
    });
  
    it('handles no Pokémon found', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', { fixture: 'empty.json' });
  
      cy.visit(`${Cypress.env("CYPRESS_BASE_URL")}/categories/normal`);
  
      cy.get('input[type="text"]').type('Invalid Pokémon');
  
      cy.get('[data-cy=no-pokemon-found]').should('exist');
    });
  });
  