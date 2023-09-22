const{login, password} = Cypress.env();
describe("Autorisation", () => {
    const buttonEnterAndRegistration = ('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med');
    const buttonAccount = ('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med');
    const inputLogin = (':nth-child(3) > .frm');
    const inputPassword = (':nth-child(4) > .frm');
    const buttonEnter = ('.btn-main');
    const randomPassword = (Math.random().toString(36).slice(-8));
    const randomEmail = (Math.round(Math.random()*100000)+"@email.com");
    const errorInvalidLoginOrPassword = ('.hint > .txt-secondary');
    const inputNewPassword = ('.layout-column-start > :nth-child(1) > .frm');
    const inputRepeatNewPassword = (':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm');
    const buttonSaveNewPassword = ('.layout-row-end > .btn-service');
    const validPassword = ("123Qaz")
    const buttonOutFromSite = ('.base--clickable > .txt--med')

    beforeEach(()=>{
        cy.visit("/");
        cy.clickButton(buttonEnterAndRegistration);
    });
    it("login with valid login and valid password", ()=>{
        cy.typeData(inputLogin, login);
        cy.typeData(inputPassword, password);
        cy.clickButton(buttonEnter);
        cy.checkVisibility(buttonAccount);
    });
    it("login with valid login and invalid password", ()=>{
        cy.typeData(inputLogin, login);
        cy.typeData(inputPassword, randomPassword);
        cy.clickButton(buttonEnter);
        cy.checkVisibility(errorInvalidLoginOrPassword)
    });
    it("login with invalid login and valid password", ()=>{
        cy.typeData(inputLogin, randomEmail);
        cy.typeData(inputPassword, password);
        cy.clickButton(buttonEnter);
        cy.checkVisibility(errorInvalidLoginOrPassword);
    });
    it("Change password on valid", ()=>{
        cy.typeData(inputLogin, login);
        cy.typeData(inputPassword, password);
        cy.clickButton(buttonEnter);
        cy.checkVisibility(buttonAccount);
        cy.clickButton(buttonAccount);
        cy.typeData(inputNewPassword, validPassword);
        cy.typeData(inputRepeatNewPassword, validPassword);
        cy.clickButton(buttonSaveNewPassword);
        cy.visit("/");
        cy.clickButton(buttonAccount)
        cy.clickButton(buttonOutFromSite)
        cy.clickButton(buttonEnterAndRegistration);
        cy.typeData(inputLogin, login);
        cy.typeData(inputPassword, validPassword);
        cy.clickButton(buttonEnter);
        cy.clickButton(buttonAccount);
        cy.typeData(inputNewPassword, password);
        cy.typeData(inputRepeatNewPassword, password);
        cy.clickButton(buttonSaveNewPassword);
    });
    it("Change password on invalid", ()=>{
        cy.typeData(inputLogin, login);
        cy.typeData(inputPassword, password);
        cy.clickButton(buttonEnter);
        cy.checkVisibility(buttonAccount);
        cy.clickButton(buttonAccount);
        cy.typeData(inputNewPassword, randomPassword);
        cy.typeData(inputRepeatNewPassword, randomPassword);
    });
})
