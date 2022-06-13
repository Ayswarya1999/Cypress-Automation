import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////Verifying the WELL Performance Rating Story page//////////////////////////////////////////
Given('User navigates to the Profile page by logging in to wellcertified', function(){
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
When('User clicks on Profile from the left menu', function(){
    cy.contains("Profile").should('be.visible').click({ force: true })
    cy.contains("Profile").should('be.visible')
})
Then('User is redirected to the WELL Performance Rating Story tab in the profile page', function(){
    cy.contains("WELL Performance Rating Story").scrollIntoView().should('be.visible')
})
And('User verifies the WELL Performance Rating Story page fields', function(){    
    cy.xpath(this.locator.hsrproflculturetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflimpacttxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflchallengetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflinnovativetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflgoaltxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflmissiontxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflobjectivestxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrsaveprofilebtn).scrollIntoView().should('be.visible')
})

/////////////////////Creating WELL Performance Rating Story///////////////////////////////////////////////////////
Given('User navigates to the WELL Performance Rating Story page', function(){
    cy.contains("WELL Performance Rating Story").scrollIntoView().should('be.visible')
})
When('User enters data to WELL Performance Rating Story question fields', function(){
    cy.xpath(this.locator.hsrproflculturetxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflimpacttxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflchallengetxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflinnovativetxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflgoaltxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflmissiontxtbox).type(this.data.testdata, { force: true })
    cy.xpath(this.locator.hsrproflobjectivestxtbox).type(this.data.testdata, { force: true })       
})
And('User clicks on save profile button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.hsrsaveprofilebtn).click()
    cy.wait(2000)
   // cy.contains('Profile updated successfully.').should('be.visible')
})
Then('User verifies the WELL Performance Rating Story data', function(){ 
   // cy.contains("Dashboard").should('be.visible')  
    //cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})
/////////////////Clearing the WELL Health-Safety Story Data////////////////////////////////////////////

When('User clear the WELL Performance Rating Story question data', function () { 
    cy.xpath(this.locator.hsrproflculturetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflimpacttxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflchallengetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflinnovativetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflgoaltxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflmissiontxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflobjectivestxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrsaveprofilebtn).click({ force: true })
})
Then('User verifies the deleted WELL Performance Rating Story data', function () { 
    cy.contains(this.data.testdata).should('not.exist')  
})

////////////////////////////Verifying the General Information page/////////////////////////////////////////
Given('User navigates to the Profile page', function () {   
    cy.contains("Profile").should('be.visible').click({ force: true })
})
When('User clicks on General information tab in the profile page', function () {   
    cy.xpath(this.locator.profilegeneralinfobtn).click({ force: true })
})
Then('User is redirected to the general information tab in the profile page', function(){
    cy.contains("General Information").should('be.visible')    
})
And('User verifies the General information page fields', function(){
    cy.xpath(this.locator.aboutorgtextbox).should('be.visible')
    cy.contains("Upload a file").should('be.visible')
    cy.xpath(this.locator.hsrsaveprofilebtn).scrollIntoView().should('be.visible')   
})

/////////////////////Creating the General Information//////////////////////////////////////////////////////////
Given('User navigates to the general information page', function () { 
    cy.contains("Profile").click()  
    cy.contains("General Information").scrollIntoView().should('be.visible')
    
})
When('User enters data to organization field', function () {
    cy.wait(2000)
    cy.xpath(this.locator.aboutorgtextbox).click({ force: true }).type(this.data.testdata, { force: true })
})
And('User add Logo and Attached Primary Profile Images', function (){
    cy.contains("remove").click({ force: true })
    cy.xpath(this.locator.uploadproimgbtn).attachFile(this.data.testfile, { force: true })
    cy.wait(4000)
    cy.xpath(this.locator.uploadLogobtn).attachFile(this.data.testfile)   
})
Then('User verifies the general information data', function (){   
   // cy.contains(this.data.testdata).scrollIntoView().should('be.visible', { force: true })
})

///////////////////////Clearing the General Information Data////////////////////////////////////

When('User clear the organization data', function () { 
    cy.xpath(this.locator.aboutorgtextbox).clear({ force: true })   
})
And('User remove the uploaded files', function () { 
    cy.contains("remove").click({ force: true })
    cy.contains("remove").click({ force: true })
    cy.xpath(this.locator.hsrsaveprofilebtn).click({ force: true })
})
Then('User verifies the deleted general information data', function () { 
     // cy.contains(this.data.testdata).should('not.exist')
     // cy.contains("Upload a file").should('be.visible') 
})
/////////////////////WELL Performance Rating Profile creation////////////////////////////////////////
And('User clicks on General information button', function (){
    cy.xpath(this.locator.profilegeneralinfobtn).click({ force: true })
})
Then('User verifies the profile data', function(){
    cy.wait(2000)
    cy.contains("Profile").click() 
    cy.contains(this.data.testdata).should('be.visible')
})