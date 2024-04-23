
Cypress.Commands.add('OpenPage', (pageName) => {

    if (pageName === 'home') {
        cy.visit(Cypress.env('OrangeBaseURL'))
    }
});


Cypress.Commands.add('textShouldAppearOnTheScreen', (text) => {
    cy.contains(text, { matchCase: false }).should('be.visible');
});


Cypress.Commands.add('textShouldNotAppearOnTheScreen', (text) => {
    cy.contains(text, { matchCase: false }).should('not.exist');
});

