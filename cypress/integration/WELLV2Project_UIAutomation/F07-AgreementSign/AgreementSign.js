import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})

////////////////////////////AgreementSign///////////////////////////////////////////////////////////////////////////////

Given('User navigate to the Dashboard page by selecting the project Id {string} from project list by logging in to the wellcertified', function (V2ProjectID) {
    Login.loginpage()

    cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
    cy.wait(2000)
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        if (V2ProjectID == 'WellV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
            })
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Registered")
            })
            cy.contains(this.projectid.WellV2Project).click({ force: true })
        }
        else if (V2ProjectID == 'ChinaV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
            })
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Registered")
            })
            cy.contains(this.projectid.ChinaV2Project).click({ force: true })
        }
        else if (V2ProjectID == 'HongKongV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.HongKongV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.HongKongV2Project)
            })
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Registered")
            })
            cy.contains(this.projectid.HongKongV2Project).click({ force: true })
        }
        else if (V2ProjectID == 'MacaoV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.MacaoV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.MacaoV2Project)
            })
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Registered")
            })
            cy.contains(this.projectid.MacaoV2Project).click({ force: true })
        }
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Dashboard').should('be.visible').click({ force: true })
    })
})
When('User clicks on Sign now button', function () {
    cy.contains('Sign Now!').click({ force: true })
})
Then('User will be redirected to WELL V2 Project Dashboard page successfully', function () {
    cy.contains('Dashboard').should('be.visible')
})
And('User Verifies left panel tab names for Dashboard, Team, Documents, Scorecard, Reviews, Promotions, Support, Alternatives, Overview, Edit, Pricing and Billing', function () {
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Team').should('be.visible')
    cy.contains('Documents').should('be.visible')
    cy.contains('Health-Safety Rating').should('be.visible')
    cy.contains('Reviews').should('be.visible')
    cy.contains('Promotions').should('be.visible')
    cy.contains('Support').should('be.visible')
    cy.contains('Alternatives').should('be.visible')
    cy.contains('Overview').should('be.visible')
    cy.contains('Edit').should('be.visible')
    cy.contains('Billing').should('be.visible')
    cy.xpath(this.locator.enrolllinkbtn).contains('Enroll').should('not.exist')
})
Then('User Verifies Download Agreement', function () {
    cy.xpath(this.locator.downloadAgreement).should('be.visible')
})