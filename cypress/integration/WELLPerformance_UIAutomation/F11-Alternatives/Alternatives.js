import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////////////Verify the Document page//////////////////////////////////////////
Given('User navigate to Alternatives page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.enrollment.enrollmentStatus).should('contain', 'Registered')
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
    })
    cy.contains('Alternatives').should('be.visible').click({ force: true })
})
Then('User verifies the Alternatives page fields', function () {
    cy.contains('Alternatives').should('be.visible')
})
And('User verifies the Alternatives count list', function () {
    cy.xpath(this.locator.CountAlternativelist).invoke('text').then((CountAlternativelist) => {
        expect(CountAlternativelist.trim()).to.equal("0")
    })
})
/////////////////////////////////////aaP//////////////////////////////////////////////////////
Given('User navigates to Alternative Adherence Path page', function (){
    cy.contains('Alternatives').should('be.visible').click({ force: true })
})
When('User clicks on submit AAP button and verfies the fields', function (){
    cy.wait(2000)
    cy.xpath(this.locator.hsrsubmitAAPbtn).click({ force: true })
    cy.contains('Alternative Adherence Path').should('be.visible')
})
And('User select the feature', function (){
    cy.xpath(this.locator.hsrfeaturedropdown).select(this.data.wprfeature, { force: true })
})
And('User enter the Reason for Alternative Means and Methods field', function (){
    cy.xpath(this.locator.hsrreasonforAlternative).type(this.data.testdata)
})
And('User enter the Proposed Alternative Means of Compliance field', function (){
    cy.wait(2000)
    cy.xpath(this.locator.hsrProposedAlternative).type(this.data.testdata)
})
And('User upload document for AAP', function (){
    cy.xpath(this.locator.hsralternativesuploadbtn).scrollIntoView()
    cy.xpath(this.locator.hsralternativesuploadbtn).attachFile(this.data.Uploadfile, { force: true })
})
And('User clicks on submit button', function (){
    cy.wait(4000)
    cy.xpath(this.locator.hsralternativeSubmit).click({ force: true }) 
})
Then('User will be redirected to Alternative List successfully', function (){
    cy.contains('Alternative Adherence Path Proposals (AAPs)').should('be.visible')
})
And('User verifies feature name', function (){
    cy.contains('PA1 Meet Thresholds for Particulate Matter').should('be.visible', { force: true })
})
And('User verifies status', function (){
    cy.contains('pending').should('be.visible', { force: true })
})
And('User verifies type', function (){
    cy.xpath(this.locator.hsralternativeType).invoke('text').then((alternativeType) => {
        expect(alternativeType.trim()).to.equal("aap")
    })
})
///////////////////////////////EEp////////////////////////////////////////////////////////////////////////////
Given('User navigates to Equivalency Proposals page', function (){
    cy.wait(2000)
    cy.xpath(this.locator.hsrsubmitEPbtn).should('be.visible', { force: true })
    cy.contains('Equivalency Proposal').should('be.visible', { force: true })
})
When('User clicks on submit EP button and verfies the fields', function (){
    cy.wait(2000)
    cy.xpath(this.locator.hsrsubmitEPbtn).click({ force: true })
   })
And('User select the feature for EP', function (){
    cy.xpath(this.locator.hsrfeaturedropdown).select(this.data.wprfeature, { force: true })
})
And('User enter the Differences from WELL feature requirement', function (){
    cy.xpath(this.locator.hsrfeaturedropdown).scrollIntoView()
    cy.xpath(this.locator.hsrDifferencesfeaturerequirementAlternaive).type(this.data.testdata, { force: true })
})
And('User enter the Similarities to WELL feature requirement', function (){
    cy.xpath(this.locator.hsrfeaturerequirementAlternaive).type(this.data.testdata, { force: true })
})
And('User enter the Verification method within proposed equivalent', function (){
    cy.xpath(this.locator.hsrVerificationmethodAlternaive).type(this.data.testdata, { force: true })
})
And('User enter Regions and Countries where Equivalency may be Applicable', function (){
    cy.xpath(this.locator.hsrregionstext).type(this.data.testdata, { force: true })
})
And('User enter Proposed Alternative Means of Compliance', function (){
    cy.xpath(this.locator.hsrProposedAlternative).type(this.data.testdata, { force: true })
})
And('User enter Reason for Equivalency Request', function (){
    cy.xpath(this.locator.hsrreasonforAlternative).type(this.data.testdata, { force: true })
})
And('User upload document for EP', function (){
    cy.wait(2000)
    cy.xpath(this.locator.hsralternativesuploadbtn).scrollIntoView()
    cy.xpath(this.locator.hsralternativesuploadbtn).attachFile(this.data.Uploadfile)
})
And('User verifies type for EP', function (){
   // cy.contains('ep').scrollIntoView().should('be.visible', { force: true })  
})
