import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////////Verifies the Support Page///////////////////////////////////////////////
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.xpath(this.locator.WellFaculty.WellFaculty).click({ force: true })
    cy.wait(2000)
})
When('User clicks on Marketing Toolkit tab', function () {
    cy.contains('Marketing Toolkit').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User redirects to the DashboarMarketing Toolkitd page', function () {
    cy.contains("Dashboard").should('be.visible')
})
And('User verifies fields on the Dashboard page', function () {
    cy.wait(3000) 
    cy.contains("Dashboard").should('be.visible')
    cy.contains("Social Media Toolkit").should('be.visible') 
     
})
And('User verifies cards on the Marketing Toolkit Dashboard page', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(0).should('contain.text','WELL Faculty social media graphics')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(1).should('contain.text','WELL Faculty promo kit')
})