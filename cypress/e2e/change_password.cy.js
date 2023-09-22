const{login, password} = Cypress.env();
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/loginPage';
const changePassword = require("../fixtures/changePageSelectors.json")

describe.only("Change password", () => {
    let loginPage = new LoginPage();
    let oldPassword = password;
    let newPassword = faker.internet.password({ length: 20 });
   
    it("Change password on valid password", ()=>{
        cy.visit("/");
        loginPage.login(login, oldPassword);
        loginPage.clickAccountButton();
        cy.changePassword(changePassword.newPasswordField, changePassword.repeatNewPasswordField, changePassword.saveNewPasswordButton, newPassword);
        loginPage.LogOff();
        loginPage.login(login, oldPassword);
        cy.checkVisibility(changePassword.errorInvalidLoginOrPassword)
        loginPage.clearPassworField();
        loginPage.inputPassword(newPassword);
        loginPage.submitlogin();
        loginPage.clickAccountButton();
        cy.changePassword(changePassword.newPasswordField, changePassword.repeatNewPasswordField, changePassword.saveNewPasswordButton, oldPassword);
    });
})