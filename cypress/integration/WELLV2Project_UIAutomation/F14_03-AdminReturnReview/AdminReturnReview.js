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
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
            })
        cy.wait(2000)
        cy.xpath(this.locator.adminprojectstatus).invoke('text').then((status)=>{
            expect(status).to.equal("Registered")
            })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
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
   // cy.xpath(this.locator.submittedOnDate).invoke('text').then((submittedOnDate) => {
    //    submittedOnDate.replaceAll("/n", "");
    //    expect(submittedOnDate.trim()).to.equal(CommonMethod.CurrentDate())
   // })
})
And('User verifies Review phase in the Review list', function () {
    cy.wait(3000)
    cy.contains('Reviews').should('be.visible')
    cy.xpath(this.locator.reviewPhaselist).should('contain',"Preliminary Precertification Review")
})
And('User verifies status in the Review list', function () {
  //  cy.xpath(this.locator.returnreviewstatusreviewlist).should('contain',"In Progress")
    })

///////////////////////Verifies Preliminary Precertification Review/////////////////////////////////
Given('User navigating to the Preliminary Precertification Review', function () {
    cy.contains('Reviews').should('be.visible')
})
When('User clicks on view button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.viewbtn).click({ force: true })
})
Then('User will be redirected to Preliminary Precertification Review page', function () {
    cy.contains('Preliminary Precertification Review').should('be.visible')
})
And('User verifies Preliminary Precertification fields', function () {
    cy.xpath(this.locator.statusPPR).should('be.visible')
    cy.contains(this.data.ownerOrganization).scrollIntoView().should('be.visible')
})
And('User verifies status', function () {
    cy.xpath(this.locator.statusPPR).should('contain',"In Progress")
})
And('User verifies comments', function () {
    cy.contains(this.data.ownerOrganization).scrollIntoView().should('be.visible')
})

//////////////////////Return Review////////////////////////////////////////////////
Given('User navigating to the return review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.resubmitreview).click({ force: true })
})
When('User enter Review comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewComment).scrollIntoView().type(this.data.ownerOrganization)
})
And('User set the review date', function () {
    cy.xpath(this.locator.reviewdate).click({ force: true })
    cy.xpath(this.locator.docsubOkbtn).click({ force: true })
})
And('User select paid in payment status', function () {
    cy.xpath(this.locator.paymentstatusradio).click({ force: true })
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
    cy.contains(this.data.ownerOrganization).should('be.visible')
})
And('User verifies status after return review', function () {
    cy.wait(2000)
    cy.xpath(this.locator.reviewedstatusPPR).should('contain',"Reviewed")
    })
And('User verifies the payment status', function () {
    cy.wait(2000)
    cy.xpath(this.locator.paidstatusPPR).should('contain',"paid")
})

