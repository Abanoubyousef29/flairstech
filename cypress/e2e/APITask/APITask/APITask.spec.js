import { And, Given , When } from "cypress-cucumber-preprocessor/steps";
let numberOfRows;
let newRecordID;

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

And('as a user I can click on tab {string} in the left side',(tabName)=>{
    cy.leftSideMenu().contains(tabName).click()
});

And('as a user using api I can add a new record with with user name {string} and password {string}',(username,password)=>{
    
    // NOTE : the hard coded empNumber should not be added directly in the code but since i don't hav
    // apis documntation so i did not know how to GET this value
    cy.getCookie('cookie').then(cookie=>{
        cy.request({
            method: 'POST',
            url: Cypress.env('OrangeBaseURL') + 'web/index.php/api/v2/admin/users',
            headers: {
                cookie: 'ocookie',
              },
            body: {
                "username": username,
                "password": password,
                "status": true,
                "userRoleId": 1,
                "empNumber": 104
            }
          }).then(response => {
            newRecordID = response.body.data.id
          });
    })
});

And('as a user I can see that the record is increased by 1',()=>{
    cy.reload()
    cy.recordTableBody().children().its('length').then((rownumber) => {
        cy.wrap(rownumber).should('eq',numberOfRows+1)
    })
});


And('as a user using api I can delete the just created record',()=>{
    cy.getCookie('cookie').then(cookie=>{
        cy.request({
            method: 'DELETE',
            url: Cypress.env('OrangeBaseURL') + 'web/index.php/api/v2/admin/users',
            headers: {
                cookie: 'ocookie',
              },
            body: {
                "ids":[
                    newRecordID]
            }
          })
    })
});

And('as a user I can see that the record is decrease by 1',()=>{
    cy.reload()
    cy.recordTableBody().children().its('length').then((rownumber) => {
        cy.wrap(rownumber).should('eq',numberOfRows)
    })
});