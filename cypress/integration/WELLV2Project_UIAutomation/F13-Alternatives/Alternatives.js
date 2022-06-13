
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})

/////////////////////////////Verify the Document page//////////////////////////////////////////

Given('User navigate to Alternatives page by logging in to wellcertified', function () {
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
    cy.wait(2000)
    cy.xpath(this.locator.alternatives).click({ force: true })
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
    cy.xpath(this.locator.submitAAPbtn).click({ force: true })
    cy.contains('Alternative Adherence Path').should('be.visible')

})
And('User select the feature', function (){
    cy.xpath(this.locator.featuredropdown).select(this.data.feature, { force: true })
})
And('User selects the Applicable part', function (){
    cy.xpath(this.locator.guidancechkbx1).click({ force: true })
})
And('User enter the Reason for Alternative Means and Methods field', function (){
    cy.xpath(this.locator.reasonforAlternative).type(this.data.ownerOrganization)
})
And('User enter the Proposed Alternative Means of Compliance field', function (){
    cy.wait(2000)
    cy.xpath(this.locator.ProposedAlternative).type(this.data.ownerOrganization)
})
And('User upload document for AAP', function (){
    cy.xpath(this.locator.alternativesuploadbtn).scrollIntoView()
    cy.xpath(this.locator.alternativesuploadbtn).attachFile(this.data.Uploadfile, { force: true })
})
And('User clicks on submit button', function (){
    cy.wait(4000)
    cy.xpath(this.locator.alternativeSubmit).click({ force: true }) 
})
Then('User will be redirected to Alternative List successfully', function (){
    cy.contains('Alternative Adherence Path Proposals (AAPs)').should('be.visible')
})
And('User verifies feature name', function (){
    cy.contains('A01 Air Quality').should('be.visible', { force: true })
})
And('User verifies status', function (){
    cy.contains('pending').should('be.visible', { force: true })
})
And('User verifies type', function (){
    cy.xpath(this.locator.alternativeType).invoke('text').then((alternativeType) => {
        expect(alternativeType.trim()).to.equal("aap")
    })
})
///////////////////////////////EEp////////////////////////////////////////////////////////////////////////////
Given('User navigates to Equivalency Proposals page', function (){
    cy.wait(2000)
    cy.xpath(this.locator.submitEPbtn).should('be.visible', { force: true })
    cy.contains('Equivalency Proposal').should('be.visible', { force: true })
})
When('User clicks on submit EP button and verfies the fields', function (){
    cy.wait(2000)
    cy.xpath(this.locator.submitEPbtn).click({ force: true })
   // cy.contains('Equivalency Proposal').should('be.visible')
   })

And('User select the feature for EP', function (){
    cy.xpath(this.locator.featureEpdropdown).select(this.data.feature, { force: true })
})
And('User selects the Applicable part for EP', function (){
    cy.xpath(this.locator.applicablePart).click({ force: true })
})
And('User enter the Reason for Equivalency Request', function (){
    cy.xpath(this.locator.featureEpdropdown).scrollIntoView()
    cy.xpath(this.locator.reasonforAlternative).type(this.data.ownerOrganization, { force: true })
})
And('User enter the Proposed Alternative Means of Compliance', function (){
    cy.xpath(this.locator.ProposedAlternative).type(this.data.ownerOrganization, { force: true })
})
And('User enter the Reason for Reason for Countries where Equivalency may be Applicable', function (){
    cy.xpath(this.locator.regionstext).type(this.data.ownerOrganization, { force: true })
})
And('User enter the Reason for Verification method within proposed equivalent', function (){
    cy.xpath(this.locator.VerificationmethodAlternaive).type(this.data.ownerOrganization, { force: true })
})
And('User enter the Reason for Similarities to WELL feature requirement', function (){
    cy.xpath(this.locator.featurerequirementAlternaive).type(this.data.ownerOrganization, { force: true })
})
And('User enter the Reason for Differences from WELL feature requirement', function (){
    cy.xpath(this.locator.featurerequirementAlternaive).type(this.data.ownerOrganization, { force: true })
})
And('User upload document for EP', function (){
    cy.wait(2000)
    cy.xpath(this.locator.alternativesuploadbtn).scrollIntoView()
    cy.xpath(this.locator.alternativesuploadbtn).attachFile(this.data.Uploadfile)
})
And('User verifies type for EP', function (){
   // cy.contains('ep').scrollIntoView().should('be.visible', { force: true })  
})
/////////////////////////////additional guidance page////////////////////////////////////////////////

Given('User navigates to additional guidance page', function (){
    cy.xpath(this.locator.additionalguidance).click({ force: true })
})
When('User clicks on Request guidance button and verfies the fields', function (){
    cy.wait(4000)
    cy.xpath(this.locator.requestguidancebtn).click({ force: true })
})
And('User select the feature for Request guidance', function (){
    cy.wait(4000)
    cy.xpath(this.locator.featureadditionalguidance).select(this.data.feature, { force: true })
})
And('User selects the Applicable part for Request guidance', function (){
    cy.xpath(this.locator.guidanceApplicablepart).click({ force: true })
})
And('User select the guidance on for the feature', function (){
    cy.xpath(this.locator.guidanceradiobtn).click({ force: true })
})
And('User select the threshold requirement', function (){
    cy.wait(2000)
    cy.xpath(this.locator.thresholdchkbx1).click({ force: true })
    cy.xpath(this.locator.thresholdchkbx2).click({ force: true })
})
And('User upload document for Request guidance', function (){
    cy.xpath(this.locator.alternativesuploadbtn).attachFile(this.data.Uploadfile)
})
And('User clicks on submit button', function (){
    cy.xpath(this.locator.alternativeSubmit).click({ force: true }) 
})
And('User add comments and attach file', function (){
    cy.wait(3000)
    cy.xpath(this.locator.commenttextbox).type(this.data.ownerOrganization)
    cy.xpath(this.locator.alternativesuploadbtn).attachFile(this.data.Uploadfile)
    
})
And('User clicks on comment button', function (){
    cy.wait(4000)
    cy.xpath(this.locator.commentbtn).click()
    
})
Then('User verify the added comments', function (){
    cy.wait(2000)
    cy.contains(this.data.ownerOrganization).should('be.visible')
    cy.xpath(this.locator.backtoticktbtn).click({ force: true })
    cy.contains('Threshold requirement for my unique space type(s) / occupant type(s)').should('be.visible')
    
})