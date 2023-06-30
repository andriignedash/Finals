import { closePopups, login, register, findProduct } from "../support/helper";
import { faker } from '@faker-js/faker';
import user from "../fixtures/user.json";

user.email = faker.internet.email();
user.password = faker.internet.password();

it('Find and buy product', () => {
    cy.log('Login');
    login();

    //cy.get('.mat-card:contains("Apple Juice")').click();

    //cy.get('.mat-card').contains("Apple Juice").click();

    findProduct('Apple Juice')

})