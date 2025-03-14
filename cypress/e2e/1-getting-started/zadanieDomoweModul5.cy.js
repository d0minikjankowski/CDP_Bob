describe('zadanie domowe moduł 5', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })

    it('przejdź do kursu Cypress', () => {
        cy.get('.elementor-button-wrapper').eq(2).click()
        cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')
        cy.get('.elementor-heading-title.elementor-size-default').contains('Kto nauczy Cię testów automatycznych?').scrollIntoView()
        cy.wait(2000)
        cy.screenshot('skrinszot', {capture: 'viewport'})
    })
    

})
