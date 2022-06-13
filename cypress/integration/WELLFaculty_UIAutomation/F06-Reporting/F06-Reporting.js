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
When('User clicks on Reporting tab', function () {
    cy.contains('Reporting').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User redirects to the Reporting Toolkitd page', function () {
    cy.contains("Dashboard").should('be.visible')
})
And('User verifies fields on the Dashboard page', function () {
    cy.wait(3000) 
    cy.contains("Dashboard").should('be.visible')
    cy.contains("Reporting").should('be.visible') 
     
})
And('User verifies cards on the Reporting Dashboard page', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(0).should('contain.text','Report WELL education events')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(1).should('contain.text','Submit Attendee List (for AIA reporting only)')
})