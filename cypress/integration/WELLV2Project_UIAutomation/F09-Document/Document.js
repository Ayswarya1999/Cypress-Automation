
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////////////Verify the Document page//////////////////////////////////////////
Given('User navigate to the Document page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
        cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
        })
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })

        cy.contains(this.projectid.WellV2Project).click({ force: true })
    })
})
When('User clicks on Document tab', function () {
    cy.wait(3000)
    cy.contains('Document').should('be.visible').click({ force: true })
})
Then('User will be redirected to the WELL Certification Document page successfully', function () {
    cy.contains('Documents').should('be.visible')
    cy.wait(3000)
})
//////////////////////////////////////Validating Document fields//////////////////////////////////////////////////////////////////////
Given('User navigate to the Document page', function () {
    cy.contains('Documents').should('be.visible')
    cy.wait(3000)
})
Then('User verifies Document fields', function () {
    cy.xpath(this.locator.uploadDocument).should('be.visible')
    // cy.xpath(this.locator.downloadDoc).should('be.visible')
    cy.xpath(this.locator.generalDoc).should('be.visible')
    cy.xpath(this.locator.searchDoc).should('be.visible')
    cy.xpath(this.locator.scorecardDoc).should('be.visible')
    cy.xpath(this.locator.performanceDoc).should('be.visible')
})
///////////////////////////////////////////Feature type////////////////////////////////////////////////////////////
Given('User navigate to the Upload Document page', function () {
    cy.xpath(this.locator.uploadDocument).click({ force: true })
})
When('User select the Feature type', function () {
    cy.xpath(this.locator.type).select("Feature", { force: true })
})
And('User select the Verification Method', function () {
    cy.xpath(this.locator.verficationDoc).type("On-site Photographs")
    cy.wait(2000)
    cy.xpath(this.locator.verficationDoc).type('{enter}')
    cy.wait(2000)
})
And('User select the Part', function () {
    cy.xpath(this.locator.partDoc).type("A02.2 Prohibit Outdoor Smoking")
    cy.wait(1000)
    cy.xpath(this.locator.partDoc).type('{enter}')
})
And('User Upload the Document', function () {
    cy.wait(1000)
    cy.xpath(this.locator.uploadFileDoc).attachFile(this.data.testDataPath)
})
And('User clicks on upload button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.uploadBtn).click({ force: true })
})
Then('User will be redirected to Scorecard List successfully', function () {
    cy.wait(3000)
    cy.xpath(this.locator.scorecardDoc).click({ force: true })
})

And('User verifies the type', function () {
    cy.contains("On-site Photographs").should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.scorecardDoc).click({ force: true })
})
And('User delete Feature type', function () {
    cy.xpath(this.locator.deletefeature).click()
    cy.wait(2000)
    cy.xpath(this.locator.deleteperformdoc).click()
    cy.wait(2000)
    cy.xpath(this.locator.scorecardDoc).click({ force: true })
})
////////////////////////////////Ongoing data report type type////////////////////////////////////////////////////////////////
When('User select the Ongoing data report type', function () {
    cy.xpath(this.locator.type).select(this.data.typeReport)
})
And('User select the Part in Ongoing data report type', function () {
    cy.wait(2000)
    cy.xpath(this.locator.verficationDoc).type("A01.5 Measure Air Parameters")
    cy.xpath(this.locator.verficationDoc).type('{enter}')
})
And('User select the Period in Ongoing data report type', function () {
    cy.xpath(this.locator.periodDoc).select(this.data.period)
})
And('User verifies the Period', function () {
    cy.wait(2000)
    cy.contains(this.data.period).should('be.visible')
})
And('User verifies the Ongoing data report type', function () {
    cy.xpath(this.locator.scorecardDoc).click({ force: true })
    cy.wait(2000)
   
})
And('User delete Ongoing data report type', function () {
    cy.xpath(this.locator.deletefeature).click()
    cy.xpath(this.locator.deleteperformdoc).click()
})
///////////////////////////////////Performance type/////////////////////////////////////////////////////////////
When('User select the Performance type', function () {
    cy.xpath(this.locator.type).select(this.data.typePerformance)
})
And('User select the Part in Performance type', function () {
    cy.xpath(this.locator.verficationDoc).type(this.data.airpart)
    cy.xpath(this.locator.verficationDoc).type('{enter}')
})
Then('User will be redirected to Performance List successfully', function () {
    cy.wait(2000)
    cy.xpath(this.locator.performanceDoc).click({force: true})
})
And('User verifies the type in Performance type', function () {
    cy.xpath(this.locator.performanveType).should('contain',"Performance Test")
    
})
And('User delete Performance type', function () {
    cy.xpath(this.locator.deleteperform).click()
    cy.xpath(this.locator.deleteperformdoc).click()
})
/////////////////General///////////////////////////////////////////////////////
When('User select the General type', function () {
    cy.xpath(this.locator.type).select(this.data.typeGeneral)
})
Then('User will be redirected to general List successfully', function () {
    cy.contains("Documents").should('be.visible')
})
And('User delete General type', function () {
    cy.xpath(this.locator.deletegenerallistdoc).click()
    cy.xpath(this.locator.deleteconfirmgenerallist).click()
})
////////////////legal///////////////////////////////////////////////////////
When('User select the Legal type', function () {
    cy.xpath(this.locator.type).select(this.data.typelegal)
})
And('User clicks on Upload Document page', function () {
    cy.wait(2000)
    cy.xpath(this.locator.uploadDocument).click({ force: true })
})
Then('User will be redirected to the general List successfully', function () {
    cy.contains("Documents").should('be.visible')
})
And('User delete Legal type', function () {
    cy.xpath(this.locator.deletegenerallistdoc).click()
    cy.xpath(this.locator.deleteconfirmgenerallist).click()
   
})
////////////////////////Document Upload for WELL V2 Project////////////////////////////////////////////////////
Given('User navigate to Document page by logging in to wellcertified', function () {
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
    })
})
And('User clicks on Upload Document button', function () {
    cy.wait(3000)
    cy.xpath(this.locator.uploadDocument).click({ force: true })
})