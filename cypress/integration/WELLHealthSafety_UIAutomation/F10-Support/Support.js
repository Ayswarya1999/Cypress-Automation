import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////////Verifies the Support Page///////////////////////////////////////////////
Given('User navigate to the Support page by logging in to wellcertified', function () {
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
        cy.xpath(this.locator.hsrstatuscompare).invoke('text').then((status) => {
            expect(status.trim()).to.equal("Registered")
        })
        cy.contains(this.projectid.WELLHealthSafety).click({ force: true })
       })
        cy.wait(5000)    
})
When('User clicks on Support from the left menu', function () {
    cy.contains('Support').click({ force: true })
})
Then('User will be redirected to Support page successfully', function () {
    cy.contains('Support').should('be.visible')
})
And('User verifies the your WELL Health Safety Support page fields', function () {
    cy.contains('Getting Started').should('be.visible')
})
//////////////////////////////////Verifies the support cards page//////////////////////////////////////////////////////////
Given('User navigate to the support cards page', function () {
    cy.contains('Support').should('be.visible')
 })
Then('User verifies card count for Getting Started', function () {
     cy.get(this.locator.resourceCard).eq(0).should('contain.text','WELL Health-Safety Rating Tutorial Series')
     cy.get(this.locator.resourceCard).eq(1).should('contain.text','Overview: the WELL Health-Safety Rating Process')
     cy.get(this.locator.resourceCard).eq(2).should('contain.text','Deep Dive: Exploring the WELL Health-Safety Rating Features')
     cy.get(this.locator.resourceCard).eq(3).should('contain.text','How to Create and Upload WELL Documentation')
     cy.get(this.locator.resourceCard).eq(4).should('contain.text','The WELL Health-Safety Rating Review Process')
     cy.get(this.locator.resourceCard).eq(5).should('contain.text','How to Promote your WELL Health-Safety Rating')
 })
And('User verifies card count for Technical tools', function () {
    cy.get(this.locator.resourceCard).eq(6).should('contain.text','WELL Ratings Guidebook')
     cy.get(this.locator.resourceCard).eq(7).should('contain.text','Strategies from the WELL Building Standard to Support in the Fight Against COVID-19')
     cy.get(this.locator.resourceCard).eq(8).should('contain.text','Letter of Assurance Template')
     cy.get(this.locator.resourceCard).eq(9).should('contain.text','WELL Documentation Annotation Guide')
     cy.get(this.locator.resourceCard).eq(10).should('contain.text','Interiors + Base Buildings: Applying WELL Certification in a WELL Certified Base Building')
     cy.get(this.locator.resourceCard).eq(11).should('contain.text','WELL Health-Safety Rating Documentation 101')
     cy.get(this.locator.resourceCard).eq(12).should('contain.text','Sample Documentation')
     cy.get(this.locator.resourceCard).eq(13).should('contain.text','Multiple Locations Document Sharing Form')
   })
And('User verifies card count for Helpful articles', function () {
    cy.get(this.locator.resourceCard).eq(14).should('contain.text','Sleeping Giants: Awakening Building Water Systems')
    cy.get(this.locator.resourceCard).eq(15).should('contain.text','Buildings Will Be Our First Line of Defense After COVID-19')
    cy.get(this.locator.resourceCard).eq(16).should('contain.text','Are Antimicrobial additives the Answer for Stopping the Spread of COVID-19')
    cy.get(this.locator.resourceCard).eq(17).should('contain.text','How Our Envirponment Can Help Minimize Stress and Bolster Immunity')
    cy.get(this.locator.resourceCard).eq(18).should('contain.text','Supporting Mental Health and Well-being During COVID-19')
    cy.get(this.locator.resourceCard).eq(19).should('contain.text','Four Tips to Step Up Your Teleconferencing Game')
    })