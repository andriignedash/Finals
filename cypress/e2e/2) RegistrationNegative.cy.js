import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups, register } from "../support/helper";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Empty form - button disabled', () => {
    cy.log('Open registration page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register');

    cy.log('Close popups');
    closePopups();

    cy.log('Button is disabled');
    cy.get('#registerButton').should('be.disabled')
})


it('Email is used already', () => {
    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Register user first time');
    register();

    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Open registration page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register');

    cy.log('Close popups');
    closePopups();

    cy.log('Try to register user second time');
    register();

    cy.log('Error "Email must be unique"');
    cy.get('.error').invoke('text').should('contain', 'Email must be unique')
})