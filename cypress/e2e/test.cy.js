describe.only("first set", ()=>{
    it("first test", ()=>{
        cy.visit("https://staging.lpitko.ru/")
        cy.get('.layout-1__header-wrapper-fixed > .layout-1__header > .header > [style="cursor: default;"]').should("be.visible")
    })
})