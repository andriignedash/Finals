import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups, register } from "../support/helper";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Login success', () => {

    cy.log('Register user');
    register();

    cy.log('Clear cookies');
    cy.clearCookies();

    cy.log('Open authorization page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');

    cy.log('Close popups');
    cy.get('.cc-btn').click();

    cy.log('Type email');
    cy.get('#email').type(user.email);

    cy.log('Type password');
    cy.get('#password').type(user.password);

    cy.log('Press Login button');
    cy.get('#loginButton').click();

    cy.log('Open Account');
    cy.get('#navbarAccount').click();

    cy.log('Check logged in user');
    cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span').invoke('text').should('contain', user.email)

})