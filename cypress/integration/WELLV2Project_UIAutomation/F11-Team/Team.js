
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////////////////Team page/////////////////////////////////
Given('User navigate to the Team page by logging in to wellcertified Account', function () {
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
    cy.contains("Team").click()
})
Then('User will be redirected to Team page successfully', function () {
    cy.wait(2000)
    cy.xpath(this.locator.addMember).should('be.visible')
})
And('User verifies the your WELL Certification Team page fields', function () {
    cy.xpath(this.locator.addMember).should('be.visible')
    cy.xpath(this.locator.teamDate).should('be.visible')
    cy.xpath(this.locator.changeProjectAdmin).should('be.visible')
})
/////////////////////////////Add member///////////////////////////////
Given('User navigate to the Team page', function () {
    cy.contains("Team").should('be.visible')
})
When('User click on Add member button and verifies Add member form fields', function () {
    cy.xpath(this.locator.addMember).click({ force: true })
})
And('User clicks on Invite button without entering the mandatory fields for Add member and verifies error message', function () {
    cy.xpath(this.locator.addMemberSubmit).click()
    cy.contains('Email Address is required.').should('be.visible')
    cy.contains('Project Authorization is required.').should('be.visible')
    cy.contains('Project Role is required.').should('be.visible')
})
Then('User will be redirected to Team list page successfully', function () {
    cy.contains("We have sent an email invite!").should('be.visible')
})
And('User verifies added member in Team list', function () {
    cy.xpath(this.locator.teamEmail).invoke('text').then((getEmail) => {
        expect(getEmail.trim()).to.equal(this.data.emailTeam)
}) 
})
/////////////////////////////update member///////////////////////////////
When('User click on edit button and verifies Update member form fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.editaddMember).should('be.visible')
    cy.xpath(this.locator.editaddMember).should('be.visible').click({ force: true })
    cy.xpath(this.locator.role).should('be.visible')
    cy.xpath(this.locator.updateMemberSubmit).should('be.visible')
})
And('User clicks on update button', function () {
    cy.xpath(this.locator.updateMemberSubmit).click()
})
Then('User will be redirected to the Team list page successfully', function () {
    cy.contains("Team").should('be.visible')
})
And('User verifies update member in Team list', function () {
    cy.wait(2000)
    cy.xpath(this.locator.teamEmail).invoke('text').then((getEmail) => {
        expect(getEmail.trim()).to.equal(this.data.emailTeam)
}) 
})
//////////////////delete member/////////////////////////
And('User click on delete button', function () {
    cy.xpath(this.locator.deletemember).click()
})
And('User verifies deleted member in Team list', function () {
    cy.contains("Removed").should('be.visible')
})
////////////team////////////////////////
Given('User navigate to the Team page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.wait(2000)
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.wait(2000)
        cy.reload()
        cy.xpath(this.locator.id).type(this.projectid.projectId)
        cy.wait(2000)
        cy.contains('Apply').click({ force: true })
        cy.contains(this.projectid.projectId).click({ force: true })
    })
    cy.contains(this.data.teammenu).click()
})
And('User clicks on Add member button', function () {
    cy.wait(3000)
    cy.xpath(this.locator.addMember).click({ force: true })
})
When('User enters data to Email Address and Project Role fields', function () {
    cy.xpath(this.locator.emailTeam).type(this.data.emailTeam)
    cy.xpath(this.locator.role).select(this.data.role)
})
And('User selects the Project Authorization option', function () {
    cy.xpath(this.locator.projectAuthorizationRbtn).check()
})
And('User clicks on invite button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.addMemberSubmit).click()
})
Then('User verifies added member in Team list', function () {
    cy.wait(2000)
    cy.contains("We have sent an email invite!").should('be.visible')

})

And('User click on edit button', function () {
    cy.xpath(this.locator.editaddMember).click()
})
And('User enters data to the Email Address and Project Role fields', function () {
    cy.xpath(this.locator.role).select(this.data.updateRole)
})
////////////////////////////change Admin/////////////////////////////////////
When('User click on Change Project Administrator button and verifies Change Project Administrator fields', function () {
    cy.xpath(this.locator.changeProjectAdmin).click()
})
And('User clicks on update button without entering the mandatory fields for Change Project Administrator and verifies error message', function () {
    cy.xpath(this.locator.updateChangeAdmin).click()
    cy.contains('Email Address is required.').should('be.visible')
    cy.contains('Project Role is required.').should('be.visible')
})
And('User enters data to Email Address and Project Role in Change Project Administrator fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.emailChangeProject).type(this.data.email)
    cy.xpath(this.locator.projectRole).select(this.data.role)
})
And('User clicks on update button for Change Project Administrator', function () {
    cy.wait(2000)
    cy.xpath(this.locator.updateChangeAdmin).click({ force: true })
    cy.contains("Team").should('be.visible')
})
//////////////////Non User//////////////////////////////////////////////////////////////////////
When('User enters data to Email Address and Project Role fields for Non User', function () {
    cy.xpath(this.locator.emailTeam).type(this.data.ownerEmail)
    cy.xpath(this.locator.role).select(this.data.role)
})

And('User verifies invite pending in Team list for Non User', function () {
    cy.wait(2000)
    cy.xpath(this.locator.invitePending).invoke('text').then((status) => {
        var str = status.trim()
    expect(str).to.equal("Invite pending")
    })
})
/////////////////////////Wellcore///////////////////////////////////////////////////////////////////////

Given('User navigate to the Team page by logging in to well core certified Account', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
        cy.xpath(this.locator.id).type(this.projectid.WellCoreV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.WellCoreV2Project)
        })
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })

        cy.contains(this.projectid.WellCoreV2Project).click({ force: true })
    })
    cy.contains("Team").click()
})
