import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
    Login.loginpage()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellhealthsafety).click({ force: true })
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.xpath(this.locator.idSearch).type(this.projectid.WELLHealthSafety)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
            })
        cy.wait(2000)
        cy.xpath(this.locator.hsrreviewstatuscompare).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Achieved")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
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
/////////////////////////////////////// Review page//////////////////////////////////////////////////////////

When('User clicks on Submit Reviews button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.submitReview).should('be.visible')
    cy.xpath(this.locator.submitReview).should('be.visible').click({ force: true })
})
And('User verifies incomplete scorecard error message', function () {
    cy.contains("Oops! It looks like your scorecard is incomplete.").should('not.exist')
    cy.contains("Please ensure you have provided the documentation for all the features marked as a YES and then resubmit.").should('not.exist')
})
And('User clicks on submit button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
    cy.contains('Doc-submit-phase is required.').should('be.visible')
    cy.contains('Please provide your comments below to notify the IWBI team is required.').should('be.visible')
})
And('User selects the project phase and verifies options', function () {
    cy.xpath(this.locator.primaryHSR).invoke('text').then((primaryHSR) => {
        expect(primaryHSR).to.equal("Preliminary Health-Safety Review")
    })
    cy.xpath(this.locator.finalHSR).invoke('text').then((finalHSR) => {
        expect(finalHSR).to.equal("Final Health-Safety Review")
    })
    cy.xpath(this.locator.curativeReview).invoke('text').then((curativeReview) => {
        expect(curativeReview).to.equal("Curative Action Plan Review")
    })
    cy.xpath(this.locator.projectPhase).select("Preliminary Health-Safety Review")
})
And('User enters the comment', function () {
    cy.xpath(this.locator.commentReview).type(this.data.testdata)
})
And('User clicks on submit button', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
})
Then('User will be redirected to projects Reviews list', function () {
    cy.contains('Reviews').should('be.visible')
})
And('User verifies the Submitted and Estimated Review date in projects Reviews list', function () {
   // cy.xpath(this.locator.submittedOnDate).invoke('text').then((submittedOnDate) => {
    //    submittedOnDate.replaceAll("/n", "");
    //    expect(submittedOnDate.trim()).to.equal(CommonMethod.CurrentDate())
    //})
})
And('User verifies Review phase in projects Reviews list', function () {
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Health-Safety Review")
})
And('User verifies status in projects Reviews list', function () {
    cy.xpath(this.locator.reviewStatuslist).should('contain',"In Progress")

})
///////////////////////////////////////////////////////////////////////////////
Given('User navigates to the Reviews page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellhealthsafety).click({ force: true })
        cy.wait(2000)
        cy.reload()
        cy.xpath(this.locator.idSearch).type(this.projectid.WELLHealthSafety)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
            })
        cy.wait(2000)
        cy.xpath(this.locator.hsrreviewstatuscompare).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Achieved")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
})
And('User clicks on view button', function () {
    cy.wait(5000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Health-Safety Review page', function () {
cy.contains("Preliminary Health-Safety Review").should('be.visible')

})
Then('User verifies Preliminary Health-Safety Review fields', function () {
    cy.xpath(this.locator.submittedOnDatePHSR).should('be.visible')
    cy.xpath(this.locator.statusHSR).should('be.visible')
    cy.xpath(this.locator.paymentHSR).should('be.visible')
    })
And('User verifies status on Project Reviews', function () {
    cy.xpath(this.locator.statusHSR).should('contain',"In Progress")
    cy.xpath(this.locator.paymentHSR).should('contain',"unpaid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.testdata).should('be.visible')
})
And('User verifies the Submitted and Estimated Review date on Project Reviews', function () {
cy.xpath(this.locator.submittedOnDatePPR).should('be.visible')
     
})