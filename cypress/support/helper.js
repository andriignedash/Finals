import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";

export function closePopups() {
    cy.get('.close-dialog').click({ force: true, multiple: true });
    cy.get('.cc-btn').click({ force: true, multiple: true });
};

export function register() {
    cy.log('Open registration page');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register');

    cy.log('Type email');
    cy.get('#emailControl').type(user.email, { force: true });

    cy.log('Type password');
    cy.get('#passwordControl').type(user.password, { force: true });

    cy.log('Repeat password');
    cy.get('#repeatPasswordControl').type(user.password, { force: true });

    cy.log('Choose security qyestion');
    cy.get('.mat-select-placeholder').click({ force: true });
    cy.get('#mat-option-1 > .mat-option-text, #mat-option-15 > .mat-option-text').click({ force: true, multiple: true });

    cy.log('Type answer');
    cy.get('#securityAnswerControl').type(faker.person.firstName(), { force: true });

    cy.log('Press Register button');
    cy.get('#registerButton').click({ force: true });
}

export function findProduct(productName) {
  cy.get('body').then(body => {
        if(body.find(productName).length > 0) {
            cy.get('.mat-card').contains(productName).click();
        } else {
            cy.get('.mat-paginator-navigation-next').click();
            findProduct(productName)
        }
    })
};




export function login() {
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
}