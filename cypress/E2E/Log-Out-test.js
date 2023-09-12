describe("Configure browser", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

        it('Log out', () => {
        cy.get('btn-make-appointment').click()
        cy,get('txt-username').type('John Doe')
        cy.get('txt-password').type('ThisIsNotAPassword')
        cy.get('btn-login').click()
        cy.get('menu-toggle').click()
        cy.contains('Logout').click()
    })