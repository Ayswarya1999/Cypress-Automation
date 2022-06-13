import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User logged in to the WELL Performance Rating account', function () {
    Login.loginpage()
})
When('User clicks on WELL Performance Rating from top menu under projects', function () {
    cy.wait(4000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the WELL Performance Rating list page successfully', function () {
    cy.get(this.locator.PerformanceList.startNewProject).eq(0).should('be.visible')
})
And('User verifies the WELL Performance Rating enrollments list fields', function () {
    cy.contains("Projects").should('be.visible')
    cy.contains("Training").should('be.visible')
    cy.contains("Resources").should('be.visible')
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.contains("WELL Performance Rating").should('be.visible')
    cy.get(this.locator.PerformanceList.startNewProject).eq(0).scrollIntoView().should('be.visible')
    cy.get(this.locator.PerformanceList.IDorNamesearch).eq(1).should('be.visible')
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible')
    cy.get(this.locator.PerformanceList.clearfliter).eq(0).should('be.visible') 
   cy.xpath(this.locator.pagnition).scrollIntoView().should('be.visible')

})
And('User verifies the search by Performance ID', function () {
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.data.performancelist.id)
    cy.get(this.locator.PerformanceList.Applysearch).click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.getProjectCount).eq(5).should('contain', '1')
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.clearfliter).eq(0).click()

})
And('User verifies the search by Name', function () {
    cy.wait(1000)
    cy.get(this.locator.PerformanceList.IDorNamesearch).eq(1).type("UiAutomation59gbd")
    cy.get(this.locator.PerformanceList.Applysearch).click({ force: true })
    cy.wait(4000)
    cy.get(this.locator.PerformanceList.getProjectCount).eq(5).should('contain', '1')
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.clearfliter).eq(0).click()

})

And('User verifies the Apply button', function () {
    cy.get(this.locator.PerformanceList.Applysearch).click({ force: true })
})
And('User verifies the Clear filter button', function () {
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.clearfliter).eq(0).click()
})
And('User verifies the Pagination', function () {
    cy.wait(3000)
    cy.get(this.locator.PerformanceList.getProjectCount).eq(5).scrollIntoView().invoke('text').then((projectcount) => {
        if (projectcount > 22) {
            cy.wait(3000)
            cy.xpath(this.locator.pagnition).scrollIntoView().dblclick({ force: true })
            cy.wait(3000)
            cy.get(this.locator.PerformanceList.getProjectCount).eq(3).should('contain', '21')
        }
        cy.xpath(this.locator.pagnition).scrollIntoView().dblclick({ force: true })
    })
})