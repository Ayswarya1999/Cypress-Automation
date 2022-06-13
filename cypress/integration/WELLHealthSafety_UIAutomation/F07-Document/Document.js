import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////////////Verify the Document page//////////////////////////////////////////
Given('User navigate to the Document page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellhealthsafety).click({ force: true })
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.idSearch).type(this.projectid.WELLHealthSafety)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
        })
        cy.wait(2000)
        cy.xpath(this.locator.hsrstatuscompare).invoke('text').then((status) => {
            expect(status.trim()).to.equal("Registered")
        })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
    })
})
When('User clicks on Document tab', function () {
    cy.wait(2000)
    cy.contains('Document').should('be.visible').click({ force: true })
})
Then('User will be redirected to the WELL Health-Safety Document page successfully', function () {
    cy.contains('Documents').should('be.visible')
    cy.wait(3000)
})
//////////////////////////////////////Validating Document fields//////////////////////////////////////////////////////////////////////
Given('User navigate to the Document page', function () {
    cy.wait(3000)
    cy.contains('Documents').should('be.visible')

})
Then('User verifies Document fields', function () {
    cy.xpath(this.locator.Addbutton).should('be.visible')
    // cy.xpath(this.locator.DownloadDoc).should('be.visible')
    cy.xpath(this.locator.libraryTab).should('be.visible')
    cy.get(this.locator.AuditOrGeneral).eq(0).should('be.visible')
    cy.get(this.locator.AuditOrGeneral).eq(1).should('be.visible')
    cy.get(this.locator.AuditOrGeneral).eq(2).should('be.visible')
    cy.xpath(this.locator.SearchDoc).should('be.visible')
    cy.xpath(this.locator.Searchbutton).should('be.visible')
    cy.contains('*Please complete/update the "Multiple Locations Document Sharing Form" which can be downloaded from the Support tab >> Technical Tools. This completed form should be uploaded under the General tab.').should('be.visible')

})
And('User verifies Type options', function () {
    cy.wait(4000)
    cy.xpath(this.locator.Addbutton).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.VerificationmethodOrdocument).should('contain', 'Upload the requested general information items')
    cy.get(this.locator.VerificationmethodOrdocument).should('contain', 'Upload a legal document')
    cy.get(this.locator.VerificationmethodOrdocument).should('contain', 'Upload an audit document')
    cy.get(this.locator.VerificationmethodOrdocument).should('contain', 'Upload the requested general information items')
    cy.get(this.locator.VerificationmethodOrdocument).should('contain', 'Upload verification of a WELL feature')

})
/////////////////General///////////////////////////////////////////////////////
And('User clicks on Add button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.Addbutton).click({ force: true })

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
Then('User will be redirected to general List successfully', function () {
    cy.wait(2000)
    cy.get(this.locator.AuditOrGeneral).eq(1).click({ force: true })
})
And('User delete General type', function () {
    cy.wait(2000)
    cy.get(this.locator.deleteIconGeneral).eq(0).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.deleteYesGeneral).should('contain', "Delete").click()
    cy.wait(5000)
})
///////////////////////////Audit type////////////////////////////////////////////////////////////

When('User select the Audit type', function () {
    cy.wait(2000)
    cy.xpath(this.locator.typeDoc).select("Upload an audit document", { force: true })
})
And('User check the location', function () {
    cy.get(this.locator.selectLoc).eq(0).check()

})
And('User select the Verification Method', function () {
    cy.get(this.locator.VerificationmethodOrdocument).eq(1).select("Technical Document (Audited)")

})
And('User select the Verification document', function () {
    cy.get(this.locator.verificationPart).eq(0).click()
    cy.wait(1000)
    cy.get(this.locator.verificationPart).eq(0).type("Innovation I")
    cy.wait(1000)
    cy.get(this.locator.verificationPart).eq(0).type('{enter}')
})
And('User Upload the Document', function () {
    cy.wait(1000)
    cy.xpath(this.locator.AttachDoc).attachFile(this.data.Uploadfile)
})
And('User select the Verification document location', function () {
    cy.get("select[placeholder='select location'] option").eq(1).invoke('text').then((val) => {
        cy.get("select[placeholder='select location']").select(val)
    })
})
And('User enter the comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Comment).type("Reduce Respiratory Particle Exposure")
})
And('User clicks on upload button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Uploadbtn).click({ force: true })
})

Then('User will be redirected to Library List successfully', function () {
    cy.wait(3000)
    cy.get(this.locator.AuditOrGeneral).eq(0).click({ force: true })

})

And('User verifies the type in Audit list', function () {
    cy.wait(2000)
    cy.contains("Technical Document (Audited)").scrollIntoView().should('be.visible')
})
And('User delete Audit type in Audit type in Upload Document', function () {
    cy.wait(2000)
    cy.get(this.locator.deleteYesGeneral).click({ force: true })
    cy.wait(2000)
})

////////////////////////Document Upload for WELL V2 Project////////////////////////////////////////////////////
And('User edit icon in library document list', function () {
    cy.wait(5000)
    cy.get(this.locator.verifyloc).eq(1).should('contain', "1")
    cy.get(this.locator.editUploadDoc).eq(0).click({ force: true })
})
And('User edit location document', function () {
    cy.wait(2000)
    cy.get(this.locator.editSharedDoc).eq(0).click({ force: true })
})
And('User check the location in location document', function () {
    cy.wait(2000)
    cy.get(this.locator.AssignlocCbx).eq(2).check()
    cy.get(this.locator.AssignlocCbx).eq(3).check()
})
And('User clicks on update button', function () {
    cy.get(this.locator.updateDocbtn).eq(0).click({ force: true })
})
Then('User redirect to library document list', function () {
    cy.wait(2000)
    cy.get(this.locator.editUploadDoc).should('be.visible')
})
And('User verfies the location count for updates document', function () {
    cy.wait(3000)
    cy.get(this.locator.verifyloc).eq(1).should('contain', "3")
})
////////////////////////Feature type/////////////////////////////////////////////////////
When('User select the Feature type', function () {
    cy.wait(2000)
    cy.xpath(this.locator.typeDoc).select("Upload verification of a WELL feature", { force: true })
})
And('User selects the Verification Method', function () {
    cy.get(this.locator.VerificationmethodOrdocument).eq(1).select("On-site Photographs")

})
And('User selects the Verification document', function () {
    cy.get(this.locator.verificationPart).eq(0).click()
    cy.wait(1000)
    cy.get(this.locator.verificationPart).eq(0).type("Support Handwashing")
    cy.wait(1000)
    cy.get(this.locator.verificationPart).eq(0).type('{enter}')
})