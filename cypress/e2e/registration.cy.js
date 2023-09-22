const incorrectEmail = require("../fixtures/credential(false_email).json");
const{login, password} = Cypress.env();
describe.only("registration", ()=>{
    const buttonLogin = ('.btn-main');
    const loginInput = (':nth-child(3) > .frm')
    const emailInput = (':nth-child(4) > .frm')
    const defaultName = ("Luba")
    const mistake_top = ('.frm-wrapper__top__error');
    const mistake_center = ('.form-auth__error > .hint > .txt-secondary')
    const randomEmail = (Math.round(Math.random()*100000)+"@email.com")
    
    beforeEach(()=>{
        cy.visit("/");
        cy.clickButton('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med');
        cy.clickButton('.form-auth__header__subtitle > a > .txt-secondary--med')
    });
    it("Registration page has two input field", ()=>{
        cy.checkVisibility(loginInput);
        cy.checkVisibility(emailInput);
    });
    it("Your email field is empty", ()=>{
        cy.typeData(loginInput, defaultName)
        cy.clickButton(buttonLogin);
        cy.checkVisibility(mistake_center);
    });
    it("Your name field is empty", ()=>{
        cy.typeData(emailInput, randomEmail);
        cy.clickButton(buttonLogin);
        cy.checkVisibility(mistake_center);
    });
    
    it("Registration used the same email", ()=>{
        cy.typeData(loginInput, defaultName);
        cy.typeData(emailInput, login);
        cy.clickButton(buttonLogin);
        cy.checkVisibility(mistake_center);
    });

    it("Username consist two symbols", ()=>{
        cy.typeData(loginInput, "Lu")
        cy.typeData(emailInput, randomEmail);
        cy.clickButton(buttonLogin);
        cy.checkVisibility('.picture-notice__title');
        cy.checkVisibility('.picture-notice__hint');
    });
    it("Username consist one symbols", ()=>{
        cy.typeData(loginInput, "L")
        cy.typeData(emailInput, randomEmail);
        cy.clickButton(buttonLogin);
        cy.checkVisibility(mistake_top);
        cy.checkVisibility(mistake_center);
    });
    it("Mistake incorrect email (Email without @, Email without . in domen part, Email without username ", ()=>{
        incorrectEmail.forEach((item)=>{
            cy.typeData(loginInput, defaultName);
            cy.typeData(emailInput, item); 
            cy.clickButton(buttonLogin);
            cy.checkVisibility(mistake_center);
            cy.checkVisibility(mistake_top);
            cy.get(loginInput).clear();
            cy.get(emailInput).clear();

        })
    })
})