import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User navigate to the WELL Performance Rating Lists page by logging in to WELL Performance Rating', function () {
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
})
When('User clicks on Start a New Project button and verify options', function () {
    cy.get(this.locator.PerformanceList.startNewProject).eq(0).scrollIntoView().should('be.visible').click({ force: true })
    cy.get(this.locator.enrollment.EnrollOption).eq(0).should('be.visible')
})
And('User clicks on Enroll Now button', function () {
    cy.get(this.locator.enrollment.EnrollOption).eq(0).should('be.visible').click({ force: true })
})
Then('User redirects to Lead with Performance form page successfully', function () {
    cy.contains("Lead with Performance").should('be.visible')
    cy.wait(2000)
})
////////////////////////////////////Lead with  form page validation/////////////////////////////////////////////////////////////////////////
Given('User navigate to the Lead with Performance form page by logging in to WELL Performance Rating', function () {
    cy.contains("Lead with Performance").should('be.visible')
})
Then('User verifies the Lead with Performance form page fields', function () {
    cy.wait(2000)
    cy.get(this.locator.enrollment.verifyEnrollOptionCount).should('have.length', 5)
    cy.get(this.locator.enrollment.enrollbtn).eq(0).should('be.visible')
    cy.get(this.locator.enrollment.backHomepagebtn).eq(0).should('be.visible')
})

And('User redirects to Lead with Performance form page successfully', function () {
    cy.contains("Lead with Performance").should('be.visible')
})
/////////////////////////Organization information form page validation///////////////////////////////////////////////////////////////////////////
Given('User navigate to the Organization information form page by logging in to WELL Performance Rating', function () {
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.PerformanceList.startNewProject).eq(0).scrollIntoView().should('be.visible').click({ force: true })
    cy.get(this.locator.enrollment.EnrollOption).eq(0).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.enrollment.enrollbtn).eq(0).should('be.visible').click({ force: true })
})
And('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.wait(2000)
    cy.get(this.locator.enrollment.OrgContinebtn).eq(0).scrollIntoView().should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.get(this.locator.enrollment.OrgErrorMsg).should('have.length', 6)
})
And('User enter data to Enrollment Name', function () {
    let r = Math.random().toString(36).slice(-5)
    cy.get(this.locator.enrollment.OrgName).eq(0).type(this.data.enrollment.projectName + r)

})
And('User checks the Owner information checkbox', function () {
    cy.get(this.locator.enrollment.OrgOwnerInfoCbx).eq(0).check()
})
And('User selects the Organisation', function () {
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).click()
    cy.wait(1000)
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).type(this.data.enrollment.ownerOrganization)
    cy.wait(2000)
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).type('{enter}')
    cy.wait(2000)
})
And('User selects the Organisation Sector', function () {
    cy.wait(2000)
    cy.get(this.locator.enrollment.CountryOrSector).eq(1).select(this.data.enrollment.orgSector)
})
And('User selects the Organisation Industry', function () {
    cy.wait(1000)
    cy.get(this.locator.enrollment.CountryOrSector).eq(2).select(this.data.enrollment.orgIndustry)
})
And('User enters data to Country, Street address, City and Postal Code fields', function () {
    cy.get(this.locator.enrollment.CountryOrSector).eq(3).select(this.data.enrollment.orgCountry)
    cy.wait(1000)
    cy.get(this.locator.enrollment.CountryOrSector).eq(4).select(this.data.enrollment.stateName)
    cy.wait(1000)
    cy.get(this.locator.enrollment.OrgAddress).eq(0).type(this.data.enrollment.streetName)
    cy.get(this.locator.enrollment.OrgCity).eq(0).type(this.data.enrollment.cityName)
    cy.get(this.locator.enrollment.OrgPostalcode).eq(0).type(this.data.enrollment.postalCode)

})
And('User checks the Billing address is same as owner address checkbox', function () {
    cy.wait(1000)
    cy.get(this.locator.enrollment.OrgOwnerInfoCbx).eq(1).check()
})
And('User clicks on continue button', function () {
    cy.wait(1000)
    cy.get(this.locator.enrollment.OrgContinebtn).eq(0).click({ force: true })
})
Then('User will be redirected to Registration page successfully', function () {
    cy.wait(2000)
    cy.contains("Registration on behalf of Owner").should('be.visible')
})

//////////////Validating locations form page///////////////////////////////////////////////////////////////////
Given('User navigate to Organization information form page by logging in to WELL Performance Rating', function () {
    cy.wait(1000)
    cy.contains("Registration on behalf of Owner").should('be.visible')
})

