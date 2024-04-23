import { And, Given , When } from "cypress-cucumber-preprocessor/steps";
let numberOfRows;

Given('as a user I can visit login page',()=>{
    cy.OpenPage('home')
});

When('as a user I can enter valid email {string}',(username)=>{
    cy.userNameField().type(username)
});

And('as a user I can enter valid password {string}',(password)=>{
    cy.passwordField().type(password)
});

And('as a user I can click on login button',()=>{
    cy.loginButton().click()
});

And('as a user I can click on tab {string} in the left side',(tabName)=>{
    cy.leftSideMenu().contains(tabName).click()
});

And('as a user I can save number of records',()=>{
    cy.recordTableBody().children().its('length').then((rownumber) => {
        numberOfRows = rownumber ;
    })
});

And('as a user I can click on add a new record',()=>{
    cy.addButton().click()
});

And('as a user I can click on add a new record',()=>{
    cy.addButton().click()
});

And('as a user I can click on user role dropdown list',()=>{
    cy.userRoleDropDownList().click()
});

And('as a user I can select {string} from the user role dropdown list',(role)=>{
    cy.userRoleDropDownList().contains(role).click()
});

And('as a user I can select any random employee starts with {string}',(user)=>{
    cy.emplyeeNameField().type(user)
    cy.emplyeeNameDropDownList().children().eq(0).click()
});

And('as a user I can click on status dropdown list',()=>{
    cy.statusDropDownList().click()
});

And('as a user I can select {string} from the status dropdown list',(status)=>{
    cy.statusDropDownList().contains(status).click()
});

And('as a user I can type {string} in the Username field',(userName)=>{
    cy.userName().type(userName)
});

And('as a user I can type {string} in the password field',(password)=>{
    cy.password().type(password)
});

And('as a user I can type {string} in the confirm password field',(confirmPassword)=>{
    cy.confirmPassword().type(confirmPassword)
});

And('as a user I can click on save button',()=>{
    cy.saveButton().click()
    cy.wait(2000)
});

And('as a user I can see that the record is increased by 1',()=>{
    cy.recordTableBody().children().its('length').then((rownumber) => {
        cy.wrap(rownumber).should('eq',numberOfRows+1)
    })
});


And('as a user I can search by {string} in the search bar',(username)=>{
    cy.searchBar().type(username)
});

And('as a user I can click on the search Icon',()=>{
    cy.searchIcon().click()
});

And('as a user I can delete the user {string}',(username)=>{
    cy.recordTableBody().children().contains(username).deleteIcon().click()
});

And('as a user I can confirm delete',()=>{
    cy.confirmDelete().click()
});

And('as a user I can see that the record is decrease by 1',()=>{
    cy.reload()
    cy.recordTableBody().children().its('length').then((rownumber) => {
        cy.wrap(rownumber).should('eq',numberOfRows)
    })
});