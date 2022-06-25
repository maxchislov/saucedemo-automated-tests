
declare namespace Cypress {
    interface Chainable {
        /**Navigates to home page and check page is loaded */
        goToLoginPage: () => void;

        /**Checks presents of the elements on the login page. */
        checkLoginPage: () => void;
        
        /**Submits the login form on the login up page. */
        submitLoginForm: (username: string, password: string) => void;

        /**Resets all the selected items. */
        resetAppState: () => void;

        /**Checks the main elements on Checkout page */
        submitCheckoutPageForm: (firstName: string, secondName: string, postalCode: string) => void;

        /**Checks the main elements on check overview page */
        checkOverviewPage: () => void;

        /**Checks the main elements on Complete page */
        checkoutCompletePage: () => void;

        /**Logs out */
        logOut: () => void;
        
    }
}