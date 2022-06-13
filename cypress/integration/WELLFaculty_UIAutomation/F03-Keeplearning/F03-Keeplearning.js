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
When('User clicks on Keep Learning tab', function () {
    cy.contains("Keep Learning").click({ force: true })
})
Then('User redirects to the Keep Learning Dashboard page', function () {
    cy.contains("Dashboard").should('be.visible')
    cy.contains("Keep Learning").should('be.visible')
    
})
And('User verifies cards on the Keep Learning Dashboard page', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(0).should('contain.text', 'Telling the WELL Story')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(1).should('contain.text', 'Using WELL concept slides to create WELL AP exam prep')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(2).should('contain.text', 'Webcasts')
})