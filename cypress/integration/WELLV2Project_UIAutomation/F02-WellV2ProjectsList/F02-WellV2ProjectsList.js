import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User logged in to the WELL certified account', function () {
    Login.loginpage()
})
When('User clicks on WELL Certification from top menu under projects', function () {
    cy.xpath(this.locator.Wellcertification).click({ force: true })

})
Then('User will be redirected to the WELL Certification projects list page successfully', function () {
    cy.contains("WELL Certification enrollments").should('be.visible')
})
And('User verifies the WELL Certification enrollments list fields', function () {
    cy.contains("Projects").should('be.visible')
    cy.contains("Training").should('be.visible')
    cy.contains("Resources").should('be.visible')
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.contains("WELL Certification enrollments").should('be.visible')
    cy.xpath(this.locator.startav2projectbtn).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.namesearch).should('be.visible')
    cy.xpath(this.locator.countryorregionsearch).should('be.visible')
    cy.xpath(this.locator.statussearch).should('be.visible')
    cy.xpath(this.locator.Applysearch).should('be.visible')
    cy.xpath(this.locator.clearfliter).should('be.visible')
    cy.xpath(this.locator.pagnition).scrollIntoView().should('be.visible')

})
And('User verifies the search by ID', function () {
    cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
    cy.xpath(this.locator.id).click({ force: true })
    cy.xpath(this.locator.id).type(this.data.id)
    cy.xpath(this.locator.Applysearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
        expect(projectidcompare.trim()).to.equal(this.data.id)
    })
    cy.xpath(this.locator.projectcount).invoke('text').then((projectcount) => {
        expect(projectcount).to.equal("1")
    })
    cy.xpath(this.locator.clearfliter).click()
    cy.wait(2000)
})
And('User verifies the search by Name', function () {
    cy.xpath(this.locator.namesearch).type(this.data.projectName)
    cy.xpath(this.locator.Applysearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.clearfliter).click()
    cy.wait(2000)
})
And('User verifies the search by Country name India, China, Macao, Hongkong, Austraila, Afghanistan and Jordon', function () {
    var countryname = ["India", "China", "Macao, China", "Hong Kong, China", "Australia", "Afghanistan", "Jordan"]
    countryname.forEach(element => {
        cy.xpath(this.locator.countryorregionsearch).select(element, { force: true })
        cy.xpath(this.locator.Applysearch).click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.searchlocation).invoke('text').then((searchlocation) => {
            expect(searchlocation.trim()).to.equal(element)
            cy.xpath(this.locator.clearfliter).click()
            cy.wait(2000)
        })
    })
})
And('User verifies the search by Status Registered, Registeration in progress and Not Registered', function () {
    var countryname = ["Registered", "Registration in progress", "Not Registered"]
    countryname.forEach(element => {
        cy.xpath(this.locator.statussearch).select(element)
        cy.xpath(this.locator.Applysearch).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectstatus).invoke('text').then((projectstatus) => {
            expect(projectstatus).to.equal(element)
        })
    })
})
And('User verifies the Apply button', function () {
    cy.xpath(this.locator.Applysearch).click({ force: true })
})
And('User verifies the Clear filter button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.clearfliter).click()
})
And('User verifies the Pagination', function () {
    cy.wait(3000)
    cy.xpath(this.locator.pagnition).scrollIntoView().dblclick({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.paginationcount).invoke('text').then((projectcount) => {
        expect(projectcount).to.equal("21")
    })
})