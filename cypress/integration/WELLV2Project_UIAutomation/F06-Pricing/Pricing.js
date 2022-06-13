import 'cypress-iframe'
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})

/////////////////////////////Verify the Pricing page//////////////////////////////////////////

Given('User navigate to the Pricing page by logging in to wellcertified', function () {
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
})
When('User clicks on Pricing tab', function () {
    cy.contains('Pricing').should('be.visible').click({ force: true })

})

Then('User will be redirected to the WELL Certification Pricing page successfully', function () {
    cy.contains('WELL V2 PROJECT').should('be.visible')
    cy.wait(3000)
})
And('User verifies fields on the Pricing page', function () {
    cy.xpath(this.locator.projNamePricing).should('be.visible')
    cy.xpath(this.locator.enrollmentFees).should('be.visible')
    cy.xpath(this.locator.pricingDownload).should('be.visible')

})
And('User verifies project name', function () {
    cy.xpath(this.locator.projNamePricing).invoke('text').then((projName) => {
        var proj = projName.toString().replaceAll("(WELL Certification)", "");
    //    expect(proj).to.equal(this.data.projectName)
    })
})
And('User verifies Enrollment fees', function () {
    cy.xpath(this.locator.enrollmentFees).invoke('text').then((enrollmentFees) => {
        enrollmentFees = enrollmentFees.trim()
        expect(enrollmentFees).to.equal(this.data.Enrollmentfee)
    })
})
And('User verifies Program fees', function () {
    cy.xpath(this.locator.programFees).invoke('text').then((programFees) => {
        programFees = programFees.trim()
        expect(programFees).to.equal(this.data.Programfees)
    })
})
And('User verifies country discount applied name', function () {
    cy.xpath(this.locator.emdiscount).invoke('text').then((emdiscount) => {
        emdiscount = emdiscount.trim()
        expect(emdiscount).to.equal(this.data.discountApplied)
    })
})
And('User verifies country discount applied name', function () {
    cy.xpath(this.locator.emdiscount).invoke('text').then((emdiscount) => {
        emdiscount = emdiscount.trim()
        expect(emdiscount).to.equal(this.data.discountApplied)
    })
})
And('User verifies country discount applied percentage', function () {
    cy.xpath(this.locator.emergingDiscountpercwntage).should('contain',"(-35%)")
})

And('User verifies Total WELL Fees', function () {
    cy.contains(this.data.TotalWELLFees).should('be.visible')
})
And('User verifies Onsite performance testing and data collection', function () {
    cy.xpath(this.locator.emdiscount).scrollIntoView()
    cy.contains(this.data.Onsiteperformancetesting).should('be.visible')
})
And('User verifies Download', function () {
    cy.xpath(this.locator.pricingDownload).should('be.visible')
})
////////////////////sector discount//////////////////////////////////////////////////////
Given('User navigate to the Pricing page for WELL V2 core project by logging in to wellcertified', function () {
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
})
And('User verifies sector discount applied name', function () {
    cy.xpath(this.locator.emergingDiscountpercwntage).should('contain',"Government/Municipal Buildings (-35%)")
})
And('User verifies sector discount price', function () {
    cy.xpath(this.locator.emdiscount).invoke('text').then((emdiscount) => {
        emdiscount = emdiscount.trim()
        expect(emdiscount).to.equal(this.data.discountApplied)
    })
})
And('User verifies sector discount applied percentage', function () {
    cy.xpath(this.locator.emergingDiscountpercwntage).should('contain',"(-35%)")
})
Given('User navigate to the Pricing page {string} by logging in to wellcertified', function (V2ProjectID) {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.id).click({ force: true })
        if (V2ProjectID == 'ChinaV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
            })
            cy.wait(1000)
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
            cy.wait(1000)
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
            cy.wait(1000)
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Registered")
            })
            cy.contains(this.projectid.MacaoV2Project).click({ force: true })
        }
    })
})
And('User verifies Enrollment fees for special country', function () {
    cy.contains(this.data.noDisEnrollmentfee).should('be.visible')
})
And('User verifies Program fees for special country', function () {
    cy.contains(this.data.noDisProgramfees).should('be.visible')
})
And('User verifies Total WELL Fees for special country', function () {
    cy.contains(this.data.noDisTotalWELLFees).should('be.visible')
})
And('User verifies Onsite performance testing and data collection for special country', function () {
    cy.contains(this.data.noDisOnsiteperformancetesting).should('be.visible')

})
And('User verifies No discount', function () {
    cy.contains("Discount(s) applied:").should('not.exist')
})
And('User verifies estimate fee date range', function () {
    function addMonths(date) {
        date.setMonth(date.getMonth() + 3);
        date.setDate(date.getDate())
        return date;
    }
    var newDate = addMonths(new Date()).toDateString();
    newDate = newDate.split(" ")
    newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
    cy.xpath(this.locator.dateRange).invoke('text').then((estimatedateRange) => {
        cy.log(estimatedateRange)
        expect(newDate).to.equal(estimatedateRange)
    })
})
