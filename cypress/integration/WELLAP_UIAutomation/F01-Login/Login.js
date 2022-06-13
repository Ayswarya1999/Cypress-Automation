import CommonMethod from '../../../support/CommonMethod'
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////Login to application with valid user credentials/////////////////////////////////////////
Given('User navigate to Wellcertified page', function () {
   cy.visit(this.data.url)
   cy.contains('Log in to your account').should('be.visible')
})
When('User enters username and password', function () {
   cy.xpath(this.locator.username).type(this.data.email)
   cy.xpath(this.locator.password).type(this.data.password)
})
And('User clicks on Sign IN button', function () {
   cy.xpath(this.locator.loginBtn).click()
})
Then('User login must be successful', () => {
   cy.contains('Dashboard').should('be.visible')
})
/////////////////Login to application with Invalid user credentials/////////////////////////////////////////////////////////////////

When('User verifies login page fields', function () {
   cy.xpath(this.locator.username).should('be.visible')
   cy.xpath(this.locator.password).should('be.visible')
   cy.xpath(this.locator.loginBtn).should('be.visible')
})
And('User enters invalid username and password', function () {
   cy.xpath(this.locator.username).type(this.data.invalidemail)
   cy.xpath(this.locator.password).type(this.data.invalidpass)
})
Then('User verifes the error message for invalid credentials', () => {
   cy.contains('There was an error logging you in').should('be.visible')
   cy.contains('Invalid email or password.').should('be.visible')
})
And('User login must be unsuccessful', () => {
   cy.contains('Dashboard').should('not.exist')
})
