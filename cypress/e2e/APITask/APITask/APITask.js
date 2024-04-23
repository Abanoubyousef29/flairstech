Cypress.Commands.add('userNameField', () => {
    cy.get('input[name="username"]');
});

Cypress.Commands.add('passwordField', () => {
    cy.get('input[name="password"]');
});

Cypress.Commands.add('loginButton', () => {
    cy.get('button[type="submit"]');
});

Cypress.Commands.add('leftSideMenu', () => {
    cy.get('.oxd-main-menu');
});

Cypress.Commands.add('recordTableBody', () => {
    cy.get('.oxd-table-body')
});