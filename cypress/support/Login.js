 const myEnv = Cypress.env("Enviroment")

class login {
    static loginpage() {
        cy.fixture(myEnv).then(function (data) {
            this.data = data
            cy.visit(this.data.url)
        })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
            cy.wait(2000)
            cy.contains('Log in to your account').should('be.visible')
            cy.xpath(this.locator.username).type(this.data.email)
            cy.xpath(this.locator.password).type(this.data.password)
            cy.xpath(this.locator.loginBtn).click()
        })
    }

}
export default login;