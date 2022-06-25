/// <reference types="cypress" />
import * as selectors from "fixtures/selectors.json"
import { testUserName, testPassword, testFirstName, testSecondName,testPostalCode } from 'support/test-data';

describe('Successfull purchase flow', () => {

    it('It checks login page, log in, adds items ti the cart, check remove button, check elements on the pages', () => {        
        cy.goToLoginPage();
        cy.checkLoginPage();
        cy.submitLoginForm(testUserName, testPassword);
        cy.url().should('include', '/inventory.html');
        cy.resetAppState();
        cy.get(selectors.inventoryPage.addBackpackButton).should('be.visible').click();
        cy.get(selectors.inventoryPage.removeBackpackButton).should('be.visible');
        cy.get(selectors.inventoryPage.addBikeLightButton).should('be.visible').click();
        cy.get(selectors.inventoryPage.removeBikeLightButton).should('be.visible');
        cy.get(selectors.inventoryPage.addBoltTshirtButton).should('be.visible').click();
        cy.get(selectors.inventoryPage.removeBoltTshirtButton).should('be.visible');
        cy.get(selectors.inventoryPage.shopingCartButton)
             .should('be.visible')
             .contains(3)
             .click()
        cy.url().should('include', '/cart.html');
        cy.get(selectors.cartPage.removeBoltTshirtButton).should('be.visible').click();
        cy.get(selectors.cartPage.checkoutButton).should('be.visible').click();
        cy.url().should('include', '/checkout-step-one.html');
        cy.submitCheckoutPageForm(testFirstName, testSecondName,testPostalCode);
        cy.get(selectors.checkoutPage.continueButton).click();  
        cy.url().should('include', '/checkout-step-two.html');
        cy.checkOverviewPage();
        cy.get(selectors.checkOerviewPage.finishButton).click();
        cy.url().should('include', '/checkout-complete.html');
        cy.checkoutCompletePage();
        cy.logOut();
        
})

})
