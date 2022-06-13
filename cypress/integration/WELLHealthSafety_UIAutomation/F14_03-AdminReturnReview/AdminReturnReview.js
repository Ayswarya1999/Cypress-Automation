import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////Verifying Admin Fields as Admin user for V2 Project///////////////////
Given('User navigating to the Review Page by logging in to the wellcertified', function () {
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
       })
}) 
When('User clicks on Review button', function () {
    cy.wait(4000)
    cy.contains('Reviews').should('be.visible').click({ force: true })
})
Then('User will be redirected to projects Reviews list page', function () {
    cy.contains('Reviews').should('be.visible')
})
And('User verifies the Submitted and Estimated Review date', function () {
  cy.xpath(this.locator.submittedOnDate).should('be.visible')
})
And('User verifies Review phase in the Review list', function () {
    cy.wait(3000)
    cy.contains('Reviews').should('be.visible')
    cy.xpath(this.locator.reviewPhaselists).should('contain',"Preliminary Health-Safety Review")
})
And('User verifies status in the Review list', function () {
    cy.xpath(this.locator.returnreviewstatusreviewlist).should('contain',"In Progress")
    })

///////////////////////Verifies Preliminary Health-Safety Review/////////////////////////////////
Given('User navigating to the Preliminary Health-Safety Review', function () {
    cy.contains('Reviews').should('be.visible')
})
When('User clicks on view button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Health-Safety Review page', function () {
    cy.contains('Preliminary Health-Safety Review').should('be.visible')
})
And('User verifies Preliminary Health-Safety Review fields', function () {
    cy.xpath(this.locator.statusPHSR).should('be.visible')
    cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})
And('User verifies status', function () {
    cy.xpath(this.locator.statusPHSR).should('contain',"In Progress")
})
And('User verifies comments', function () {
    cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})

//////////////////////Return Review////////////////////////////////////////////////
Given('User navigating to the return review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.resubmitreview).click({ force: true })
})
When('User enter Review comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsrreviewComment).scrollIntoView().type(this.data.testdata)
})
And('User set the review date', function () {
    cy.xpath(this.locator.reviewdate).click({ force: true })
    cy.xpath(this.locator.docsubOkbtn).click({ force: true })
})
And('User clicks on Submit response', function () {
    cy.xpath(this.locator.submitresponsebtn).click({ force: true })
})
And('User verifies on document download', function () {
    cy.xpath(this.locator.docdownloadbtn).should('be.visible')
})
And('User verifies on report download', function () {
    cy.xpath(this.locator.reportdownloadbtn).should('be.visible')
})
And('User verifies comments after return review', function () {
    cy.contains(this.data.testdata).should('be.visible')
})
And('User verifies status after return review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewedstatusPHSRR).should('contain',"Reviewed")
    })
And('User verifies the payment status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.paidstatusPPR).should('contain',"paid")
})

