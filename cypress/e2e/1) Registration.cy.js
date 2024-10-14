import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups } from "../support/helper";
import regPage from '../support/pages/RegPage';

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Registration (positive)', () => {
    cy.log('Open registration page');
    regPage.visit();

    cy.log('Close popups');
    closePopups();

    cy.log('Type email');
    regPage.getEmailField().type(user.email);

    cy.log('Type password');
    regPage.getPasswordField().type(user.password);

    cy.log('Repeat password');
    regPage.getRepeatPasswordField().type(user.password);

    cy.log('Choose security qyestion');
    regPage.getSecurityQuestion();

    cy.log('Type answer');
    regPage.getAnswerField().type(faker.person.firstName());

    cy.log('Press Register button');
    regPage.getRegisterButton().click();

    cy.log('Check toast "Registration completed successfully. You can now log in."')
    regPage.getToast().should('exist');
})



