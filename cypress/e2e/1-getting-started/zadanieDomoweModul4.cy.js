describe('lokalizatory zadanie domowe modul 4', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })

    it('po ID', () => {
        cy.get('#menu-item-923')
        cy.get('#menu-item-1871')
        cy.get('#menu-item-1023')
        cy.get('#menu-item-1692')
        cy.get('#menu-item-224')

    })

    it('po klasie', () => {
        cy.get('.elementor-element.elementor-element-9a0467d.elementor-widget.elementor-widget-heading')
        cy.get('.neve-skip-link.show-on-focus')
        cy.get('.far.fa-gem')
        cy.get('.gallery-icon.landscape').eq(0)
        cy.get('.elementor-widget-container').eq(2)

    })

    it('po atrybucie', () => {
        cy.get('input[aria-label="Szukaj"]')
        cy.get('div[id="header-menu-sidebar"]')
        cy.get('div[class="nv-single-page-wrap col"]')
        cy.get('div[data-elementor-id="5"]')
        cy.get('footer[id="site-footer"]')

    })

    it('po tekscie', () => {
        cy.get('h2').contains('Rozwijaj swoją karierę i zadbaj o swoją aplikację')
        cy.get('a').contains('Panel kursanta')
        cy.get('div').contains('Pomożemy Ci z tym, nawet jak nie wiesz, od czego zacząć i jakich narzędzi używać')
        cy.get('span').contains('Zobacz co oferujemy')
        cy.get('p').contains('14 dni na zwrot bez podawania przyczyny.')
    })
})