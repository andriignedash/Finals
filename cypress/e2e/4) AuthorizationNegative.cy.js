import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups } from "../support/helper";
import authPage from '../support/pages/AuthPage';

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Login fail', () => {

    cy.log('Open authorization page');
    authPage.visit();

    cy.log('Close popups');
    closePopups();

    cy.log('Type email');
    authPage.getEmailField().type(user.email);

    cy.log('Type password');
    authPage.getPasswordField().type(user.password);

    cy.log('Press Login button');
    authPage.getLoginButton().click();

    cy.log('Error "Invalid email or password"');
    authPage.getError().invoke('text').should('contain', 'Invalid email or password')
})