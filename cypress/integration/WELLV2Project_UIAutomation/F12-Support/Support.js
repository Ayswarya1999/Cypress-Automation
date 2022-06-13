import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'


beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the Support page by logging in to wellcertified', function () {
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
        cy.wait(2000)
        cy.contains('Support').click({ force: true })

    })
})

Then('User will be redirected to Support page successfully', function () {
    cy.contains('Support').should('be.visible')
})
And('User verifies the your WELL Certification Support page fields', function () {
    cy.xpath(this.locator.getHelpBtn).should('be.visible')

})
///////////////////////////GetHelp page//////////////////////////////////////////////////////////
Given('User navigate to the GetHelp page', function () {
    cy.wait(2000)
    cy.xpath(this.locator.getHelpBtn).should('contain.text', 'Get Help').click({ force: true })
})
When('User clicks on Submit button without entering the mandatory fields for Support and verifies error message', function () {
    cy.wait(2000)
    cy.xpath(this.locator.supportSubmitBtn).should('contain.text', 'Submit').click({ force: true })
    cy.contains("Question About is required.").should('be.visible')
    cy.contains("Subject is required.").should('be.visible')
    cy.xpath(this.locator.supportSubmitBtn).scrollIntoView()
    cy.contains("Description is required.").should('be.visible')
})
And('User selects the Question About option', function () {
    cy.xpath(this.locator.selectAboutQuestion).select(this.data.selectAboutQuestion)
})
And('User enters data to subject and description fields', function () {
    cy.xpath(this.locator.subject).invoke('show').type(this.data.subject)
    cy.xpath(this.locator.description).invoke('show').type(this.data.description)
})
And('User uploads file in documents', function () {
    cy.xpath(this.locator.documentsUpload).attachFile(this.data.testDataPath)
})
And('User clicks on submit button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.supportSubmitBtn).should('contain.text', 'Submit').click({ force: true })
    cy.contains(this.data.subject).should('be.visible')

})
Then('User will be redirected to Inbox page successfully', function () {
    cy.wait(2000)
    cy.xpath(this.locator.inbox).scrollIntoView()
    cy.xpath(this.locator.inbox).should('be.visible')
    cy.contains(this.data.subject).should('be.visible')
    cy.xpath(this.locator.inboxStatus).should('contain.text', 'new')
    cy.xpath(this.locator.backHelpBtn).should('be.visible')
})
////////////////////////////Inbox page///////////////////////////////////////////////////////////
Given('User navigate to the Inbox page', function () {
    cy.xpath(this.locator.inbox).should('be.visible')
    cy.contains(this.data.subject).should('be.visible')
})
When('User clicks on Comment button without entering the mandatory fields for Support and verifies error message', function () {
    cy.xpath(this.locator.commentBtn).click()
    cy.contains("A comment is required.").should('be.visible')

})
And('User enters comments', function () {
    cy.wait(2000)
    cy.xpath(this.locator.comment).invoke('show').type(this.data.description)
})
And('User upload document in comments', function () {
    cy.xpath(this.locator.documentsUpload).attachFile(this.data.testDataPath)
})
And('User clicks on Comment button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.commentBtn).click()
})
Then('User verifies the status', function () {
    cy.xpath(this.locator.inbox).scrollIntoView()
    cy.xpath(this.locator.inbox).should('be.visible')
    cy.contains(this.data.subject).should('be.visible')
    cy.xpath(this.locator.inboxStatus).should('contain.text', 'new')

})
////////////////////////////////Resource Page///////////////////////////////////////////////////////////////////
Given('User navigate to the Resource page', function () {
    // cy.xpath(this.locator.resource).should('be.visible') 

})

When('User verifies card count for Getting Started', function () {
    cy.get(this.locator.resourceCard).eq(0).should('contain.text', 'Understand the WELL project administrator role')
    cy.get(this.locator.resourceCard).eq(1).should('contain.text', 'Build your WELL project team')
    cy.get(this.locator.resourceCard).eq(2).should('contain.text', 'Create a custom scorecard')
    cy.get(this.locator.resourceCard).eq(3).should('contain.text', 'Define your WELL project boundary')
    cy.get(this.locator.resourceCard).eq(4).should('contain.text', 'Understand the architecture of WELL v2')
    cy.get(this.locator.resourceCard).eq(5).should('contain.text', 'WELL Core Guide')
    cy.get(this.locator.resourceCard).eq(6).should('contain.text', 'Estimate certification timelines')
    cy.get(this.locator.resourceCard).eq(7).should('contain.text', 'Prioritize WELL feature selection with public health data')
    cy.get(this.locator.resourceCard).eq(8).should('contain.text', 'Choose award milestones to achieve')
    cy.get(this.locator.resourceCard).eq(9).should('contain.text', 'Celebrate your WELL Certification enrollment')
})
And('User verifies card count for Toolkits', function () {
    cy.get(this.locator.resourceCard).eq(10).should('contain.text', 'Access WELL v2 Certification toolkit')
    cy.get(this.locator.resourceCard).eq(11).should('contain.text', 'Access WELL v1 Certification toolkit')
})

