import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})

Given('User navigates to the Reviews page by logging in to the wellcertified', function () {
    AdminLogin.adminLogin()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.WellcertificationAdmin).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.idAdmin).click({ force: true })
        cy.xpath(this.locator.idAdmin).type(this.projectid.ChinaV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
        cy.xpath(this.locator.adminprojectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
        cy.contains('Reviews').should('be.visible')
    })
})
When('User clicks on Reviews button', function () {
    cy.wait(4000)
    cy.contains('Reviews').should('be.visible').click({ force: true })
})
Then('User will be redirected to Reviews page', function () {
    // cy.contains('Project Reviews WELLUIAutomation').should('be.visible')
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
    cy.contains("Preliminary Precertification Review").scrollIntoView().should('be.visible')
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
    cy.xpath(this.locator.statusPPR).should('contain', "In Progress")
    cy.xpath(this.locator.paymentPPR).should('contain', "unpaid")
})
And('User verifies comments on Project Reviews', function () {
    cy.contains(this.data.ownerOrganization).should('be.visible')
})
And('User verifies the Submitted and Estimated Review date on Project Reviews', function () {
    //  cy.xpath(this.locator.submittedOnDatePPR).invoke('text').then((submittedOnDatePPR) => {
    //     submittedOnDatePPR.replaceAll("/n", "");
    //     expect(submittedOnDatePPR.trim()).to.equal(CommonMethod.CurrentDate())
    // })
})
////////////////Edit/////////////////////////////////////////////////////////////////////////////////////
Given('User navigating to the Preliminary Precertification Review page', function () {
    cy.contains("Preliminary Precertification Review").should('be.visible')
})
When('User clicks on Edit button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.EditPR).click({ force: true })
})
And('User enter the Review comment', function () {
    cy.xpath(this.locator.reviewComment).type(this.data.ownerOrganization)
})
And('User upload document', function () {
    cy.wait(2000)
    cy.xpath(this.locator.uploadPPR).attachFile(this.data.testDataPath)
})
And('User select Needs clarification Review status', function () {
    cy.xpath(this.locator.midReviewPR).click({ force: true })
})
And('User enter Mid-Review Clarification Note', function () {
    cy.xpath(this.locator.midreviewComment).type(this.data.ownerOrganization)
})
And('User clicks on update button', function () {
    cy.xpath(this.locator.updatePPR).click({ force: true })
})
Then('User verifies comments', function () {
    cy.wait(2000)
    cy.contains(this.data.ownerOrganization).should('be.visible')
})
And('User verifies status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.requireClar).should('contain', "Require Clarification")
})