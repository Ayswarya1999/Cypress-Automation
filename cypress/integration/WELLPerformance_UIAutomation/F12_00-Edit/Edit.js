import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
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
})
When('User clicks on Edit tab', function () {
    cy.wait(2000)
    cy.contains('Edit').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the WELL Performance Rating Edit page successfully', function () {
    cy.contains('Edit Project').should('be.visible')
    cy.contains('Organization Information').should('be.visible')
    cy.contains('Project Information').should('be.visible')
})
//////////////////////////////////////////////////////////////////////////////////////////////////
Given('User is on Edit Project page by logging in to wellcertified', function () {
    cy.contains('Edit Project').should('be.visible')
})
And('User verifies fields in the Edit Project page', function () {
    cy.contains('Project Information').should('be.visible')
    cy.xpath(this.locator.editProjectname).should('be.visible')
    cy.xpath(this.locator.editGrossareasqft).should('be.visible')
    cy.xpath(this.locator.editGrossareasqm).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editnumoflocations).scrollIntoView().should('be.visible')
    cy.contains('Owner Information').scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editownerorganization).should('be.visible')
    cy.xpath(this.locator.editownername).should('be.visible')
    cy.xpath(this.locator.editowneremail).should('be.visible')
    cy.xpath(this.locator.editownerphone).should('be.visible')
    cy.xpath(this.locator.editindustry).should('be.visible')
    cy.xpath(this.locator.editqrgwebsite).should('be.visible')
    cy.xpath(this.locator.editdorgoverview).should('be.visible')
    cy.contains('Owner address').should('be.visible')
    cy.xpath(this.locator.editcountry).should('be.visible')
    cy.xpath(this.locator.editstreet).should('be.visible')
    cy.xpath(this.locator.editcity).should('be.visible')
    cy.xpath(this.locator.editpostalcode).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editEstdate).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editscopendpremises).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editgoalsndvision).should('be.visible')
    cy.contains('Directory Listing').scrollIntoView().should('be.visible')
    cy.xpath(this.locator.editYes).should('be.visible')
    cy.xpath(this.locator.editNo).should('be.visible')
    cy.xpath(this.locator.editsavechangesbtn).scrollIntoView().should('be.visible')
    cy.wait(2000)
})
When('User update project Information fields', function () {
    cy.xpath(this.locator.editnumoflocations).click({ force: true }).clear().type(this.data.editnumoflocations)
})
And('User update Owner Information fields', function () {
    cy.xpath(this.locator.enrollorg).click({ force: true })
    cy.xpath(this.locator.enrollorg).type(this.data.ownerOrganization)
    cy.xpath(this.locator.enrollorg).type('{enter}')
    cy.xpath(this.locator.editownerphone).click({ force: true }).clear().type(this.data.editownerphone)
    cy.xpath(this.locator.editdorgoverview).click({ force: true }).clear().type(this.data.editdorgoverview)  
})
And('User update WELL Performance Rating scope & premises, WELL Performance Rating goals and vision fields', function () {
    cy.xpath(this.locator.editscopendpremises).click({ force: true }).clear().type(this.data.editscopendpremises)
    cy.xpath(this.locator.editgoalsndvision).click({ force: true }).clear().type(this.data.editgoalsndvision)  
})
And('User clicks on Save Changes button', function () {
    cy.xpath(this.locator.editsavechangesbtn).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the WELL Performance Rating Dashboard page successfully', function () {
    //cy.contains('Shared workspaces updated successfully!').should('be.visible')
    //cy.contains('Dashboard').should('be.visible')
})
