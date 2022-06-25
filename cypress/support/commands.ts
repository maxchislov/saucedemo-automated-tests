/// <reference types="cypress" />
import * as selectors from "fixtures/selectors.json"

Cypress.Commands.add('goToLoginPage', () => {
    cy.visit('/');
})

Cypress.Commands.add('checkLoginPage', () => {
    cy.get(selectors.loginPage.passwordField).should('be.visible');
    cy.get(selectors.loginPage.passwordField).should('be.visible');
    cy.get(selectors.loginPage.loginButton).should('be.visible');
})

Cypress.Commands.add('submitLoginForm', (username, password) => {
    cy.get(selectors.loginPage.usernameField).clear().type(username);
    cy.get(selectors.loginPage.passwordField).clear().type(password);
    cy.get(selectors.loginPage.loginButton).click() 
})

Cypress.Commands.add('resetAppState', () => {
    cy.get(selectors.inventoryPage.burgerButton).should('be.visible').click();
    cy.get(selectors.inventoryPage.resetAppStateButton).should('be.visible').click();
    cy.get(selectors.inventoryPage.closeBurgerMenuButton).should('be.visible').click();
})

Cypress.Commands.add('submitCheckoutPageForm', (firstName, secondName, postalCode) => {
    cy.get(selectors.checkoutPage.title).should('be.visible').contains('Checkout: Your Information');
    cy.get(selectors.checkoutPage.firstNameField).should('be.visible').clear().type(firstName);
    cy.get(selectors.checkoutPage.lastNameField).should('be.visible').clear().type(secondName);
    cy.get(selectors.checkoutPage.postalCodeField).should('be.visible').clear().type(postalCode);
    cy.get(selectors.checkoutPage.cancelButton).should('be.visible');
    cy.get(selectors.checkoutPage.continueButton).should('be.visible');
})

Cypress.Commands.add('checkOverviewPage', () => {
    cy.get(selectors.checkOerviewPage.title).should('be.visible').contains('Checkout: Overview');
    cy.get(selectors.checkOerviewPage.totalLabel).should('be.visible').contains('43.18');
    cy.get(selectors.checkOerviewPage.cancelButton).should('be.visible');
    cy.get(selectors.checkOerviewPage.finishButton).should('be.visible');
})

Cypress.Commands.add('checkoutCompletePage', () => {
    cy.get(selectors.checkoutCompletePage.completeHeader).should('be.visible').contains('THANK YOU FOR YOUR ORDER');
    cy.get(selectors.checkoutCompletePage.ponyImaage).should('be.visible');
    cy.get(selectors.checkoutCompletePage.backHomeButton).should('be.visible').click();
})

Cypress.Commands.add('logOut', () => {
    cy.get(selectors.inventoryPage.burgerButton).should('be.visible').click();
    cy.get(selectors.inventoryPage.logOutButton).should('be.visible').click();
})