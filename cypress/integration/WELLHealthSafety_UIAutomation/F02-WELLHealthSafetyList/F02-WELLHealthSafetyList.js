import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User logged in to the WELL certified account', function () {
    Login.loginpage()
})
When('User clicks on WELL Health Safety from top menu under projects', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Wellhealthsafety).click({ force: true })
})
Then('User will be redirected to the WELL Health Safety list page successfully', function () {
    cy.contains("Projects").should('be.visible', { force: true })
})
And('User verifies the WELL Health Safety list fields', function () {
    cy.contains("Projects").should('be.visible')
    cy.contains("Training").should('be.visible')
    cy.contains("Resources").should('be.visible')
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.xpath(this.locator.Wellhealthstartprojectbtn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.idSearch).should('be.visible')
    cy.xpath(this.locator.nameSearch).should('be.visible')
    cy.xpath(this.locator.applySearch).should('be.visible')
    cy.xpath(this.locator.pagination).scrollIntoView().should('be.visible')

})
And('User verifies the search by ID', function () {
    cy.xpath(this.locator.idSearch).scrollIntoView().click({ force: true })
    cy.xpath(this.locator.idSearch).type(this.data.HSRID)
    cy.xpath(this.locator.applySearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
        expect(projectidcompare.trim()).to.equal(this.data.HSRID)
    })
    cy.xpath(this.locator.projectcount).invoke('text').then((projectcount) => {
        expect(projectcount).to.equal("1")
    })
    cy.xpath(this.locator.hrsclearfliter).click()
    cy.wait(2000)
})
And('User verifies the search by Name', function () {
    cy.xpath(this.locator.nameSearch).type(this.data.HSRName)
    cy.xpath(this.locator.applySearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.hrsclearfliter).click()
    cy.wait(2000)
})
And('User verifies the Apply button', function () {
    cy.xpath(this.locator.applySearch).click({ force: true })
})
And('User verifies the Pagination', function () {
    cy.wait(3000)
    cy.xpath(this.locator.pagination).scrollIntoView().dblclick({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.paginationcount).invoke('text').then((projectcount) => {
        expect(projectcount).to.equal("21")
    })
})