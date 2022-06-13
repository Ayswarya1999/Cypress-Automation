import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////Verifying Admin Fields as Admin user for V2 Project///////////////////
Given('User navigating to the Review Page by logging in to the wellcertified', function () {
    AdminLogin.adminLogin()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.WellcertificationAdmin).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.idAdmin).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.idAdmin).type(this.projectid.ChinaV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
        cy.wait(2000)
        cy.xpath(this.locator.adminprojectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
    })
})
When('User clicks on Reviews button', function () {
    cy.wait(4000)
    cy.contains('Reviews').should('be.visible').click({ force: true })
})
And('User clicks on view button', function () {
    cy.wait(3000)
    cy.xpath(this.locator.hsrviewbtn).click({ force: true })
})
And('User clicks on return review button', function () {
    cy.xpath(this.locator.resubmitreview).click({ force: true })
})
And('User enter Review comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewComment).scrollIntoView().type(this.data.ownerOrganization)
})
And('User set the review date', function () {
    cy.xpath(this.locator.reviewdate).click({ force: true })
    cy.xpath(this.locator.docsubOkbtn).click({ force: true })
})
And('User enter HSR Review Comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsrreviewcmnt).scrollIntoView().type(this.data.ownerOrganization)
})
And('User set HSR Review Date', function () {
    cy.xpath(this.locator.hsrreviewdate).click({ force: true })
    cy.xpath(this.locator.docsubOkbtn).click({ force: true })
})
And('User select paid in payment status', function () {
    cy.xpath(this.locator.paymentstatusradio).click({ force: true })
})
And('User clicks on Submit response', function () {
    cy.xpath(this.locator.submitresponsebtn).click({ force: true })
})
Then('User will be redirected to Preliminary Precertification Review page', function () {
    cy.contains('Final Documentation Review').should('be.visible')
})
And('User verifies on document download', function () {
    cy.xpath(this.locator.docdownloadbtn).should('be.visible')
})
And('User verifies on report download', function () {
    cy.xpath(this.locator.reportdownloadbtn).should('be.visible')
})
And('User verifies status after return review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewedstatusPPR).should('contain', "Reviewed")
})
And('User verifies the payment status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.paidstatusPPR).should('contain', "paid")
})
