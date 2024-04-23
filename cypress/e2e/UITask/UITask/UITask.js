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

Cypress.Commands.add('addButton', () => {
    cy.get('.orangehrm-header-container > .oxd-button')
});

Cypress.Commands.add('userRoleDropDownList', () => {
    cy.get('.oxd-select-wrapper').eq(0)
});

Cypress.Commands.add('emplyeeNameField', () => {
    cy.get('.oxd-autocomplete-wrapper')
});

Cypress.Commands.add('emplyeeNameDropDownList', () => {
    cy.get('div[role="listbox"]').wait(2000)
});

Cypress.Commands.add('statusDropDownList', () => {
    cy.get('.oxd-select-wrapper').eq(1)
});

Cypress.Commands.add('userName', () => {
    cy.get('div[class*="oxd-input-group"]').find('div[class*="oxd-input-group__label-wrapper"]').next().find('input[class*="oxd-input"]').eq(0)
});

Cypress.Commands.add('password', () => {
    cy.get('[type="password"]').eq(0)
});

Cypress.Commands.add('confirmPassword', () => {
    cy.get('[type="password"]').eq(1)
});

Cypress.Commands.add('saveButton', () => {
    cy.get('.oxd-button--secondary')
});
  
Cypress.Commands.add('searchBar', () => {
    cy.get('.oxd-grid-4').children().eq(0)
});

Cypress.Commands.add('searchIcon', () => {
    cy.get('button[type="submit"]');
});

Cypress.Commands.add('deleteIcon', () => {
    cy.get('button[type="submit"]');
});

Cypress.Commands.add('recordTableBody', () => {
    cy.get('.oxd-table-body')
});

Cypress.Commands.add('deleteIcon', () => {
    cy.get('.oxd-icon.bi-trash')
});

Cypress.Commands.add('confirmDelete', () => {
    cy.get('.oxd-button--label-danger')
});

  