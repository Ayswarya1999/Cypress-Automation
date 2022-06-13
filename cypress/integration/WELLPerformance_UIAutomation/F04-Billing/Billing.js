import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.contains(this.getId.performanceId).click({ force: true })
        cy.wait(2000)
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
And('User verifies the Payment date in Receipt page', function () {
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
And('User verifies the paid amount', function () {
    cy.get(this.locator.enrollment.getPaymentAmount).should('contain',"2,730")
})
And('User verifies Download receipt', function () {
    cy.xpath(this.locator.Downloadreceipt).should('be.visible')
})
And('User verifies WELL logo on the Receipt page', function () {
    cy.xpath(this.locator.wellLogo).scrollIntoView().should('be.visible')
})
And('User verifies User verifies WELL Address for United States on the Receipt page', function () {
    cy.get(this.locator.enrollment.getWELLAddress).should('contain', "International WELL Building Institute, PBC")
})
And('User verifies Owner Name on the Receipt page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).eq(1).should('contain', this.data.enrollment.ownerOrganization)
})
And('User verifies Owner Email on the Receipt page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).eq(1).should('contain', this.data.email)
})
And('User verifies country on the Receipt page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).should('contain', "IN")
})
///////////////////////////////Billing page validation for China////////////////////////////////////
Given('User navigate to Dashboard page by logging in to wellcertified', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.chinaPerformanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.contains(this.getId.chinaPerformanceId).click({ force: true })
        cy.wait(2000)
    })
})
And('User verifies China country name on the Receipt page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).should('contain', "CN")
})
And('User verifies WELL Address for China on the Receipt page', function () {
    cy.get(this.locator.enrollment.getWELLAddress).should('contain', "IWBI China(HK) Limited")
})
And('User verifies  Enrollment Fee for china on the Receipt page', function () {
    cy.get(this.locator.enrollment.getPaymentAmount).should('contain',"4,200")
})



