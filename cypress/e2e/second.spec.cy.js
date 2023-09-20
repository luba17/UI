describe.only("after login", ()=>{
    const{login, password} = Cypress.env()
    beforeEach("login", ()=>{
        cy.visit("")
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med').click();
        cy.get(':nth-child(3) > .frm').type(login);
        cy.get(':nth-child(4) > .frm').type(password);
        cy.get('.btn-main').click();
    });
    it("boxes", ()=>{
        const buttonBoxes = '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med'
        cy.checkVisibility(buttonBoxes);
        cy.checkClick(buttonBoxes);
        cy.checkUrl('/account/boxes')
    });
    it("create a box", ()=>{
        const buttonCreateBox = '.home-page-buttons > [href="/box/new"] > .btn-main';
        cy.checkVisibility(buttonCreateBox)
        cy.checkClick(buttonCreateBox)
        cy.checkUrl('/box/new')
    });
    it("random", ()=>{
        const buttonRandom = '[href="/randomizer"] > .btn-secondary'
        cy.checkVisibility(buttonRandom);
        cy.checkClick(buttonRandom);
        cy.checkUrl('/randomizer')
    });
    it("account", ()=>{
        const buttonAccount = '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med';
        cy.checkVisibility(buttonAccount)
        cy.checkClick(buttonAccount)
        cy.checkUrl('/account')
    });
})