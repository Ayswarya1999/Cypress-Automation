import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
        cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
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
And('User verifies Only project administrators and team managers are allowed to submit documentation for review message', function () {
    cy.contains("You don't have sufficient privileges to submit documentation. Only project administrators and team managers are allowed to submit documentation for review.").should('not.exist')
})
And('User verifies features are marked as either a YES or NO message', function () {
    cy.contains('Oops! It looks like your scorecard is incomplete. Please ensure all features are marked as either a YES or NO and then resubmit.').should('not.exist')
})
And('User verifies preconditions are marked as either a YES or NO message', function () {
    cy.contains('Oops! It looks like your scorecard is incomplete. Please ensure all preconditions are marked as a YES and then resubmit.').should('not.exist')
})
And('User verifies Project Information Form message', function () {
    cy.xpath(this.locator.getProjectinfo).invoke('text').then((getProjectinfo) => {
        expect(getProjectinfo).to.equal("Project Information Form")
    })
})
And('User clicks on submit button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
    cy.contains('Doc-submit-phase is required.').should('be.visible')
    cy.contains('Please provide your comments below to notify the IWBI team is required.').should('be.visible')
})
And('User selects the project phase and verifies options', function () {
    cy.xpath(this.locator.finalPrecertificationReview).invoke('text').then((finalPrecertificationReview) => {
        expect(finalPrecertificationReview).to.equal("Final Precertification Review")
    })
    cy.xpath(this.locator.finalDocumentationReview).invoke('text').then((finalDocumentationReview) => {
        expect(finalDocumentationReview).to.equal("Final Documentation Review")
    })
    cy.xpath(this.locator.preliminaryDocumentationReview).invoke('text').then((preliminaryDocumentationReview) => {
        expect(preliminaryDocumentationReview).to.equal("Preliminary Documentation Review")
    })
    cy.xpath(this.locator.performanceVerification).invoke('text').then((performanceVerification) => {
        expect(performanceVerification).to.equal("Performance Verification")
    })
    cy.xpath(this.locator.preliminaryPerformanceReview).invoke('text').then((preliminaryPerformanceReview) => {
        expect(preliminaryPerformanceReview).to.equal("Preliminary Performance Review")
    })
    cy.xpath(this.locator.documentationAppealReview).invoke('text').then((documentationAppealReview) => {
        expect(documentationAppealReview).to.equal("Documentation Appeal Review")
    })
    cy.xpath(this.locator.performanceVerificationAppealReview).invoke('text').then((performanceVerificationAppealReview) => {
        expect(performanceVerificationAppealReview).to.equal("Performance Verification Appeal Review")
    })
    cy.xpath(this.locator.curativeActionPlanReview).invoke('text').then((curativeActionPlanReview) => {
        expect(curativeActionPlanReview).to.equal("Curative Action Plan Review")
    })
    cy.xpath(this.locator.projectPhase).select("Preliminary Precertification Review")
})
And('User enters the comment', function () {
    cy.xpath(this.locator.commentReview).type(this.data.ownerOrganization)
})
And('User clicks on submit button', function () {
    cy.xpath(this.locator.submitReviewDoc).should('be.visible').click({ force: true })
})
Then('User will be redirected to projects Reviews list', function () {
    cy.contains('Project Reviews').should('be.visible')
})
And('User verifies the Submitted and Estimated Review date in projects Reviews list', function () {
   // cy.xpath(this.locator.submittedOnDate).invoke('text').then((submittedOnDate) => {
    //    submittedOnDate.replaceAll("/n", "");
    //    expect(submittedOnDate.trim()).to.equal(CommonMethod.CurrentDate())
    //})
})
And('User verifies Review phase in projects Reviews list', function () {
    cy.xpath(this.locator.reviewPhaselist).should('contain',"Preliminary Precertification Review")
})
And('User verifies status in projects Reviews list', function () {
    cy.xpath(this.locator.reviewstatuslist).should('contain',"In Progress")

})
///////////////////////////////////////////////////////////////////////////////
And('User clicks on view button', function () {
    cy.wait(5000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Precertification Review page', function () {
cy.contains("Preliminary Precertification Review").should('be.visible')

})
Then('User verifies Preliminary Precertification Review fields', function () {
    cy.xpath(this.locator.submittedOnDatePPR).should('be.visible')
    cy.xpath(this.locator.statusPPR).should('be.visible')
    cy.xpath(this.locator.paymentPPR).should('be.visible')
    })
And('User verifies status on Project Reviews', function () {
    cy.xpath(this.locator.statusPPR).should('contain',"In Progress")
    cy.xpath(this.locator.paymentPPR).should('contain',"unpaid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.ownerOrganization).should('be.visible')
})
And('User verifies the Submitted and Estimated Review date on Project Reviews', function () {
    //cy.xpath(this.locator.submittedOnDatePPR).invoke('text').then((submittedOnDatePPR) => {
     //   submittedOnDatePPR.replaceAll("/n", "");
    //    expect(submittedOnDatePPR.trim()).to.equal(CommonMethod.CurrentDate())
   // })
})