import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups, register } from "../support/helper";
import regPage from '../support/pages/RegPage';

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Empty form - button disabled', () => {
    cy.log('Open registration page');
    regPage.visit();

    cy.log('Close popups');
    closePopups();

    cy.log('Button is disabled');
    regPage.getRegisterButton().should('be.disabled')
})


it('Email is used already', () => {
    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Register user first time');
    register();

    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Open registration page');
    regPage.visit();

    cy.log('Close popups');
    closePopups();

    cy.log('Try to register user second time');
    register();

    cy.log('Error "Email must be unique"');
    regPage.getError().invoke('text').should('contain', 'Email must be unique')
})