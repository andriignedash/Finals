import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups } from "../support/helper";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Login fail', () => {

    cy.log('Open authorization page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');

    cy.log('Close popups');
    closePopups();

    cy.log('Type email');
    cy.get('#email').type(user.email);

    cy.log('Type password');
    cy.get('#password').type(user.password);

    cy.get('#loginButton').click();

    cy.log('Error "Invalid email or password"');
    cy.get('.error').invoke('text').should('contain', 'Invalid email or password')
})