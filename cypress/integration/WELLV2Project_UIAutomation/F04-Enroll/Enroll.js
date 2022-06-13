import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
//////////////////////////////////////ValidatingProjectOwnerpage/////////////////////////////
Given('User navigates to the Project Owner page by clicking Enroll button from the project dashboard by logging in to the wellcertified', function(){
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
    this.projectid = projectid
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.xpath(this.locator.id).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
        })
    cy.wait(2000)
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.WellV2Project).click({ force: true })
   })
    cy.contains('Enroll').should('be.visible')
    cy.contains(this.data.enRoll).click({ force: true })
})
And('User verifies the project owner page fields', function(){
    
    cy.xpath(this.locator.ownerOrganization).should('be.visible')
    cy.xpath(this.locator.ownerName).should('be.visible')
    cy.xpath(this.locator.ownerEmail).should('be.visible')
    cy.xpath(this.locator.ownerphone).should('be.visible')
    cy.xpath(this.locator.industry).should('be.visible')
    cy.xpath(this.locator.organizationwebsite).should('be.visible')
    cy.xpath(this.locator.organizationOverview).should('be.visible')
    cy.xpath(this.locator.constructionOrrenovation).should('be.visible')
    cy.xpath(this.locator.certificationpursued).should('be.visible', { force: true })
    cy.xpath(this.locator.docsubEstidate).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.docsubAnticdate).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.marketsectors).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.projectOwnerContinuebtn).scrollIntoView().should('be.visible')  
    
})
When('User clicks on continue button without entering the mandatory fields for project owner', function(){
    cy.xpath(this.locator.projectOwnerContinuebtn).click()
    
})
Then('User verifies the error message for mandatory fields for project owner', function(){
    cy.contains("Organization is required.").scrollIntoView().should('be.visible')   
    cy.contains("Owner name* is required.").scrollIntoView().should('be.visible')
    cy.contains("Owner email* is required.").scrollIntoView().should('be.visible')
    cy.contains("Industry* is required.").scrollIntoView().should('be.visible')
    cy.contains("Are you planning to undergo construction or renovation?* is required.").should('be.visible', { force: true })
    cy.contains("Estimated date of document submission* is required.").should('be.visible', { force: true })
    cy.contains("Anticipated date of construction completion* is required.").should('be.visible', { force: true })

})

//////////////////////////////////////CreatingProjectOwner//////////////////////////////////

Given('User navigate to Project Owner form on the enrollment page', function(){
   // cy.contains('Project Owner').should('be.visible')
})
When('User enters data to Owner organization, Owner name, Owner email, Owner phone, Industry, Organization website and Organization Overview fields', function(){
    cy.xpath(this.locator.ownerOrganization).click({ force: true })
    cy.xpath(this.locator.ownerOrganization).type(this.data.ownerOrganization)
    cy.wait(2000)
    cy.xpath(this.locator.ownerOrganization).type('{enter}')
    cy.xpath(this.locator.ownerName).click({ force: true })
    cy.xpath(this.locator.ownerName).type(this.data.ownerName)
    cy.xpath(this.locator.ownerEmail).click({ force: true })
    cy.xpath(this.locator.ownerEmail).type(this.data.ownerEmail)
    cy.xpath(this.locator.ownerphone).click({ force: true })
    cy.xpath(this.locator.ownerphone).type(this.data.ownerphone)
    cy.xpath(this.locator.industry).select(this.data.industry, { force: true })
    cy.xpath(this.locator.organizationwebsite).click({ force: true })
    cy.xpath(this.locator.organizationwebsite).type(this.data.organizationwebsite)
    cy.xpath(this.locator.organizationOverview).click({ force: true })
    cy.xpath(this.locator.organizationOverview).type(this.data.organizationOverview)
})
And('User selects construction or renovation option', function(){
    cy.xpath(this.locator.constructionOrrenovation).check({ force: true })
})
And('User selects Other certifications being pursued option', function(){
 cy.xpath(this.locator.certificationpursued).check({ force: true })
})
And('User sets the Estimated date of document submission and Anticipated date of construction completion', function(){
    cy.xpath(this.locator.docsubEstidate).click()
    cy.xpath(this.locator.docsubEstidateOkbtn).click()
    cy.xpath(this.locator.docsubAnticdate).click()
    cy.xpath(this.locator.docsubAnticdateOkbtn).click()
})
And('User selects market sectors from the drop down', function(){
    cy.xpath(this.locator.marketsectors).select(this.data.marketsector, { force: true })
})
And('User clicks on continue button for saving project owner', function(){
    cy.xpath(this.locator.projectOwnerContinuebtn).click()
})
Then('User will be redirected to the project address form page', function(){
    cy.xpath(this.locator.projectaddressbackbtn).click()
})
And('User verifies the added project owner by clicking on back button', function(){
    
    cy.xpath(this.locator.ownerOrganization).contains(this.data.ownerOrganization).scrollIntoView().should('be.visible', { force: true })
    cy.xpath(this.locator.ownerName).invoke('val').then((ownerName)=>{
        expect(ownerName).to.equal(this.data.ownerName)
        })
    cy.xpath(this.locator.ownerEmail).invoke('val').then((ownerEmail)=>{
        expect(ownerEmail).to.equal(this.data.ownerEmail)
        })
    cy.xpath(this.locator.ownerphone).invoke('val').then((ownerphone)=>{
        expect(ownerphone).to.equal(this.data.ownerphone)
        })
    cy.xpath(this.locator.industry).invoke('val').then((industry)=>{
        expect(industry).to.equal(this.data.industry)
        })
    cy.xpath(this.locator.organizationwebsite).invoke('val').then((organizationwebsite)=>{
        expect(organizationwebsite).to.equal(this.data.organizationwebsite)
        })
    cy.xpath(this.locator.organizationOverview).invoke('val').then((organizationOverview)=>{
        expect(organizationOverview).to.equal(this.data.organizationOverview)
        })
    cy.xpath(this.locator.constructionOrrenovation).should('be.checked')
    cy.xpath(this.locator.certificationpursued).should('be.checked')
    cy.xpath(this.locator.marketsectors).invoke('val').then((marketsector)=>{
        expect(marketsector).to.equal(this.data.marketsector)
        })
})

