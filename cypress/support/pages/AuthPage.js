class authPage {
    visit() {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    }
    getPopup() {
        return cy.get('.cc-btn');
    }
    getEmailField() {
        return cy.get('#email')
    }
    getPasswordField() {
        return cy.get('#password')
    }
    getLoginButton() {
        return cy.get('#loginButton')
    }
    getNavbarAccount() {
        return cy.get('#navbarAccount')
    }
    getUserProfile() {
        return cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span')
    }
    getError(){
        return cy.get('.error')
    }


}

export default new authPage();