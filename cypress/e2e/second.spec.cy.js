describe.only("after login", ()=>{
    beforeEach("login", ()=>{
        cy.visit("/")
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med').click();
        cy.get(':nth-child(3) > .frm').type(Cypress.env('login'));
        cy.get(':nth-child(4) > .frm').type(Cypress.env('password'));
        cy.get('.btn-main').click();
        
    });
    it("boxes", ()=>{
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med').should("be.visible");
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account/boxes"] > .header-item > .header-item__text > .txt--med').click();
        cy.url().should('include', '/account/boxes')
    });
    it("create a box", ()=>{
        cy.get('.home-page-buttons > [href="/box/new"] > .btn-main').should("be.visible");
        cy.get('.home-page-buttons > [href="/box/new"] > .btn-main').click();
        cy.url().should('include', '/box/new')
    });
    it("random", ()=>{
        cy.get('[href="/randomizer"] > .btn-secondary').should("be.visible");
        cy.get('[href="/randomizer"] > .btn-secondary').click();
        cy.url().should('include', '/randomizer')
    });
    it("account", ()=>{
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med').should("be.visible");
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > .layout-row-start > [href="/account"] > .header-item > .header-item__text > .txt--med').click();
        cy.url().should('include', '/account')
    });
})