And('User verifies card count for Documentation Prep', function () {
    cy.get(this.locator.resourceCard).eq(12).should('contain.text', 'Start the WELL documentation process')
    cy.get(this.locator.resourceCard).eq(13).should('contain.text', 'Understanding document types')
    cy.get(this.locator.resourceCard).eq(14).should('contain.text', 'Tips for preparing documentation')
    cy.get(this.locator.resourceCard).eq(15).should('contain.text', 'Upload WELL documentation to your account')
    cy.get(this.locator.resourceCard).eq(16).should('contain.text', 'Access evidence for WELL features')
    cy.get(this.locator.resourceCard).eq(17).should('contain.text', 'WELL Project info form')
    cy.get(this.locator.resourceCard).eq(18).should('contain.text', 'Use an alternative approach')
    cy.get(this.locator.resourceCard).eq(19).should('contain.text', 'Pursue innovative features')
    cy.get(this.locator.resourceCard).eq(20).should('contain.text', 'Upgrade to newer requirements or versions')
    cy.get(this.locator.resourceCard).eq(21).should('contain.text', 'WELL Documentation Annotation Guide')
    cy.get(this.locator.resourceCard).eq(22).should('contain.text', 'Sample Documentation')
})
And('User verifies card count for Alternatives and Innovations', function () {
    cy.get(this.locator.resourceCard).eq(23).should('contain.text', 'WELL crosswalks')
    cy.get(this.locator.resourceCard).eq(24).should('contain.text', 'Explore alternative adherence paths')
    cy.get(this.locator.resourceCard).eq(25).should('contain.text', 'Explore innovations')
    cy.get(this.locator.resourceCard).eq(26).should('contain.text', 'Explore equivalencies')

})
And('User verifies card count for Performance Testing', function () {
    cy.get(this.locator.resourceCard).eq(27).should('contain.text', 'Prepare the site for performance testing')
    cy.get(this.locator.resourceCard).eq(28).should('contain.text', 'Planning performance testing')
    cy.get(this.locator.resourceCard).eq(29).should('contain.text', 'Hire a performance testing agent')
    cy.get(this.locator.resourceCard).eq(30).should('contain.text', 'Webcast: Preparing for PV')

})
And('User verifies card count for Reviews', function () {
    cy.get(this.locator.resourceCard).eq(31).should('contain.text', 'Submit curative action plans')
    cy.get(this.locator.resourceCard).eq(32).should('contain.text', 'Submit documentation for review')
    cy.get(this.locator.resourceCard).eq(33).should('contain.text', 'Access your review report')

})
And('User verifies card count for Award', function () {
    cy.get(this.locator.resourceCard).eq(34).should('contain.text', 'Celebrate your WELL Certification achievement')

})
And('User verifies card count for Provide annual reporting', function () {
    cy.get(this.locator.resourceCard).eq(35).should('contain.text', 'Annual Reporting and recertification of WELL Certified spaces')
    cy.get(this.locator.resourceCard).eq(36).should('contain.text', 'Complete recertification for your project')

})
And('User verifies card count for COVID-19 Support', function () {
    cy.get(this.locator.resourceCard).eq(37).should('contain.text', 'Strategies from the WELL Building Standard to Support in the Fight Against COVID-19')
    cy.get(this.locator.resourceCard).eq(38).should('contain.text', 'COVID-19 Training for Professionals')
    cy.get(this.locator.resourceCard).eq(39).should('contain.text', 'WELL Health-Safety Rating')
    cy.get(this.locator.resourceCard).eq(40).should('contain.text', 'WELL Health-Safety Feature Alignment Tool')
    cy.get(this.locator.resourceCard).eq(41).should('contain.text', 'Power of Place resources')

})
And('User verifies card count for Guidebooks', function () {
    cy.get(this.locator.resourceCard).eq(42).should('contain.text', 'Certification Guidebook - WELL Building Standard')
    cy.get(this.locator.resourceCard).eq(43).should('contain.text', 'Performance Verification Guidebook - WELL Building Standard')
    cy.get(this.locator.resourceCard).eq(44).should('contain.text', 'WELL Health-Safety Rating Guidebook')
})
And('User verifies card count for Legal Forms', function () {
    cy.get(this.locator.resourceCard).eq(45).should('contain.text', "Confirmation of Agent's Authority")
    cy.get(this.locator.resourceCard).eq(46).should('contain.text', 'Change of Owner Agreement')
    cy.get(this.locator.resourceCard).eq(47).should('contain.text', "Confirmation of Primary Owner's Authority")

})
And('User verifies card count for Getting Started with WELL series', function () {
    cy.get(this.locator.resourceCard).eq(48).should('contain.text', 'Introduction and Team Roles')
    cy.get(this.locator.resourceCard).eq(49).should('contain.text', 'Learning about the WELL Certification Process')
    cy.get(this.locator.resourceCard).eq(50).should('contain.text', 'Understanding the WELL Digital Standard')
    cy.get(this.locator.resourceCard).eq(51).should('contain.text', 'Navigating the Project Dashboard')

})
And('User verifies card count for WELL Tutorials', function () {
    cy.get(this.locator.resourceCard).eq(52).should('contain.text', 'Preparing WELL Documentation')
    cy.get(this.locator.resourceCard).eq(53).should('contain.text', 'Responding to Preliminary Review Comments')
})   
