import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
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
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
})
When('User clicks on Promotion tab', function () {
    cy.contains('Promotion').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to Promotion page', function () {
    cy.contains('Promotion').should('be.visible')
})
And('User verifies Promotion fields', function () {
    cy.xpath(this.locator.HSRpromotionfields).should('be.visible')
    cy.contains('Engagement Materials').should('be.visible')
})
And('User verifies Engagement Materials cards', function () {
    cy.get(this.locator.resourceCard).eq(0).should('contain.text', 'IWBI branding guidelines ')
})