////////////////////////////////ValidatingProjectAddresspage/////////////////////////////////

Given('User redirects to Project address page', function(){
    cy.xpath(this.locator.projectOwnerContinuebtn).click()

})
And('User verifies the project address page fields', function(){
   cy.xpath(this.locator.projectaddressCountry).should('be.visible')
   cy.xpath(this.locator.projectaddressStreet).should('be.visible')
   cy.xpath(this.locator.projectaddressCity).should('be.visible')
   cy.xpath(this.locator.projectaddressPostalcode).should('be.visible')
   cy.xpath(this.locator.owneraddressCountry).should('be.visible')
   cy.xpath(this.locator.owneraddressStreet).should('be.visible')
   cy.xpath(this.locator.owneraddressCity).scrollIntoView().should('be.visible')
   cy.xpath(this.locator.owneraddressPostalcode).scrollIntoView().should('be.visible')
   cy.xpath(this.locator.isthisapublicproject).scrollIntoView().should('be.visible')
   cy.xpath(this.locator.projectaddressContinuebtn).scrollIntoView().should('be.visible')
})
When('User clicks on continue button without entering the mandatory fields for project address', function(){
    cy.wait(2000)
    cy.xpath(this.locator.projectaddressContinuebtn).click()
    
})
Then('User verifies error message for mandatory fields for project address', function(){
    cy.contains("Country is required.").should('be.visible')
    cy.contains("Street is required.").should('be.visible')
    cy.contains("City is required.").should('be.visible')
    cy.contains("Postal Code is required.").should('be.visible')

})

//////////////////////////////////FillingEnrollment////////////////////////////////////////

