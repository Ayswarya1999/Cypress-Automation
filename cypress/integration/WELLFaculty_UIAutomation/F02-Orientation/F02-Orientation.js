import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.xpath(this.locator.WellFaculty.WellFaculty).click({ force: true })
    cy.wait(2000)
    cy.contains("Dashboard").should('be.visible')
})
When('User clicks on Orientation tab', function () {
    cy.contains("Orientation").should('be.visible')
})
Then('User verifies fields on the Dashboard page', function () {
    cy.contains("Dashboard").should('be.visible')
    cy.contains("WELL Faculty Orientation").should('be.visible')
    cy.xpath(this.locator.WellFaculty.Downloadcertificatebtn).should('be.visible')
})
And('User verifies cards on the Orientation Dashboard page', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(0).should('contain.text', 'WELL Faculty Onboarding Module')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(1).should('contain.text', 'WELL Brand Guide')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(2).should('contain.text', 'IWBI Style Guide')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(3).should('contain.text', 'Custom Presentation')
})