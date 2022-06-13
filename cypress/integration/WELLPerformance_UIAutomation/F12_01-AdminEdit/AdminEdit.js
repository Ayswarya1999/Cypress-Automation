import CommonMethod from '../../../support/CommonMethod'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////Verifying and editing Admin Fields as Admin user for WELL Performance Rating///////////////////
Given('User navigate to the Edit page by logging as Admin in to wellcertified', function () {
    AdminLogin.adminLogin()
    cy.xpath(this.locator.PerformanceList.WellPerformanceAdmin).click({ force: true })
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
When('User clicks on Edit tab', function () {
    cy.wait(2000)
    cy.contains('Edit').should('be.visible').click({ force: true })
})
And('User clicks on Admin Fields button', function () {
    cy.wait(4000)
    cy.get("[class='shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-md bg-white text-sm font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out']").contains('Admin Fields').click({force:true})
})
And('User verifies the Admin Fields page fields', function () {
    cy.xpath(this.locator.HSRadminfieldbtn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.coachingcontactdropdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.relationshippmngrdrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.wellreviewerdropdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.externalreviewerdrpdwn).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.ptadrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.HSRstatus).scrollIntoView().should('be.visible') 
    cy.xpath(this.locator.HSRAwardedDate).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.hsrcloseReasondrpdwn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.closedate).scrollIntoView().should('be.visible')
    cy.wait(2000)
})
And('User updates the Admin Fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.coachingcontactdropdwn).select(this.data.coachingcontactdrpdwn, { force: true })
    cy.wait(2000)
    cy.xpath(this.locator.externalreviewerdrpdwn).click({ force: true })
    cy.wait(1000)
    cy.xpath(this.locator.externalreviewerdrpdwn).type(this.data.externalreviewerdrpdwn)
    cy.xpath(this.locator.externalreviewerdrpdwn).type('{enter}')
    cy.wait(2000)  
})
And('User clicks on Save Changes button', function () {
    cy.xpath(this.locator.admineditSavebtn).click({ force: true })
})
Then('User update the Admin Fields and will be redirected to the Dashbaord successfully', function () {
    cy.contains('Dashboard').should('be.visible')
})

//////////////////////////Verifying Updated Admin Fields as Admin user//////////////////////////
Then('User verifies the updated Admin Fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.coachingcontactdropdwn).should('contain',this.data.coachingcontactdrpdwn)
//cy.xpath(this.locator.externalreviewerdrpdwn).should('contain',this.data.externalreviewerdrpdwn)
})
////////////////////////////////////////SmokeTest///////////////////////////////////////////////////
And('User updates for Admin Fields', function () {
    cy.xpath(this.locator.relatnshpmngrdrpdwn).select(this.data.coachingcontactdrpdwn, { force: true })
    cy.wait(1000)
    cy.xpath(this.locator.HSRstatus).scrollIntoView().check({force: true})
    cy.wait(1000)
    cy.xpath(this.locator.HSRAwardedDate).click({force: true})
    cy.xpath(this.locator.awarddateOk).click({force: true})
})
And('User verifies the WELL Performance Rating seal in the Dashbaord', function () {
    cy.xpath(this.locator.wprseal).should('be.visible')
})
And('User verifies the valid seal date', function () {
    function addMonths(date) {
        date.setMonth(date.getMonth() + 12);
        date.setDate(date.getDate())
        return date;
    }
    var newDate = addMonths(new Date()).toDateString();
    newDate = newDate.split(" ")
    newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
    cy.wait(1000)
    cy.xpath(this.locator.wprgetsealdate).should('contain',newDate)
})