Given('User navigates to the Enroll page by selecting the project {string} from Enrollment list by logging in to the wellcertified', function(V2projectid){
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
    this.projectid = projectid
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.xpath(this.locator.id).click({ force: true })
    if (V2projectid == 'WellV2Project') {
    cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
        })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.WellV2Project).click({ force: true })      
    }
    else if (V2projectid == 'WellCoreV2Project') {
    cy.xpath(this.locator.id).type(this.projectid.WellCoreV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.WellCoreV2Project)
        })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.WellCoreV2Project).click({ force: true })     
    }
    else if (V2projectid == 'ChinaV2Project') {
    cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.ChinaV2Project).click({ force: true })      
    }
    else if (V2projectid == 'HongKongV2Project') {
    cy.xpath(this.locator.id).type(this.projectid.HongKongV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.HongKongV2Project)
    })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.HongKongV2Project).click({ force: true })       
    }
    else if (V2projectid == 'MacaoV2Project') {
       
    cy.xpath(this.locator.id).type(this.projectid.MacaoV2Project)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
        expect(projectidcompare.trim()).to.equal(this.projectid.MacaoV2Project)
        })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status)=>{
        expect(status).to.equal("Not Registered")
        })
    cy.contains(this.projectid.MacaoV2Project).click({ force: true })      
    }       
    cy.contains('Enroll').should('be.visible')
    cy.contains(this.data.enRoll).click({ force: true })
})
})
And('User navigate to the Project address page', () => {
    cy.contains('Project Address').should('be.visible')
})
And('User enters data to Country {string}, State {string}, Street address, City and Postal Code fields for Project Address in projectid {string}', function (Country, State, V2projectid) {
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
    if (V2projectid == 'WellV2Project') {
   cy.xpath(this.locator.projectaddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.projectState).select(State, { force: true })
}
else if (V2projectid == 'WellCoreV2Project') {
   cy.xpath(this.locator.projectaddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.projectState).select(State, { force: true })
}
else if (V2projectid == 'HongKongV2Project') {
     cy.xpath(this.locator.projectaddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.projectState).select(State, { force: true })
}
else if (V2projectid == 'MacaoV2Project') {
   cy.xpath(this.locator.projectaddressCountry).select(Country, { force: true })
    }
  cy.xpath(this.locator.projectaddressStreet).type(this.data.projectAddressStreet, { force: true })
    cy.xpath(this.locator.projectaddressCity).type(this.data.projectAddressCity, { force: true })
    cy.xpath(this.locator.projectaddressPostalcode).type(this.data.projectaddressPostalcode, { force: true })
})
})

And('User enters data to Country {string}, State {string}, Street address, City and Postal Code fields for Owner Address in projectid {string}', function (Country, State, V2projectid) {
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
    if (V2projectid == 'WellV2Project') {
    cy.xpath(this.locator.owneraddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.owneraddressState).select(State, { force: true })
}
else if (V2projectid == 'WellCoreV2Project') {
    cy.xpath(this.locator.owneraddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.owneraddressState).select(State, { force: true })
}
else if (V2projectid == 'HongKongV2Project') {
    cy.xpath(this.locator.owneraddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.owneraddressState).select(State, { force: true })
}
else if (V2projectid == 'MacaoV2Project') {
    cy.xpath(this.locator.owneraddressCountry).select(Country, { force: true })
    }
    cy.xpath(this.locator.owneraddressStreet).type(this.data.owneraddressStreet, { force: true })
    cy.xpath(this.locator.owneraddressCity).type(this.data.owneraddressCity, { force: true })
    cy.xpath(this.locator.owneraddressPostalcode).type(this.data.owneraddressPostalcode, { force: true })
})
})
And('User clicks on continue button for saving project address', function () {
    cy.xpath(this.locator.projectaddressContinuebtn).click()
    
})
Then('User redirect to Billing page and verifies', function () {
    cy.contains('UNPAID').should('be.visible')
    
})
//////////////////sector///////////////////////////////////////////////////
And('User enters data to Country {string}, State {string}, Street address, City and Postal Code fields for Project Address', function (Country, State) {
    cy.xpath(this.locator.projectaddressCountry).select(Country, { force: true })
    cy.xpath(this.locator.projectState).select(State, { force: true })
    cy.xpath(this.locator.projectaddressStreet).type(this.data.projectAddressStreet, { force: true })
    cy.xpath(this.locator.projectaddressCity).type(this.data.projectAddressCity, { force: true })
    cy.xpath(this.locator.projectaddressPostalcode).type(this.data.projectaddressPostalcode, { force: true })
})
And('User fills Owner Address for special Country {string}, State {string}', function (Country, State) {
    cy.log(Country)
    cy.xpath(this.locator.owneraddressCountry).select(Country)
    cy.xpath(this.locator.owneraddressState).select(State, { force: true })
    cy.xpath(this.locator.owneraddressStreet).type(this.data.owneraddressStreet, { force: true })
    cy.xpath(this.locator.owneraddressCity).type(this.data.owneraddressCity, { force: true })
    cy.xpath(this.locator.owneraddressPostalcode).type(this.data.owneraddressPostalcode, { force: true })

})