When('User clicks on the continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.get(this.locator.enrollment.LocContinuebtn).eq(1).click({ force: true })
    cy.get(this.locator.enrollment.orgOwnererrormessage).should('have.length', 2)
})
And('User checks the Registration checkbox', function () {
    cy.get(this.locator.enrollment.behalfownercbx).eq(0).check()
})
And('User selects yes or no for Is the Owner organization an IWBI member', function () {
    cy.get(this.locator.enrollment.CountryOrSector).eq(5).select("No")
})
And('User clicks on Registration continue button', function () {
    cy.get(this.locator.enrollment.LocContinuebtn).eq(1).click({ force: true })
    cy.wait(4000)

})
And('Get the WELL Performance ID for India and store into Json', function () {
    cy.url().then(geturl => {
        let id = geturl.replaceAll("https://test-nuxt.wellcertified.com/user/login?redirect_to=%2Fwpr%2Fcreate%2F", "");
        cy.readFile('cypress/fixtures/performanceId.json').then((obj) => {
            obj.performanceId = id
            cy.writeFile('cypress/fixtures/performanceId.json', obj)
        })
    })
})
//////////////Org Loc//////////////////////////////////////////////////////////////////////////////
Given('User navigate to Organization Location form page by logging in to WELL Performance Rating', function () {
    cy.wait(2000)
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.PerformanceList.WellPerformance).click({ force: true })
    cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.fixture('performanceId').then(function (getId) {
        this.getId = getId
        cy.log(this.getId.performanceId)

        cy.get(this.locator.PerformanceList.IDorNamesearch).eq(0).type(this.getId.performanceId)
        cy.wait(2000)
        cy.get(this.locator.PerformanceList.Applysearch).should('be.visible').click({ force: true })
        cy.contains(this.getId.performanceId).click({ force: true })
    })
})
And('User select location describes', function () {
    cy.wait(2000)
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).click()
    cy.wait(1000)
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).type(this.data.enrollment.describeLoc)
    cy.wait(1000)
    cy.get(this.locator.enrollment.OwnerOrgName).eq(0).type('{enter}')
    cy.wait(2000)

})
And('User enter square meters', function () {
    cy.wait(2000)
    cy.get(this.locator.enrollment.locOrSq).eq(1).clear().type(this.data.enrollment.sq)
})
And('User clicks on continue button in Organization Location', function () {
    cy.wait(1000)
    cy.get(this.locator.enrollment.locontinuebtn).eq(0).click()

})
And('User redirects to Enrollment Fee form page successfully', function () {
    cy.wait(2000)
    cy.contains("Confirm your enrollment fee").should('be.visible')

})

//////////////Validating Fees+Discounts page///////////////////
Given('User is on Fees+Discounts page', function () {
    cy.wait(2000)
    cy.contains("Confirm your enrollment fee").should('be.visible')
})
When('User checks the criteria checkbox', function () {
    cy.get(this.locator.enrollment.discountcategorycbx).eq(0).check()
})
Then('User verifies fields on the Fees+Discounts page', function () {
    cy.wait(1000)
    cy.get(this.locator.enrollment.feesDiscountcontinuebtn).should('be.visible')
    cy.get(this.locator.enrollment.getEmergingdiscount).eq(0).should('be.visible')
    cy.get(this.locator.enrollment.getEmergingdiscountamount).eq(0).should('be.visible')
    cy.get(this.locator.enrollment.discountcategorycbx).eq(0).should('be.visible')
    cy.get(this.locator.enrollment.enrollmentTotal).eq(0).should('be.visible')
    cy.get(this.locator.enrollment.discounttbx).should('be.visible')
    cy.get(this.locator.enrollment.appiybtn).should('be.visible')
    // cy.get(this.locator.enrollment.officalOrSaveOrBack).eq(0).scrollIntoView().should('be.visible')
})
And('User verifies Enrollment Fee', function () {
    cy.get(this.locator.enrollment.getEnrollmentFee).should('contain', '$4,200')
})
And('User verifies Emerging market percentage', function () {
    cy.get(this.locator.enrollment.getEmergingdiscount).eq(0).should('contain', '35%')
})
And('User verifies Emerging market discount', function () {
    cy.get(this.locator.enrollment.getEmergingdiscount).eq(0).should('contain', '35% - Emerging market')
})
And('User verifies Enrollment Total', function () {
    cy.get(this.locator.enrollment.getEmergingdiscountamount).eq(0).should('contain', '- $1,470')
})
And('User clicks on continue button in Fees+Discounts page', function () {
    cy.get(this.locator.enrollment.feesDiscountcontinuebtn).eq(0).click()
})
And('User redirects to Terms+Conditions page successfully', function () {
    cy.wait(2000)
    cy.contains("Review terms and conditions").scrollIntoView().should('be.visible')
})

/////////////////////////////Terms+Conditions//////////////////////////////////////
Given('User is on Terms+Conditions page', function () {
    cy.wait(2000)
    cy.contains("Review terms and conditions").scrollIntoView().should('be.visible')
})

When('User selects Yes or No for Is this participation considered public field', function () {
    cy.get(this.locator.enrollment.publicRbn).eq(1).check()
})
Then('User verifies fields on the Terms+Conditions page', function () {

})
And('User checks the Terms & Conditions checkbox and clicks on continue button', function () {
    cy.get(this.locator.enrollment.publicRbn).eq(2).check()
    cy.wait(1000)
    cy.get(this.locator.enrollment.termContinuebtn).click()
})
And('User redirects to Payment page successfully', function () {
    //  cy.contains("Invoice").scrollIntoView().should('be.visible')
})
//////////////////////////////////////////////////////////////Billing////////////////////////////////////////////////////////////////////////////
Given('User is on Payment page', function () {
    cy.contains('Payment Amount').should('be.visible')
})

