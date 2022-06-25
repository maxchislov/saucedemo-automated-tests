/// <reference types="cypress" />
import { testPassword, testUserName, lockedUserName } from "support/test-data";
import * as selectors from "fixtures/selectors.json"

describe('Attempts to submit the registration form incorrectly', () => {
    beforeEach(() => {
        cy.goToLoginPage();
    })

    it('Doesnt provide the user name', () => {
        cy.checkLoginPage();
        cy.submitLoginForm(' ', testPassword);
        cy.get(selectors.loginPage.errorButton).should('be.visible').contains('Epic sadface: Username and password do not match any user in this service');
    })

    it('Doesnt provide the password', () => {
        cy.checkLoginPage();
        cy.get(selectors.loginPage.passwordField).clear();
        cy.get(selectors.loginPage.usernameField).clear().type(testUserName);
        cy.get(selectors.loginPage.loginButton).click();
        cy.get(selectors.loginPage.errorButton).should('be.visible').contains('Epic sadface: Password is required');
    })

    it('Login with locked out name', () => {
        cy.checkLoginPage();
        cy.submitLoginForm(lockedUserName, testPassword);
        cy.get(selectors.loginPage.errorButton).should('be.visible').contains('Epic sadface: Sorry, this user has been locked out.');
    })
    
})


