export class LoginPage {
    elements = {
        loginField: ()=> cy.get(':nth-child(3) > .frm'),
        passwordField: ()=> cy.get(':nth-child(4) > .frm'),
        loginButton: ()=> cy.get('.btn-main'),
        enterAndRegistrationButton: ()=> cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'),
        accountButton: ()=> cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med'),
        header: ()=> cy.get('.form-page__header'),
        logOff: ()=> cy.get('.base--clickable > .txt--med')
    };

inputPassword(password){
    this.elements.passwordField().type(password);
};

clearPassworField(){
    this.elements.passwordField().clear();
}

submitlogin(){
    this.elements.loginButton().click();
};

login(login, password){
    this.elements.enterAndRegistrationButton().click(),
    this.elements.loginField().type(login),
    this.elements.passwordField().type(password),
    this.elements.loginButton().click()
};

clickAccountButton(){
    this.elements.accountButton().click();
};

LogOff(){
    this.elements.header().click(),
    this.elements.logOff().click()
}
}

