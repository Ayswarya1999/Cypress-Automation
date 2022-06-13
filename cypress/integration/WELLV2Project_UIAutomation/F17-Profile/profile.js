import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////VerifyingtheGeneralInformationpage///////////////////
Given('User navigates to the Profile page by logging in to wellcertified', function () {   
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.wait(2000)
        cy.reload()
        cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
            })
        cy.wait(2000)
        cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
            expect(status).to.equal("Registered")
            })
        cy.contains(this.projectid.WellV2Project).click({ force: true })
       })
        cy.wait(5000)
})
When('User clicks on Profile from the left menu', function(){
    cy.contains("Profile").should('be.visible').click({ force: true })
    cy.contains("Profile").should('be.visible')
})
Then('User is redirected to the general information tab in the profile page', function(){
    cy.contains("General Information").should('be.visible')    
})
And('User verifies the General information page fields', function(){
    cy.xpath(this.locator.projectBio).should('be.visible')
    cy.contains("Upload a file").should('be.visible')
    cy.xpath(this.locator.saveprofilebtn).scrollIntoView().should('be.visible')   
})

////////////CreatingtheGeneralInformation//////////////
Given('User navigates to the general information page', function () { 
    cy.contains("Profile").click()  
    cy.contains("General Information").scrollIntoView().should('be.visible')
    
})
When('User enters data to Project Bio field', function () {
    cy.wait(2000)
    cy.xpath(this.locator.projectBio).click({ force: true }).type(this.data.profileText, { force: true })
})
And('User add Logo and Attached Primary Profile Images', function (){
    cy.xpath(this.locator.uploadprimaryprofilebtn2).attachFile(this.data.profilefile, { force: true })
    cy.wait(3000)
    cy.xpath(this.locator.uploadprimaryprofilebtn).attachFile(this.data.profilefile, { force: true })
    cy.wait(4000)
    cy.xpath(this.locator.uploadLogobtn).attachFile(this.data.profilefile)   
})
And('User clicks on save profile button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.saveprofilebtn).click()
    cy.contains('Updated Profile!').should('be.visible')
})
Then('User verifies the general information data', function (){   
    cy.contains(this.data.profileText).scrollIntoView().should('be.visible', { force: true })
})

///////////////////////ClearingtheGeneralInformationData///////////

When('User clear the Project Bio data', function () { 
    cy.xpath(this.locator.projectBio).clear({ force: true })   
})
And('User remove the uploaded files', function () { 
    cy.xpath(this.locator.profileImgDelbtn).click({ force: true })
    cy.contains("remove").click({ force: true })
    cy.contains("remove").click({ force: true })
    cy.xpath(this.locator.saveprofilebtn).click({ force: true })

})
Then('User verifies the deleted general information data', function () { 
      cy.contains(this.data.profileText).should('not.exist')
      cy.contains("Upload a file").should('be.visible') 

})

/////////VerifyingtheYourWELLCertificationStorypage/////////////////
Given('User navigates to the Profile page', function(){
    cy.contains("Profile").should('be.visible')
})
When('User clicks on Your WELL Certification Story button', function(){
    cy.xpath(this.locator.wellcertificationstorybtn).click({ force: true })
    cy.contains("Your WELL Certification Story").scrollIntoView().should('be.visible')
})
Then('User verifies the your WELL Certification story page fields', function(){
    cy.xpath(this.locator.proflculturetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflmetricstxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflimpacttxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflchallengetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflinnovativetxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflgoaltxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflmissiontxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.proflobjectivestxtbox).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.saveprofilebtn).scrollIntoView().should('be.visible')
})

////////////CreatingYourWELLCertificationstory///////////
Given('User navigates to the Your WELL Certification story page', function(){
    cy.xpath(this.locator.wellcertificationstorybtn).click({ force: true })
    cy.contains("Your WELL Certification Story").scrollIntoView().should('be.visible')
})
When('User enters data to WELL Certification Story question fields', function(){
    cy.xpath(this.locator.proflculturetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflmetricstxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflimpacttxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflchallengetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflinnovativetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflgoaltxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflmissiontxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflobjectivestxtbox).type(this.data.profileText, { force: true })       
})
Then('User verifies the WELL Certification story data', function(){
    
    cy.xpath(this.locator.wellcertificationstorybtn).click({ force: true })
    cy.contains(this.data.profileText).scrollIntoView().should('be.visible')
})
/////////////////ClearingtheWELLCertificationStoryData//////////////////////

When('User clear the WELL Certification Story question data', function () { 
    cy.xpath(this.locator.proflculturetxtbox).clear({ force: true })
    cy.xpath(this.locator.proflmetricstxtbox).clear({ force: true })
    cy.xpath(this.locator.proflimpacttxtbox).clear({ force: true })
    cy.xpath(this.locator.proflchallengetxtbox).clear({ force: true })
    cy.xpath(this.locator.proflinnovativetxtbox).clear({ force: true })
    cy.xpath(this.locator.proflgoaltxtbox).clear({ force: true })
    cy.xpath(this.locator.proflmissiontxtbox).clear({ force: true })
    cy.xpath(this.locator.proflobjectivestxtbox).clear({ force: true })
    cy.xpath(this.locator.saveprofilebtn).click({ force: true })
})
Then('User verifies the deleted WELL Certification Story data', function () { 
    cy.contains(this.data.profileText).should('not.exist')  
})

//////////////////////WellcertificationProjectProfilecreation///////////////////////////

And('User enters data to Project Bio field', function () {
    cy.wait(2000)
    cy.xpath(this.locator.projectBio).type(this.data.profileText, { force: true })
})
And('User add Logo and Attached Primary Profile Images', function (){
    cy.xpath(this.locator.uploadprimaryprofilebtn2).attachFile(this.data.profilefile, { force: true })
    cy.wait(3000)
    cy.xpath(this.locator.uploadprimaryprofilebtn).attachFile(this.data.profilefile, { force: true })
    cy.wait(4000)
    cy.xpath(this.locator.uploadLogobtn).attachFile(this.data.profilefile)   
})
And('User clicks on save profile button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.saveprofilebtn).click()
    cy.contains('Updated Profile!').should('be.visible')
})
And('User verifies the profile data', function (){   
    cy.reload()
    cy.wait(5000)
    cy.contains(this.data.profileText).should('be.visible', { force: true })
})
And('User click on Your WELL Certification Story button', function (){
    cy.xpath(this.locator.wellcertificationstorybtn).click({ force: true })
})
And('User enters data to WELL Certification Story question fields', function(){
    cy.xpath(this.locator.proflculturetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflmetricstxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflimpacttxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflchallengetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflinnovativetxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflgoaltxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflmissiontxtbox).type(this.data.profileText, { force: true })
    cy.xpath(this.locator.proflobjectivestxtbox).type(this.data.profileText, { force: true })        
})
Then('User verifies the added data', function(){
    cy.reload()
    cy.wait(5000)
    cy.xpath(this.locator.wellcertificationstorybtn).click({ force: true })
    cy.contains(this.data.profileText).should('be.visible')
})