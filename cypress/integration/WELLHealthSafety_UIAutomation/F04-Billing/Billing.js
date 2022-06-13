import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Dhashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
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
        cy.contains('Billing').should('be.visible')
    })
})
When('User clicks on Billing tab', function () {
    cy.contains('Billing').click()
    cy.wait(2000)
})
Then('User will be redirected to the WELL Health-Safety Billing page successfully', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
    cy.contains('Download receipt').should('be.visible')
})
////////////////////////////////////////////////////////////////////////////////////////////////
Given('User is on billing page by logging in to wellcertified', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
})
When('User clicks on paid button', function () {
    cy.xpath(this.locator.Paidbtn).click()
})
Then('User will be redirected to WELL Health Safety Receipt page successfully', function () {
    cy.contains('Receipt ').should('be.visible')
})
And('User verifies fields on WELL Health Safety Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
    cy.xpath(this.locator.Downloadbtn).should('be.visible')
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})

And('User verifies the Payment Status in Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('be.visible')
})
And('User verifies Payment date in Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('contain','paid')

})
And('User verifies Payment date in Receipt page', function () {
    cy.xpath(this.locator.Paidbtn).should('contain','paid')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('default', { month: 'short' })
    var yyyy = today.getFullYear();
    today = mm + ' ' + dd + ' ' + yyyy;
    document.write(today);
    cy.xpath(this.locator.hsrreciptDate).invoke('text').then((getDate) => {
        var newsts = ''
        var str = getDate.replaceAll(",", "");
        var newsts = str.trim()
        expect(today).to.equal(newsts)
    })
})
And('User verifies the Paid amount', function () {
    cy.contains(this.data.PaymentAmount).should('be.visible')
})
And('User verifies Download receipt', function () {
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})



