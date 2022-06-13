import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Overview page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
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
    })
        cy.contains('Overview').should('be.visible')
    })

When('User clicks on Overview tab', function () {
    cy.contains('Overview').should('be.visible').click({ force: true })
})
Then('User redirects to Project Information Page successfully', function () {
    cy.contains('Project Information').should('be.visible')
})
Given('User is on Overview page by logging in to wellcertified', function () {
    cy.contains('Project Information').should('be.visible')
})
Then('User verfies the Project ID', function () {
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
    })
    cy.get(this.locator.projectidOverview).invoke('text').then((projectidcompare) => {
        expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
    })
})
And('User verifies WELL v2 Q4 2021 addenda', function () {
    cy.contains('WELL v2, Q4 2021 addenda').should('be.visible')
})
And('User verfies the Project Name', function () {
    cy.get(this.locator.projectnamecompare).invoke('text').then((projectnamecompare) => {
       // expect(projectnamecompare.trim()).to.equal(this.data.projectName)
    })
})
And('User verfies the Gross Area', function () {
    cy.contains('100 sq ft').scrollIntoView().should('be.visible')
})
And('User verfies the Project Location', function () {
    cy.contains(this.data.EditStreet).scrollIntoView().should('be.visible')
    cy.contains(this.data.cityName).scrollIntoView().should('be.visible')
 
})
And('User verfies the Anticipated Date of construction completion', function () {
    function addMonths(date) {
        date.setMonth(date.getMonth());
        date.setDate(date.getDate())
        return date;
    }
    var newDate = addMonths(new Date()).toDateString();
    newDate = newDate.split(" ")
    newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
    cy.contains(newDate).should('be.visible')
})
And('User verfies the Estimated date of document submission', function () {
    function addMonths(date) {
        date.setMonth(date.getMonth());
        date.setDate(date.getDate())
        return date;
    }
    var newDate = addMonths(new Date()).toDateString();
    newDate = newDate.split(" ")
    newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
    cy.contains(newDate).should('be.visible')

})
And('User verfies the Owner', function () {
    cy.get(this.locator.ownercompare).invoke('text').then((ownercompare) => {
        expect(ownercompare.trim()).to.equal(this.data.ownerEmail)
    })
})
And('User verfies the Owner Industry', function () {
    cy.get(this.locator.ownerindustrycompare).invoke('text').then((ownerindustrycompare) => {
        expect(ownerindustrycompare.trim()).to.equal(this.data.industry)
    })
})
And('User verifies the Owner Website', function () {
    cy.get(this.locator.ownerwebsitecompare).invoke('text').then((ownerwebsitecompare) => {
        expect(ownerwebsitecompare.trim()).to.equal(this.data.organizationwebsite)
    })
})
And('User verfies the Owner Organization Overview', function () {
    cy.get(this.locator.ownerorgcompare).invoke('text').then((ownerorgcompare) => {
        expect(ownerorgcompare.trim()).to.equal(this.data.EditorgOverview)
    })
})
And('User verfies the Target Certification Level', function () {
    cy.contains('Silver').should('be.visible')
})
And('User verfies the WELL Project Goals and Vision', function () {
    cy.get(this.locator.goalscompare).invoke('text').then((goalscompare) => {
        expect(goalscompare.trim()).to.equal(this.data.WellProjectgoals)
    })
})
And('User verfies the Public Project', function () {
    cy.contains('No, I want my project to be private').scrollIntoView().should('be.visible')
})






