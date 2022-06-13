import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////////////Verify the Document page//////////////////////////////////////////
Given('User navigate to the Document page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.xpath(this.locator.enrollment.enrollmentStatus).should('contain', 'Registered')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
})
When('User clicks on Document tab', function () {
    cy.wait(2000)
    cy.contains('Document').should('be.visible').click({ force: true })
})
Then('User will be redirected to the WELL Performance Rating Document page successfully', function () {
    cy.contains('Documents').should('be.visible')
    cy.wait(3000)
})
//////////////////////////////////////Validating Document fields//////////////////////////////////////////////////////////////////////
Given('User navigate to the Document page', function () {
    cy.wait(3000)
    cy.contains('Documents').should('be.visible')

})
Then('User verifies Document fields', function () {
    cy.xpath(this.locator.wpsDocument.uploadbtn).should('be.visible')
    cy.xpath(this.locator.wpsDocument.selectLoc).should('be.visible')
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(0).should('be.visible')
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(1).should('be.visible')
    //cy.xpath(this.locator.SearchDoc).should('be.visible')
    cy.xpath(this.locator.wpsDocument.filter).should('be.visible')
    cy.contains('This library compiles all documentation connected to your locations, and tracks your task progress to advancing WELL at scale')
})
And('User verifies Document Type options', function () {
    cy.wait(4000)
    cy.xpath(this.locator.wpsDocument.uploadbtn).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).should('contain', 'Upload the requested general information items')
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).should('contain', 'Upload a legal document')
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).should('contain', 'Upload audit document')
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).should('contain', 'Upload feature verification')
})
/////////////////filter/////////////////////////////////////////////
And('User clicks on filter button', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(0).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.wpsDocument.filter).click({ force: true })
})
Then('User verifies filter options count', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.filterOption).should('have.length',3) 
})
And('User verifies Verification filter', function () {
      cy.wait(2000)
    cy.get(this.locator.wpsDocument.filterOption).eq(0).click({ force: true })
    cy.wait(1000)
    cy.get(this.locator.wpsDocument.flitercbx).eq(7).check()
    cy.wait(1000)
    cy.get(this.locator.wpsDocument.applyOrClear).eq(0).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.getProjectCount).eq(0).should('contain','1')
})
/////////////////General///////////////////////////////////////////////////////
And('User clicks on Upload button in Upload Document', function () {
    cy.wait(4000)
    cy.xpath(this.locator.wpsDocument.uploadbtn).click({ force: true })
})
And('User select the General type', function () {
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).select("Upload the requested general information items")
    cy.wait(1000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(1).select("Project overview")
})
And('User Upload the Document', function () {
    cy.wait(1000)
    cy.xpath(this.locator.AttachDoc).attachFile(this.data.Uploadfile)
    cy.wait(3000)
})
And('User enter the comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.wpsDocument.noteDoc).type("Reduce Respiratory Particle Exposure")
})
And('User clicks on upload button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.wpsDocument.uploadDocbtn).click({ force: true })
})
Then('User will be redirected to general List successfully', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(0).click({ force: true })
})
And('User delete General type', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.deleteDoc).eq(0).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.deleteYesbtn).should('contain','Yes').click()
    cy.wait(5000)
})
///////////////////////////Audit type////////////////////////////////////////////////////////////

When('User select the Audit type', function () {
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).select("Upload audit document", { force: true })

})

And('User select the Verification Method', function () {
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(1).select("Technical Document (Audited)")
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(2).select("PA9")
    cy.get(this.locator.VerificationmethodOrdocument).eq(3).select("All Spaces")
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.addPart).click({ force: true })

})
Then('User will be redirected to Library List successfully', function () {
    cy.wait(3000)
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(0).click({ force: true })

})


And('User delete Audit type in Audit type in Upload Document', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.deleteDoc).eq(0).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.deleteYesbtn).should('contain','Yes').click()
    cy.wait(5000)
})

////////////////////////Document Upload for WELL V2 Project////////////////////////////////////////////////////
And('User clicks on upload button in Task document list', function () {
    cy.wait(5000)
    cy.get(this.locator.wpsDocument.updateUploadDoc).eq(0).click({ force: true })
})
And('User edit location document', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.editLoc).eq(0).click({ force: true })
})
And('User check the location in location document', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.LocDoccbx).eq(29).check()
     cy.wait(3000)
    cy.get(this.locator.wpsDocument.assignbtn).eq(0).click({ force: true })
})
And('User clicks on update button', function () {
    cy.wait(2000)
    cy.get(this.locator.wpsDocument.uploaddocbtn).eq(0).dblclick({ force: true })
    cy.wait(5000)
})
Then('User redirect to Task document list', function () {
    cy.get(this.locator.wpsDocument.TaskOrDoc).eq(0).click({ force: true })
    cy.wait(5000)
})
And('User verfies the location count for updates document', function () {
    cy.get(this.locator.wpsDocument.getLocCount).eq(0).should('contain','11 Assigned')
    cy.wait(1000)
    cy.get(this.locator.wpsDocument.reviewStatus).eq(4).should('contain','Ready For Review')
})

////////////////////////Feature type/////////////////////////////////////////////////////
When('User select the Feature type', function () {
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(0).select("Upload feature verification", { force: true })
})
And('User selects the Verification Method', function () {
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).eq(1).select("Policy and/or Operations Schedule")
})
