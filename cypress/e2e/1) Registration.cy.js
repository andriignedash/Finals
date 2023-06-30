import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";
import { closePopups } from "../support/helper";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Registration (positive)', () => {
    cy.log('Open registration page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register');

    cy.log('Close popups');
    closePopups();

    cy.log('Type email');
    cy.get('#emailControl').type(user.email);

    cy.log('Type password');
    cy.get('#passwordControl').type(user.password);

    cy.log('Repeat password');
    cy.get('#repeatPasswordControl').type(user.password);

    cy.log('Choose security qyestion');
    cy.get('.mat-select-placeholder').click();
    cy.get('#mat-option-1 > .mat-option-text').click();

    cy.log('Type answer');
    cy.get('#securityAnswerControl').type(faker.person.firstName());

    cy.log('Press Register button');
    cy.get('#registerButton').click();

    cy.log('Check toast "Registration completed successfully. You can now log in."')
    cy.get('.mat-simple-snack-bar-content').should('exist');
})



