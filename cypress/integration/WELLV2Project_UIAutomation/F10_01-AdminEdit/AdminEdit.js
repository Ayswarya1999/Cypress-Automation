import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////Verifying Admin Fields as Admin user for V2 Project///////////////////
Given('User navigate to the Edit page by logging as Admin in to wellcertified', function () {
    AdminLogin.adminLogin()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.WellcertificationAdmin).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.idAdmin).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.idAdmin).type(this.projectid.WellV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare)=>{
            expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
            })
        cy.wait(2000)
        cy.xpath(this.locator.adminprojectstatus).invoke('text').then((status)=>{
            expect(status).to.equal("Registered")
            })
        cy.contains(this.projectid.WellV2Project).click({ force: true })
       })
})       
When('User clicks on Edit tab', function () {
    cy.wait(3000)
    cy.contains('Edit').should('be.visible').click({ force: true })
})
And('User clicks on Admin Fields button', function () {
    cy.wait(4000)
    cy.xpath(this.locator.adminfieldbtn).click({ force: true })
})
And('User verifies the Admin Fields page fields', function () {
    cy.wait(3000)
    cy.xpath(this.locator.adminfieldbtn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.coachingcontactdrpdwn).scrollIntoView().should('be.visible')
   // cy.xpath(this.locator.relatnshpmngrdrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.wellreviewerdrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.externalreviewerdrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.ptadrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.precertificatnstatusdrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.certificatnstatusdrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.closereasondrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.coachingsuprtdrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.enthusiasmleveldrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.docsubdatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.ownerrepresentativename).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.ownerrepresentativeemail).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.billingstatus).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.challengesnote).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.communicationnote).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.billingnote).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.precertificationdatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.certifieddatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.performanceverificationdatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.performanceverification1datepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.performanceverification2datepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.awardeddatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.performanceratingawardeddatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.projectclosedatepicker).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.registrationstatusradio).scrollIntoView().should('be.visible')
})
And('User updates the Admin Fields', function () {
    cy.wait(3000)
    cy.xpath(this.locator.externalreviewerdrpdwn).click({ force: true }).type(this.data.externalReviewer)
    cy.wait(2000)
    cy.xpath(this.locator.externalreviewerdrpdwn).type('{enter}')
    cy.xpath(this.locator.ownerrepresentativename).click({ force: true }).clear().type(this.data.ownerRepresentativeName)
    cy.xpath(this.locator.ownerrepresentativeemail).click({ force: true }).clear().type(this.data.ownerRepresentativeEmail)
    cy.xpath(this.locator.precertificatnstatusdrpdwn).select(this.data.projectPrecertificationstatus, { force: true })
    cy.xpath(this.locator.precertificationdatepicker).click({force: true})
    cy.xpath(this.locator.dateconfirmbtn).click({force: true})
    cy.wait(2000)
    cy.xpath(this.locator.performanceverificationdatepicker).click({force: true})
    cy.xpath(this.locator.dateconfirmbtn).click({force: true})
    cy.wait(2000)
    cy.xpath(this.locator.performanceverification1datepicker).click({force: true})
    cy.xpath(this.locator.dateconfirmbtn).click({force: true})
    cy.wait(2000)
    cy.xpath(this.locator.performanceverification2datepicker).click({force: true})
    cy.xpath(this.locator.dateconfirmbtn).click({force: true})
    cy.wait(2000)
    cy.xpath(this.locator.billingstatus).click({ force: true }).clear().type(this.data.billingstatus)
    cy.xpath(this.locator.challengesnote).click({ force: true }).clear().type(this.data.challengesnote)
    cy.xpath(this.locator.communicationnote).click({ force: true }).clear().type(this.data.communicationnote)
    cy.xpath(this.locator.billingnote).click({ force: true }).clear().type(this.data.billingnote)
})
And('User clicks on Save Changes button', function () {
    cy.xpath(this.locator.adminEditSavebtn).click({ force: true })
})
Then('User update the Admin Fields and will be redirected to the Dashbaord successfully', function () {
    cy.contains('Dashboard').should('be.visible')
})

//////////////////////////Verifying Updated Admin Fields as Admin user//////////////////////////
Then('User verifies the updated Admin Fields', function () {
    cy.wait(3000)
    cy.xpath(this.locator.ownerrepresentativename).invoke('val').then((name)=>{
        expect(name).to.equal(this.data.ownerRepresentativeName)
        })
        cy.xpath(this.locator.ownerrepresentativeemail).invoke('val').then((mail)=>{
            expect(mail).to.equal(this.data.ownerRepresentativeEmail)
            })
            cy.xpath(this.locator.billingstatus).invoke('val').then((status)=>{
                expect(status).to.equal(this.data.billingstatus)
                })
                cy.xpath(this.locator.challengesnote).invoke('val').then((note)=>{
                    expect(note).to.equal(this.data.challengesnote)
                    })
                    cy.xpath(this.locator.communicationnote).invoke('val').then((cnote)=>{
                        expect(cnote).to.equal(this.data.communicationnote)
                        })
                        cy.xpath(this.locator.billingnote).invoke('val').then((bnote)=>{
                            expect(bnote).to.equal(this.data.billingnote)
                            })
})