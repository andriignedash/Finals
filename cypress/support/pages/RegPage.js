class regPage {
    visit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register');
    }
    getEmailField() {
        return cy.get('#emailControl')
    }
    getPasswordField() {
        return cy.get('#passwordControl');
    }
    getRepeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }
    getSecurityQuestion() {
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-1 > .mat-option-text').click();
    }
    getAnswerField() {
        return cy.get('#securityAnswerControl');
    }
    getRegisterButton() {
        return cy.get('#registerButton');
    }
    getToast() {
        return cy.get('.mat-simple-snack-bar-content');
    }
    getError() {
        return cy.get('.error')
    }

}


export default new regPage();
