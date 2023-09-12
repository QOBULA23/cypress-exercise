describe("Configure browser", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

        it('Make an appointment', () => {
        cy.get('btn-make-appointment').click()
        cy,get('txt-username').type('John Doe')
        cy.get('txt-password').type('ThisIsNotAPassword')
        cy.get('btn-login').click()
        cy.get('chk_hospotal_readmission').click()
        cy.get('txt_visit_date').type('25/09/2023')
        cy.get('txt_comment').type('Test Comment Text')
        cy.get('btn-book-appointment').click()
    })