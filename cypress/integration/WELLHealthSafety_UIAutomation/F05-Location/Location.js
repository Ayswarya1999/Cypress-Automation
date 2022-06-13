import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Location page by logging in to wellcertified', function() {
    Login.loginpage()
    cy.fixture('HSRId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellhealthsafety).click({ force: true })
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.xpath(this.locator.idSearch).type(this.projectid.WELLHealthSafety)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WELLHealthSafety)
            })
        cy.wait(2000)
        cy.xpath(this.locator.hsrstatuscompare).invoke('text').then((status)=>{
            expect(status.trim()).to.equal("Registered")
            })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
        cy.wait(2000)
        })
    })
When('User clicks on Location button', function() {
    cy.contains("Locations").click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to Location page', function() {
    cy.contains('Locations').should('be.visible')
})
And('User verifies the Location fields', function() {
    cy.xpath(this.locator.refresh).should('be.visible')
    cy.xpath(this.locator.downloadlocation).should('be.visible')
    cy.xpath(this.locator.filter).should('be.visible')
})
///////////////////////////////////validate Single Location//////////////////////////////////
Given('User is on Location page', function() {
    cy.contains('Locations').should('be.visible')
})
When('User clicks on Add Location button and verifies the fields', function() {
    cy.contains('Add').should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.contains(' Add location').should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.contains('Add a location').should('be.visible')
    cy.xpath(this.locator.locationname).should('be.visible')
    cy.xpath(this.locator.locationarea).should('be.visible')
    cy.xpath(this.locator.areatype).should('be.visible')
    cy.xpath(this.locator.spacetype).should('be.visible')
    cy.xpath(this.locator.ownershiptype).should('be.visible')
    cy.xpath(this.locator.CRegion).should('be.visible')
    cy.xpath(this.locator.SAddress).should('be.visible')
    cy.xpath(this.locator.city).should('be.visible')
    cy.xpath(this.locator.postalcode).should('be.visible')
})
And('User clicks on submit button without entering the mandatory fields and verifies error message', function() {
    cy.xpath(this.locator.submit).click({ force: true })
    cy.contains('Location Name* is required.').should('be.visible')
    cy.contains('Location Area* is required.').should('be.visible')
    cy.wait(2000)
}) 
And('User enters data to Location Name, Location Area, Area Type, Space Type and Ownership Type fields', function() {
    cy.xpath(this.locator.locationname).type(this.data.locationname, { force: true })
    cy.xpath(this.locator.locationarea).type(this.data.locationarea, { force: true })
    cy.xpath(this.locator.areatype).select(this.data.areatype)
    cy.xpath(this.locator.spacetype).select(this.data.spacetype)
    cy.xpath(this.locator.ownershiptype).select(this.data.ownershiptype)
})
And('User enters data to Country, Street address, City and Postal Code fields', function() {
    cy.xpath(this.locator.CRegion).select(this.data.countryName)
    cy.wait(2000)
    cy.xpath(this.locator.State).select(this.data.stateName)
    cy.xpath(this.locator.SAddress).type(this.data.streetName, { force: true })
    cy.xpath(this.locator.city).type(this.data.cityName, { force: true })
    cy.xpath(this.locator.postalcode).type(this.data.postalCode, { force: true })
})
And('User selects Is this location public option', function() {
    cy.xpath(this.locator.publicloc).check({ force: true })
})
And('User clicks on submit button', function() {
    cy.xpath(this.locator.submit).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to project Location list page successfully', function() {
    cy.contains('Locations').should('be.visible')
})
And('User verifies project Location in list', function() {
    cy.contains('Pending').should('be.visible')
})
//////////////////////////////////validate Multiple Location/////////////////////////////
And('User clicks on Import button', function() {
    cy.xpath(this.locator.import).click({ force: true })
})
Then('User will be redirected to Portfolio Locations Import page', function() {
    cy.contains('Portfolio Locations Import').should('be.visible')
})
And('User verifies the Create new locations page', function() {
    cy.contains('Create new locations').should('be.visible')
})
And('User verifies th Update existing locations page', function() {
    cy.contains('Update existing locations').should('be.visible')
})
And('User upload document for Create new locations', function() {
    cy.xpath(this.locator.uploadfile).attachFile(this.data.locationsfile)
})
And('User clicks on Next button', function() {
    cy.wait(2000)
    cy.xpath(this.locator.next).click({ force: true })
    cy.wait(4000)
})
And('User redirects to Match columns from your file to project fields', function() {
    cy.contains('Match columns from your file to project fields').should('be.visible')
})
And ('User clicks on ckeckbox', function() {
    cy.xpath(this.locator.locCheckbox).check({ force: true })
    cy.wait(2000) 
})
And('User redirects to Validation page',  function() {
    cy.contains('Validation summary for your import').should('be.visible')
})
And('User verifies the Validation page fields', function() {
    cy.get(".min-w-full.divide-y.divide-primary-200 tr").should('have.length', 11)
    })

And('User clicks on Finish Import button', function() {
    cy.xpath(this.locator.finishimport).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.close).click({ force: true })
})
And('User verifies the Pagination', function(){ 
    cy.wait(4000)
    cy.xpath(this.locator.locpaginationcount).invoke('text').then((status)=>{
        expect(status).to.equal('11')
        })
})
And('User verifies Filters option', function() {
    cy.xpath(this.locator.filters).click({ force: true })
    cy.xpath(this.locator.checkboxbtn).check({ force: true })
    cy.xpath(this.locator.apply).click({ force: true })
})
/////////////////////////////subset verification//////////////////////////////////////////////////////
When('User clicks Subset button in the Location page', function() {
    cy.xpath(this.locator.subsetbtn).click({ force: true })
})
Then('User will redirects to the Subset page', function() {
    cy.contains("Subsets are an efficiency tool to help you manage your portfolio.").should('be.visible')
})
And('User verifies the Subset page fields', function() {
    cy.contains("Subsets make it easier to attach scorecard templates, assign documents or appoint team members with specific groups of locations. Subsets function similarly to a tag or filter, but have added settings you can select to ensure they display exactly when you want them to.").should('be.visible')
    cy.contains("We recommend you start with the broadest categories that are useful, those that share similarities which are important enough that their approach and strategy may differ significantly. Most organisations will find between 1-5 subsets works best Larger portfolios may see benefit in exploring 5-10 subsets.").should('be.visible')
    cy.contains("Currently your WELL Health-safety is not utilizing any subsets. Ready to start?").should('be.visible')
})
