import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
    this.projectid = projectid
    cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
    cy.xpath(this.locator.id).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
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
    cy.contains('Edit').should('be.visible')    
       })
    })       
When('User clicks on Edit tab', function () {
    cy.wait(2000)
    cy.contains('Edit').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the WELL Certification Edit page successfully', function () {
    cy.contains('Project Information').should('be.visible')
    cy.contains('Owner Information').should('be.visible')
    cy.contains('Address').should('be.visible')    
})
//////////////////Project Information fields for V2 Project//////////////////////////
Given('User navigate to the Project Information page by logging in to wellcertified', function () {
    cy.contains('Project Information').click({ force: true })
    cy.wait(2000)
})
When('User clicks on Project Information button', function () {
    cy.contains('Project Information').should('be.visible')
    cy.wait(2000)
})
And('User verifies the Project Information fields', function () {
    cy.xpath(this.locator.EditprojectName).should('be.visible')
    cy.xpath(this.locator.EditprojectArea).should('be.visible')
    cy.contains('Which of the following space types does your project contain?').should('be.visible')
    cy.contains('How will your space be ventilated?').should('be.visible')
    cy.contains('Are you planning to undergo construction or renovation?').scrollIntoView().should('be.visible')
    cy.contains('Target certification level').should('be.visible')
    cy.xpath(this.locator.EditOccupants).should('be.visible')
    cy.xpath(this.locator.EditAnticdate).should('be.visible')
    cy.xpath(this.locator.EditEstidate).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.EditPrecertification).scrollIntoView().should('be.visible')
    cy.contains('Other certifications being pursued').should('be.visible')
    cy.xpath(this.locator.OthercertificationId).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.ProjectScope).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.WellProjectgoals).should('be.visible')
    cy.contains('Is this a public project?').should('be.visible')

})  
And('User updates the project informations', function () {
    cy.xpath(this.locator.OthercertificationId).click({ force: true }).clear().type(this.data.OthercertificationId) 
    cy.xpath(this.locator.ProjectScope).click({ force: true }).clear().type(this.data.projectscope) 
    cy.xpath(this.locator.WellProjectgoals).click({ force: true }).clear().type(this.data.WellProjectgoals, { force: true })
    
})

And('User clicks on Save Changes button', function () {
   cy.xpath(this.locator.EditSavebtn).click({ force: true })
    
})
 Then('User will be redirected to the WELL Dashboard page successfully', function () {
    cy.contains('Fields updated successfully!').should('be.visible')
    cy.wait(2000)
   
})

///////////////////Verifying Updated Project Information/////////////////////////////
Then('User verifies the updated project informations', function () {
    cy.xpath(this.locator.OthercertificationId).invoke('val').then((Id)=>{
        expect(Id).to.equal(this.data.OthercertificationId)
        })
        cy.xpath(this.locator.ProjectScope).invoke('val').then((scope)=>{
            expect(scope).to.equal(this.data.projectscope)
            })
            cy.xpath(this.locator.WellProjectgoals).invoke('val').then((goal)=>{
                expect(goal).to.equal(this.data.WellProjectgoals)
                })
   
})

///////////////////Owner Information fields for V2 Project//////////////////////////
Given('User navigate to the Owner Information page', function () {
    cy.contains('Owner Information').should('be.visible')
     cy.wait(2000)
     
    })
And('User clicks on Owner Information button', function () {
   cy.xpath(this.locator.ownerInformationbtn).click({ force: true })
    cy.wait(2000)
    
   })
And('User verifies the Owner Information fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.ownerOrganization).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.ownerName).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.ownerEmail).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.ownerphone).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.industry).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.organizationwebsite).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.organizationOverview).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.locationCountry).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.locationStreet).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.locationCity).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.locationPostalcode).scrollIntoView().should('be.visible')
    })
And('User updates the Owner Information', function () {
    cy.wait(2000)
    cy.xpath(this.locator.ownerName).click({ force: true }).clear().type(this.data.EditName)
    cy.wait(2000)
    cy.xpath(this.locator.ownerphone).click({ force: true }).clear().type(this.data.EditPhone)
    cy.xpath(this.locator.organizationOverview).click({ force: true }).clear().type(this.data.EditorgOverview)
    })
/////////////////Verifying Updated Owner Information///////////////////////////

Then('User verifies the updated Owner Information', function () {
    cy.xpath(this.locator.ownerName).invoke('val').then((name)=>{
        expect(name).to.equal(this.data.EditName)
        })
        cy.xpath(this.locator.ownerphone).invoke('val').then((phone)=>{
            expect(phone).to.equal(this.data.EditPhone)
            })
            cy.xpath(this.locator.organizationOverview).invoke('val').then((overview)=>{
                expect(overview).to.equal(this.data.EditorgOverview)
                })
   
})

/////////////////////Address fields for V2 Project/////////////////////////////
Given('User navigate to the Address page by logging in to wellcertified', function () {
    cy.contains('Address').should('be.visible')
     cy.wait(2000)    
})
And('User clicks on Address button', function () {
    cy.xpath(this.locator.AddressBtn).click({ force: true })    
})
And('User verifies the project Address fields', function () {
    cy.xpath(this.locator.locationCountry).should('be.visible')
    cy.xpath(this.locator.locationStreet).should('be.visible')
    cy.xpath(this.locator.locationCity).should('be.visible')
    cy.xpath(this.locator.locationPostalcode).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.AddBillingName).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.AddBillingorg).should('be.visible')
    cy.xpath(this.locator.Billingcountry).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.BillingStreet).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.BillingCity).should('be.visible')
    cy.xpath(this.locator.BillingPostalcode).scrollIntoView().should('be.visible') 
})
And('User updates the project Address fields', function () {
    cy.xpath(this.locator.locationStreet).click({ force: true }).clear().type(this.data.EditStreet)
    cy.xpath(this.locator.AddBillingName).click({ force: true }).clear().type(this.data.EditBillingName)
    cy.xpath(this.locator.BillingStreet).click({ force: true }).clear().type(this.data.EditBillingStreet)
})
///////////////////Verifying Updated Address fields////////////////////////////////

Then('User verifies the updated Address fields', function () {
    cy.wait(3000)
    cy.xpath(this.locator.locationStreet).invoke('val').then((street)=>{
        expect(street).to.equal(this.data.EditStreet)
        })
        cy.xpath(this.locator.AddBillingName).invoke('val').then((name)=>{
            expect(name).to.equal(this.data.EditBillingName)
            })
            cy.xpath(this.locator.BillingStreet).invoke('val').then((bstreet)=>{
                expect(bstreet).to.equal(this.data.EditBillingStreet)
                })
   
})
///////////////////Edit Functionalities for V2 Project///////////////////////////////////////
And('User clicks on Edit button from the left pannel', function () {
    cy.wait(3000)
    cy.contains('Edit').should('be.visible').click({ force: true })
    cy.wait(3000)
})
Then('User will be redirected to WELL Dashboard page successfully', function () {
    cy.contains('Dashboard').should('be.visible')
})
