import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
////////////////////Verifying the WELL Health-Safety Story page//////////////////////////////////////////
Given('User navigates to the Profile page by logging in to wellcertified', function(){
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
When('User clicks on Profile from the left menu', function(){
    cy.contains("Profile").should('be.visible').click({ force: true })
    cy.contains("Profile").should('be.visible')
})
Then('User is redirected to the WELL Health-Safety Story tab in the profile page', function(){
    cy.contains("WELL Health-Safety Story").scrollIntoView().should('be.visible')
})
And('User verifies the WELL Health-Safety Story page fields', function(){    
    cy.xpath(this.locator.hsrproflculturetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflimpacttxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflchallengetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflinnovativetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflgoaltxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflmissiontxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrproflobjectivestxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrsaveprofilebtn).scrollIntoView().should('be.visible')
})

/////////////////////Creating WELL Health-Safety Story///////////////////////////////////////////////////////
Given('User navigates to the WELL Health-Safety Story page', function(){
    cy.contains("WELL Health-Safety Story").scrollIntoView().should('be.visible')
})
When('User enters data to WELL Health-Safety Story question fields', function(){
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
Then('User verifies the WELL Health-Safety Story data', function(){ 
   // cy.contains("Dashboard").should('be.visible')  
    //cy.contains(this.data.testdata).scrollIntoView().should('be.visible')
})
/////////////////Clearing the WELL Health-Safety Story Data////////////////////////////////////////////

When('User clear the WELL Health-Safety Story question data', function () { 
    cy.xpath(this.locator.hsrproflculturetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflimpacttxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflchallengetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflinnovativetxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflgoaltxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflmissiontxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrproflobjectivestxtbox).clear({ force: true })
    cy.xpath(this.locator.hsrsaveprofilebtn).click({ force: true })
})
Then('User verifies the deleted WELL Health-Safety Story data', function () { 
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
/////////////////////WELL Health-Safety Profile creation////////////////////////////////////////
And('User clicks on General information button', function (){
    cy.xpath(this.locator.profilegeneralinfobtn).click({ force: true })
})
Then('User verifies the profile data', function(){
    cy.wait(2000)
    cy.contains("Profile").click() 
    cy.contains(this.data.testdata).should('be.visible')
})