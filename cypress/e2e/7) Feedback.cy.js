import { closePopups, login, register, findProduct } from "../support/helper";
import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";

user.email = faker.internet.email();
user.password = faker.internet.password();


it('Feedback form', () => {
    cy.log('Login');
    login();
    cy.wait(2000);

    cy.log('Open feedback page');
    cy.get('[aria-label="Open Sidenav"]').click();
    cy.get('[routerlink="/contact"] > .mat-list-item-content').click();

    cy.log('Type comment');
    cy.get('#comment').type(faker.word.adjective(5));

    cy.log('Change rating');
    cy.get('#rating').click({ multiple: true, force: true });

    cy.log('Captcha');
    cy.get('#captcha').invoke('text').then((text) => {
        let xText = text;
        cy.get('#captchaControl').type(eval(xText));
    })

    cy.log('Submit button');
    cy.get('#submitButton').click();

    cy.get('.cdk-overlay-container').should('contain', "Thank you for your feedback.");
        
})
