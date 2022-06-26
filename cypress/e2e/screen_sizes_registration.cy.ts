/// <reference types="cypress" />
import * as selectors from "fixtures/selectors.json"
import * as screenResolutions from "fixtures/screenResolutions.json"
import { testUserName, testPassword} from 'support/test-data';

describe('Checks login and main page with multiple screen resolutions', () => {

    screenResolutions.forEach((screenResolution) => {
        it(`It logs in and navigats to inventory page with different screen sizes: '${screenResolution.width}x${screenResolution.height} type ${screenResolution.type}'`, () => {
            cy.viewport(screenResolution.width, screenResolution.height, screenResolution.type);
            cy.goToLoginPage();
            cy.checkLoginPage();
            cy.submitLoginForm(testUserName, testPassword);
            cy.resetAppState();
            cy.get(selectors.inventoryPage.addBackpackButton).should('be.visible').click();
            cy.get(selectors.inventoryPage.removeBackpackButton).should('be.visible');
            cy.get(selectors.inventoryPage.addBikeLightButton).should('be.visible').click();
            cy.get(selectors.inventoryPage.removeBikeLightButton).should('be.visible');
            cy.get(selectors.inventoryPage.addBoltTshirtButton).should('be.visible').click();
            cy.get(selectors.inventoryPage.removeBoltTshirtButton).should('be.visible');
        })
    });
})
