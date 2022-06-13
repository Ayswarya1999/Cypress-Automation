import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
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
        cy.contains('Reviews').should('be.visible')
})
When('User clicks on Reviews button', function () {
    cy.wait(2000)
    cy.contains('Reviews').should('be.visible').click({ force: true })
})
Then('User will be redirected to Reviews page', function () {
    cy.wait(2000)
    cy.contains('Reviews').should('be.visible')
})
And('User verifies Reviews fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.submitReview).should('be.visible')
})
And('User verifies Review phase in Reviews list', function () {
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Performance Rating Review")
})
And('User verifies status in Reviews list', function () {
    cy.xpath(this.locator.reviewcompletestatuslist).should('contain',"Completed")

})
///////////////////////////View Page////////////////////////////////////////////////////
Given('User navigates to the Reviews page', function () {
    cy.contains("Reviews").should('be.visible')
})
And('User clicks on view button', function () {
    cy.wait(5000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Performance Rating Review page', function () {
cy.contains("Preliminary Performance Rating Review").should('be.visible')

})
Then('User verifies Preliminary Performance Rating Review fields', function () {
    cy.xpath(this.locator.submittedOnDatePHSR).should('be.visible')
    cy.xpath(this.locator.reviewedstatusPHSRR).should('be.visible')
    cy.xpath(this.locator.paidstatusPHSR).should('be.visible')
    })
And('User verifies status on Project Reviews', function () {
    cy.xpath(this.locator.reviewedstatusPHSRR).should('contain',"Reviewed")
})
And('User verifies payment status for Reviews', function () {
    cy.xpath(this.locator.paidstatusPHSR).should('contain',"paid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.testdata).should('be.visible')
})
