import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups, register } from "../support/helper";
import authPage from '../support/pages/AuthPage';

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Login success', () => {

    cy.log('Register user');
    register();

    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Open authorization page');
    authPage.visit();

    cy.log('Close popups');
    authPage.getPopup().click();

    cy.log('Type email');
    authPage.getEmailField().type(user.email);

    cy.log('Type password');
    authPage.getPasswordField().type(user.password);

    cy.log('Press Login button');
    authPage.getLoginButton().click();

    cy.log('Open Account');
    authPage.getNavbarAccount().click();

    cy.log('Check logged in user');
    authPage.getUserProfile().invoke('text').should('contain', user.email)

})