And('User verifies fields on the Invoice page', function () {
    cy.contains('Payment Amount').should('be.visible')
    cy.xpath(this.locator.viewbox).should('be.visible')
    cy.xpath(this.locator.saveforlater).should('be.visible')
    cy.xpath(this.locator.paymentbackbtn).should('be.visible')
    cy.xpath(this.locator.wellLogo).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.paymentdiscountcode).should('be.visible')
    cy.xpath(this.locator.paymentApplybtn).should('be.visible')
    cy.xpath(this.locator.Paymentcard).should('be.visible')
    cy.xpath(this.locator.Paymentcheck).should('be.visible')
    cy.xpath(this.locator.Paymentwiretransfer).should('be.visible')
    cy.xpath(this.locator.cardholdername).should('be.visible')
    cy.xpath(this.locator.cardNumber).should('be.visible')
    cy.xpath(this.locator.month).should('be.visible')
    cy.xpath(this.locator.cvcNumber).should('be.visible')
    cy.xpath(this.locator.paynowbtn).should('be.visible')
})
And('User verifies WELL logo on the Invoice page', function () {
    //  cy.xpath(this.locator.wellLogo).scrollIntoView().should('be.visible')
})
And('User verifies Owner Name on the Invoice page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).eq(1).should('contain', this.data.enrollment.ownerOrganization)
})
And('User verifies Owner Email on the Invoice page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).eq(1).should('contain', this.data.email)
})
And('User verifies WELL Address for United States on the Invoice page', function () {
    cy.get(this.locator.enrollment.getWELLAddress).should('contain', "International WELL Building Institute, PBC")
})
And('User verifies country on the Invoice page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).should('contain', "IN")
})
And('User verifies date on the Invoice page', function () {
    cy.get(this.locator.enrollment.getdateOremailOrAdr).eq(0).should('contain', CommonMethod.CurrentDate())
})
And('User verifies Amount on the Invoice page', function () {
    cy.get(this.locator.enrollment.getPaymentAmount).should('contain', '2,730')
})
And('User verifies fields on the Update Invoice page', function () {
})
When('User enters the Card Details', function () {
    cy.xpath(this.locator.cardholdername).type("user")
    cy.wait(2000)
    cy.get('.__PrivateStripeElement:eq(0) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.cardNumber)
    })
    cy.get('.__PrivateStripeElement:eq(1) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.month)
    })
    cy.get('.__PrivateStripeElement:eq(2) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).click().type(this.data.cvcNumber)
    })
})
And('User clicks on pay now and complete enrollment button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.paynowbtn).click({ force: true })
    cy.wait(2000)
})
///////China///////////////////////
And('User enters data to China Country, Street address, City and Postal Code fields', function () {
    cy.get(this.locator.enrollment.CountryOrSector).eq(3).select(this.data.owneraddressCountryChina)
    cy.wait(1000)
    cy.get(this.locator.enrollment.CountryOrSector).eq(4).select(this.data.owneraddressStateChina)
    cy.wait(1000)
    cy.get(this.locator.enrollment.OrgAddress).eq(0).type(this.data.enrollment.streetName)
    cy.get(this.locator.enrollment.OrgCity).eq(0).type(this.data.enrollment.cityName)
    cy.get(this.locator.enrollment.OrgPostalcode).eq(0).type(this.data.enrollment.postalCode)

})
And('User verifies WELL Address for China on the Invoice page', function () {
    cy.get(this.locator.enrollment.getWELLAddress).should('contain', "IWBI China(HK) Limited")
    cy.get(this.locator.enrollment.getWELLAddress).should('contain', "Harbour City, 17 Canton Road, Tsim Sha Tsui,")
})
And('User verifies China country name on the Invoice page', function () {
    cy.wait(3000)
    cy.get(this.locator.enrollment.getdateOremailOrAdr).should('contain', this.data.owneraddressCountryChina)
    cy.xpath(this.locator.Paymentcheck).should('not.exist')
})
And('User verifies  Enrollment Fee for china on the Invoice page', function () {
    cy.get(this.locator.enrollment.getPaymentAmount).should('contain', this.data.enrollment.chinaPaymentAmount)
})
And('Get the WELL Performance ID for China and store into Json', function () {
    cy.wait(5000)
    cy.get('.text-xs.text-gray-500').eq(0).invoke('text').then((ProjId) => {
        var str = ProjId
        var stringArray = str.split(': ')
        var id = stringArray[1].trim()
        cy.readFile('cypress/fixtures/performanceId.json').then((obj) => {
            obj.chinaPerformanceId = id
            cy.writeFile('cypress/fixtures/performanceId.json', obj)
        })
    })
})