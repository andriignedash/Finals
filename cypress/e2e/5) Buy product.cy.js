import { closePopups, login, register } from "../support/helper";
import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Buy product', () => {
    cy.log('Login');
    login();
    cy.wait(2000)

    cy.log('Add to basket');
    cy.get('.mat-focus-indicator.btn-basket.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').first().click({ force: true });
    cy.wait(2000)

    cy.log('Open basket');
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').click();

    cy.log('Proceed to checkout');
    cy.get('#checkoutButton').click();

    cy.log('Add address');
    cy.get('.mat-card > div.ng-star-inserted > .mat-focus-indicator').click();

    cy.log('Fill the form');
    cy.get('#mat-input-7').type(faker.address.country());
    cy.get('#mat-input-8').type(faker.person.firstName());
    cy.get('#mat-input-9').type(faker.string.numeric(10));
    cy.get('#mat-input-10').type(faker.string.numeric(5));
    cy.get('#address').type(faker.address.streetAddress());
    cy.get('#mat-input-12').type(faker.address.city());
    cy.get('#mat-input-13').type(faker.address.state());

    cy.log('Submit the form');
    cy.get('#submitButton').click();

    cy.log('Select address and continue');
    cy.get('.mat-row > .cdk-column-Selection').click();
    cy.get('.btn-next').click();

    cy.log('Choose deliveru speed and continue');
    cy.get('.mat-radio-outer-circle').first().click({ force: true });
    cy.get('.nextButton').click();

    cy.log('Payment and continue');
    cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').click();
    cy.get('#mat-input-14').type(faker.person.fullName());
    cy.get('#mat-input-15').type(faker.string.numeric(16));
    cy.get('#mat-input-16').select(1);
    cy.get('#mat-input-17').select(2);
    cy.get('#submitButton').click();
    cy.get('.mat-radio-outer-circle').click({ force: true });
    cy.get('.nextButton').click();

    cy.log('Place order and pay');
    cy.get('#checkoutButton').click();

    cy.log('"Thank you for your purchase!" page is opened');
    cy.url().should('include', '/order-completion/')

})