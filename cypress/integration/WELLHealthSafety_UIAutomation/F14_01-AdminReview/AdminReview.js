import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
    AdminLogin.adminLogin()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.WellhsrAdmin).click({ force: true })
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.xpath(this.locator.adminhsrid).click({ force: true })
        cy.xpath(this.locator.adminhsrid).type(this.projectid.WELLHealthSafety)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.adminhsridcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
        })
        cy.xpath(this.locator.hsrreviewstatuscompare).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Achieved")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
})
When('User clicks on Reviews button', function () {
    cy.wait(4000)
    cy.contains('Reviews').should('be.visible').click({ force: true })
})
Then('User will be redirected to Reviews page', function () {
   cy.contains('Reviews').should('be.visible')
})
And('User verifies Reviews fields', function () {
    cy.xpath(this.locator.submitReview).should('be.visible')
})
//////////////////view////////////////////////////////////////////////////////////////////////////////
Given('User navigating to the Review Page', function () {
    cy.contains('Reviews').should('be.visible')
})
And('User clicks on view button', function () {
    cy.wait(4000)
    cy.contains("Preliminary Health-Safety Review").scrollIntoView().should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Health-Safety Review page', function () {
    cy.wait(2000)
cy.contains("Preliminary Health-Safety Review").should('be.visible')

})
Then('User verifies Preliminary Health-Safety Review fields', function () {
    cy.wait(2000)
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
////////////////Edit/////////////////////////////////////////////////////////////////////////////////////
Given('User navigating to the Preliminary Health-Safety Review page', function () {
    cy.contains("Preliminary Health-Safety Review").should('be.visible')
})
When('User clicks on Edit button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.EditHSR).click({ force: true })
})
And('User enter the Review comment', function () {
    cy.xpath(this.locator.generalobsrtextbx).type(this.data.testdata)
})
And('User select Needs clarification Review status', function () {
    cy.xpath(this.locator.midReviewhsrradio).click({ force: true })
})
And('User enter Mid-Review Clarification Note', function () {
    cy.xpath(this.locator.midreviewclarificationnote).type(this.data.testdata)
})
And('User clicks on update button', function () {
    cy.xpath(this.locator.updatehsr).click({ force: true })
})
Then('User verifies comments', function () {
    cy.wait(2000)
    cy.contains(this.data.testdata).should('be.visible')
})
And('User verifies status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.requireClarstatus).should('contain',"Require Clarification")
})
And('User added review comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewcmnt).type(this.data.testdata)
})
And('User upload document for Preliminary Health-Safety Review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.uploaddochsr).attachFile(this.data.Uploadfile, { force: true })
})
And('User verifies the uploaded document', function () {
    cy.wait(2000)
    cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})