import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////////Verifies the Support Page///////////////////////////////////////////////
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.xpath(this.locator.WellFaculty.WellFaculty).click({ force: true })
    cy.wait(2000)
})
When('User clicks on Resources tab', function () {
    cy.xpath(this.locator.WellFaculty.Resources).click({ force: true })
    cy.wait(2000)
})
Then('User redirects to the Resources Dashboard page', function () {
    cy.contains("Dashboard").should('be.visible')
})
And('User verifies fields on the Dashboard page', function () {
    cy.wait(3000) 
    cy.contains("Dashboard").should('be.visible')
    cy.contains("Instructional Resources").should('be.visible')
    cy.contains("Additional Resources").scrollIntoView().should('be.visible') 
     
})
And('User verifies card count for Instructional Resources', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(0).should('contain.text','Instructional Resource Guide')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(1).should('contain.text','WELL 101 Presentation')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(2).should('contain.text','WELL Strategies to support in the fight against COVID-19')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(3).should('contain.text','WELL Portfolio Presentation')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(4).should('contain.text','WELL Community Standard Workshop')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(5).should('contain.text','WELL Workshop - 4 Hours')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(6).should('contain.text','WELL v2: From Pilot to Graduation ')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(7).should('contain.text','WELL Health-Safety Rating')
})
And('User verifies card count for Additional Resources', function () {
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(8).should('contain.text','WELL project profiles')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(9).should('contain.text','WELL Tips')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(10).should('contain.text','WELL country briefs')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(11).should('contain.text','WELL X ESG Reporting Guide')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(12).should('contain.text','The Global adoption of WELL')
    cy.get(this.locator.WellFaculty.WellFacultyCards).eq(13).should('contain.text','WELL for specific industries')
    // cy.get(this.locator.WellFaculty.WellFacultyCards).eq(14).scrollIntoView().should('IWBI Special Report')
    // cy.get(this.locator.WellFaculty.WellFacultyCards).eq(15).scrollIntoView().should('IWBI Global Research Agenda: Health, Well-being and the Built Environment (GRA)')
    // cy.get(this.locator.WellFaculty.WellFacultyCards).eq(16).scrollIntoView().should('Research Digests')
    // cy.get(this.locator.WellFaculty.WellFacultyCards).eq(17).scrollIntoView().should('WELLographies')
    cy.xpath(this.locator.WellFaculty.IWBISpecial).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.IWBIGlobal).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.IWBIResearch).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellFaculty.IWBIwELL).scrollIntoView().should('be.visible')
})