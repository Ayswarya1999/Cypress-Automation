import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////////Verifies the Support Page///////////////////////////////////////////////
Given('User navigate to the Support page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.enrollment.enrollmentStatus).should('contain', 'Registered')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
})
When('User clicks on Support from the left menu', function () {
    cy.contains('Support').click({ force: true })
})
Then('User will be redirected to Support page successfully', function () {
    cy.contains('Support').should('be.visible')
})
And('User verifies the your WELL Performance Rating Support page fields', function () {
    cy.contains('Getting Started').should('be.visible')
})
//////////////////////////////////Verifies the support cards page//////////////////////////////////////////////////////////
Given('User navigate to the support cards page', function () {
    cy.contains('Support').should('be.visible')
})
Then('User verifies card count for Getting Started', function () {
    cy.get(this.locator.resourceCard).eq(0).should('contain.text', 'Overview: the WELL Rating Process')
    cy.get(this.locator.resourceCard).eq(1).should('contain.text', '(Coming soon) How to Create and Upload WELL Documentation')
    cy.get(this.locator.resourceCard).eq(2).should('contain.text', '(Coming soon) The WELL Rating Review Process')
    cy.get(this.locator.resourceCard).eq(3).should('contain.text', 'Celebrate your WELL Rating achievement')
})
And('User verifies card count for Technical tools', function () {
    cy.get(this.locator.resourceCard).eq(4).should('contain.text', 'WELL Ratings Guidebook')
    cy.get(this.locator.resourceCard).eq(5).should('contain.text', '(Coming Soon) Letter of Assurance Template')
    cy.get(this.locator.resourceCard).eq(6).should('contain.text', '(Coming soon) Interiors + Base Buildings: Applying WELL Certification in a WELL Certified Base Building')
    cy.get(this.locator.resourceCard).eq(7).should('contain.text', '(Coming soon) Sample Documentation')
    cy.get(this.locator.resourceCard).eq(8).should('contain.text', '(Coming soon) Multiple Locations Document Sharing Form')
    cy.get(this.locator.resourceCard).eq(9).should('contain.text', 'WELL Performance Rating Alignment Tool')
    cy.get(this.locator.resourceCard).eq(10).should('contain.text', 'WELL Performance Rating Sensor Data Template')
    cy.get(this.locator.resourceCard).eq(11).should('contain.text', ' WELL v2 to WELL Ratings Gap Analysis Tool')
    cy.get(this.locator.resourceCard).eq(12).should('contain.text', 'WELL v2 pilot to WELL Ratings Gap Analysis Tool')
})
And('User verifies card count for Helpful articles', function () {
    cy.get(this.locator.resourceCard).eq(13).should('contain.text', 'Sleeping Giants: Awakening Building Water Systems')
})