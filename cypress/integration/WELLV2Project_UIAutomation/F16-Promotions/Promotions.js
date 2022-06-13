import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
import AdminLogin from '../../../support/AdminLogin'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Edit page by logging in to wellcertified', function () {
    AdminLogin.adminLogin()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.WellcertificationAdmin).click({ force: true })
        cy.xpath(this.locator.idAdmin).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.idAdmin).type(this.projectid.WellV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((adminprojectidcompare) => {
            expect(adminprojectidcompare.trim()).to.equal(this.projectid.WellV2Project)
        })
        cy.wait(2000)
        cy.xpath(this.locator.adminprojectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.WellV2Project).click({ force: true })
        cy.wait(3000)
        cy.contains('Edit').should('be.visible')
    })
})
When('User clicks on Edit tab', function () {
    cy.contains('Edit').should('be.visible').click({ force: true })
})
And('User clicks on Admin Fields', function () {
    cy.wait(3000)
    cy.xpath(this.locator.adminfieldbtn).click({ force: true })

})
And('User select Project certification status', function () {
    cy.wait(4000)
    cy.xpath(this.locator.certificatnstatusdrpdwn).select(this.data.certification, { force: true })
})
And('User select Date certified', function () {
    cy.wait(2000)
    cy.xpath(this.locator.certifieddatepicker).click({ force: true })
    cy.xpath(this.locator.datecertifiednextbtn).click({ force: true })
    cy.xpath(this.locator.datecertifieddate).click({ force: true })
    cy.xpath(this.locator.dateconfirmbtn).click({ force: true })
})

And('User clicks on Save Changes button', function () {
    cy.xpath(this.locator.adminEditSavebtn).click({ force: true })
})
Then('User will be redirected to Dashboard', function () {
    cy.contains('Dashboard').should('be.visible')
})
And('User verifies card', function () {
    cy.xpath(this.locator.sealcard).scrollIntoView().should('be.visible')
})
//////////////////////////////////////////////////////////////////////////////////////////////

Given('User navigate to the editpage by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
        })
        cy.wait(2000)
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.WellV2Project).click({ force: true })
        cy.contains('Promotions').should('be.visible')

    })
})
When('User clicks on Promotions tab', function () {
    cy.contains('Promotions').should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to Promotions page', function () {
    cy.contains('Promotions').should('be.visible')
})
And('User verifies Promotions fields', function () {
    cy.xpath(this.locator.promotionsfields).should('be.visible')
})
And('User verifies Marketing and PR guidelines for WELL projects', function () {
    cy.xpath(this.locator.marketing).should('be.visible')
})
And('User verifies WELL Certification Letter of Achievement', function () {
    cy.xpath(this.locator.achievement).should('be.visible')
})
And('User verifies Welcome to WELL Toolkit', function () {
    cy.xpath(this.locator.welcometoolkit).should('be.visible')
})
