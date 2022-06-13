import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'

beforeEach(() => {
    CommonMethod.beforeTest()
})
Given('User logged in to the WELL certified account', function () {
    Login.loginpage()
})
When('User clicks on WELL AP from top menu under Training', function () {
    cy.xpath(this.locator.WellAP.WellAP).click({ force: true })

})
And('User navigate to the WELL Ap list page successfully', function () {
    cy.contains("WELL AP").should('be.visible')
})
And('User verifies the fields on the WELL AP page', function () {
    cy.contains("Take the leap").should('be.visible')
    cy.contains("REGISTER HERE").should('be.visible')
    cy.contains("MAKE THE COMMITMENT").should('be.visible')
    cy.contains("EXAM DASHBOARD").should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPcontinuebtn).should('be.visible')
    cy.wait(3000)
})
And('User clicks on continue button', function () {
    cy.xpath(this.locator.WellAP.WellAPcontinuebtn).click({ force: true })
})
Then('User will be redirected to the WELL AP Exam Registration page successfully', function () {
    cy.contains("WELL AP Exam Registration").should('be.visible')
    cy.wait(2000)
})
/////////////////////////////////////////Exam Registration page/////////////////////////////////////////
Given('User is on WELL AP Exam Registration page', function () {
    cy.contains("Register now").should('be.visible')
    cy.wait(2000)
})
And('User verifies fields on the WELL AP Exam Registration page', function () {
    cy.xpath(this.locator.WellAP.firstname).should('be.visible')
    cy.xpath(this.locator.WellAP.lastname).should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPCountry).should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPStreetaddress).should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPCity).should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPpostalcode).should('be.visible')
    cy.xpath(this.locator.WellAP.WellAPphnumber).should('be.visible')
    cy.xpath(this.locator.WellAP.Continuebtn).should('be.visible')
})
When('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.WellAP.Continuebtn).click({ force: true })
    cy.contains("Country is required.").should('be.visible')
    cy.wait(2000)
})
And('User enter data to First name, Last name, Country, State, Street address, City and Postal Code, Phone number fields', function () {
    cy.xpath(this.locator.WellAP.firstname).clear().type(this.data.WellAP.firstname)
    cy.xpath(this.locator.WellAP.lastname).clear().type(this.data.WellAP.lastname)
    cy.xpath(this.locator.WellAP.WellAPCountry).select(this.data.WellAP.countryName)
    cy.xpath(this.locator.WellAP.WellAPState).select(this.data.WellAP.stateName)
    cy.xpath(this.locator.WellAP.WellAPStreetaddress).type(this.data.WellAP.streetName)
    cy.xpath(this.locator.WellAP.WellAPCity).type(this.data.WellAP.cityName)
    cy.xpath(this.locator.WellAP.WellAPpostalcode).type(this.data.WellAP.postalCode)
    cy.xpath(this.locator.WellAP.WellAPphnumber).type(this.data.WellAP.postalCode)
    cy.wait(2000)
})
And('User clicks on the continue button', function () {
    cy.xpath(this.locator.WellAP.Continuebtn).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the Tell us more about you page successfully', function () {
    cy.contains("Tell us more about you").should('be.visible')
})
/////////////////////////////validate Tell us more about you page////////////////////////
Given('User is on Tell us more about you page', function () {
    cy.contains('Tell us more about you').should('be.visible')
})
And('User verifies fields on the Tell us more about you page', function () {
    cy.xpath(this.locator.WellAP.Jobtitle).should('be.visible')
    cy.xpath(this.locator.WellAP.Organization).should('be.visible')
    cy.xpath(this.locator.WellAP.IndustryorSector).should('be.visible')
    cy.xpath(this.locator.WellAP.Check).should('be.visible')
    cy.xpath(this.locator.WellAP.Gender).should('be.visible')
    cy.xpath(this.locator.WellAP.dateofbirth).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellAP.continuebutton).should('be.visible')
    cy.xpath(this.locator.WellAP.backbtn).should('be.visible')
    cy.wait(2000)
})
When('User clicks on the continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.continuebutton).scrollIntoView().click({ force: true })
    cy.contains('Industry/Sector is required.').should('be.visible')
})
And('User enters data to Job title field', function () {
    cy.xpath(this.locator.WellAP.Jobtitle).type(this.data.WellAP.Jobtitle)
})
And('User selects the Organisation', function () {
    cy.xpath(this.locator.WellAP.Organization).type(this.data.WellAP.Organization)
})
And('User selects the Industry Sector', function () {
    cy.xpath(this.locator.WellAP.IndustryorSector).select(this.data.WellAP.IndustryorSector)
})
And('User checks the designations checkbox', function () {
    cy.xpath(this.locator.WellAP.Check).scrollIntoView().check({ force: true })
})
And('User selects the Gender', function () {
cy.xpath(this.locator.WellAP.Gender).scrollIntoView().check({ force: true })
})
And('User enters the Date of birth', function () {
    cy.xpath(this.locator.WellAP.dateofbirth).click({ force: true })
    cy.xpath(this.locator.WellAP.yearbtn).click({ force: true })
    // cy.xpath(this.locator.WellAP.yearbtn).scrollIntoView().click(this.data.WellAP.year)
    cy.contains('1996').click();
    cy.xpath(this.locator.WellAP.ok).click({ force: true })
    cy.xpath(this.locator.WellAP.ok).click({ force: true })
    cy.wait(2000)

})
And('User click on continue button', function () {
    cy.xpath(this.locator.WellAP.continuebutton).click({ force: true })
    cy.wait(2000)
})
Then('User will be redirected to the Almost finished page successfully', function () {
    cy.contains('Almost finished!').should('be.visible')
})
//////////////////////////validate Almost finished page/////////////////////////////////////
Given('User is on Almost finished page', function () {
    cy.contains('Almost finished!').should('be.visible')
    cy.wait(2000)
})
And('User verifies fields on the Almost finished page', function () {
    cy.xpath(this.locator.WellAP.AboutWellAP).should('be.visible')
    cy.xpath(this.locator.WellAP.primaryreasons).should('be.visible')
    cy.xpath(this.locator.WellAP.ExamLanguage).should('be.visible')
    cy.xpath(this.locator.WellAP.policycheck).should('be.visible')
    cy.xpath(this.locator.WellAP.backbutton).scrollIntoView().should('be.visible')
    cy.xpath(this.locator.WellAP.submit).should('be.visible')
})
When('User clicks on submit button without entering the mandatory fields and verifies error meassage', function () {
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.submit).scrollIntoView().click({ force: true })
    cy.contains('Checkbox is required.').should('be.visible')
})
And('User selects How did you hear about the WELL AP? field', function () {
    cy.xpath(this.locator.WellAP.AboutWellAP).select(this.data.WellAP.AboutWellAP)
})
And('User checks the primary reasons checkbox', function () {
    cy.xpath(this.locator.WellAP.primaryreasons).scrollIntoView().check({ force: true })
})
And('User selects the Exam language', function () {
    cy.xpath(this.locator.WellAP.ExamLanguage).select(this.data.WellAP.ExamLanguage)
})
And('User checks the Exam Appeals Policy checkbox', function () {
    cy.xpath(this.locator.WellAP.policycheck).scrollIntoView().check({ force: true })
    cy.wait(2000)
})
And('User clicks on submit button', function () {
    cy.xpath(this.locator.WellAP.submit).click({ force: true })
    cy.wait(3000)
})
Then('User will be redirected to the Invoice page successfully', function () {
    cy.xpath(this.locator.WellAP.Invoice).should('contain','Invoice')
})

///////////////////////////////////validate Payment page/////////////////////////////////////////////
Given('User is on Invoice page', function () {
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.WellAP).click({ force: true })
    cy.wait(10000)
    cy.xpath(this.locator.WellAP.WellAPcontinuebtn).click({ multiple: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.Invoice).should('contain','Invoice')
})
And('User verifies fields on the Invoice page', function () {
    cy.xpath(this.locator.WellAP.backInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.updateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.downloadInvoice).should('be.visible')
})
And('User verifies Payment status in Invoice page', function () {
    cy.xpath(this.locator.WellAP.Unpaidbtn).should('contain','Unpaid')
    
})
And('User verifies WELL logo on the Invoice page', function () {
    cy.xpath(this.locator.WellAP.wellLogo).scrollIntoView().should('be.visible')
})
And('User verifies WELL Address for United States on the Invoice page', function () {
    cy.wait(2000)
    cy.get(this.locator.WellAP.getWellAddress).scrollIntoView().should('contain', "International WELL Building Institute, PBC")
})
And('User verifies Owner Name on the Invoice page', function () {
    cy.get(this.locator.WellAP.getdateOremailOrAdr).eq(1).should('contain', this.data.WellAP.Organization)
})
And('User verifies Owner Email on the Invoice page', function () {
    cy.get(this.locator.WellAP.getdateOremailOrAdr).eq(1).should('contain', this.data.email)
})
And('User verifies Address on the Invoice page', function () {
    cy.xpath(this.locator.WellAP.getInvoiceOwnerAddress).should('contain', this.data.streetName)
})
And('User verifies country on the Invoice page', function () {
    cy.get(this.locator.WellAP.getdateOremailOrAdr).should('contain', "IN")
})
And('User verifies Amount on the Invoice page', function () {
    cy.get(this.locator.WellAP.getPaymentAmount).should('contain', '299')
})
And('User verifies date on the Invoice page', function () {
    cy.get(this.locator.WellAP.getdateOremailOrAdr).eq(0).should('contain', CommonMethod.CurrentDate())
})
And('User verifies fields on the Payment Options', function () {
    cy.xpath(this.locator.cardrbtn).should('be.visible')
    cy.xpath(this.locator.checkrbtn).should('be.visible')
    cy.xpath(this.locator.wireTransferrbtn).should('be.visible')
    cy.xpath(this.locator.cardholdername).should('be.visible')
    cy.xpath(this.locator.discount).should('be.visible')
    cy.xpath(this.locator.applyDiscount).should('be.visible')
    cy.wait(2000)
    cy.get('.__PrivateStripeElement:eq(0) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).should('be.visible')
    })
    cy.get('.__PrivateStripeElement:eq(1) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).should('be.visible')
    })
    cy.get('.__PrivateStripeElement:eq(2) > iframe').then(function ($ele) {
        const iframe = $ele.contents().find('body')
        cy.wrap(iframe).should('be.visible')
    })

})

///////////////////////////////////Update Invoice page validation//////////////////////////////////////
Given('User navigate to the Update Invoice page', function () {
    cy.xpath(this.locator.WellAP.updateInvoice).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.Invoice).should('contain','Invoice')
})
And('User verifies fields on the Update Invoice page', function () {
    cy.xpath(this.locator.WellAP.nameupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.emailupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.OrganizationupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.countryupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.stateupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.streetaddressupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.cityaddressupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.postalcodeupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.purchaseorderupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.notesupdateInvoice).should('be.visible')
    cy.xpath(this.locator.WellAP.Resetfieldsbtn).should('be.visible')
    cy.xpath(this.locator.WellAP.UpdateInvoicebtn).should('be.visible')
    cy.wait(2000)
})
When('User update Invoice fields', function () {
    cy.xpath(this.locator.WellAP.purchaseorderupdateInvoice).clear().type(this.data.WellAP.Testdata)
})
And('User clicks on Update Invoice button', function () {
    cy.xpath(this.locator.WellAP.UpdateInvoicebtn).click({ force: true })
})
Then('User navigate to the Invoice page', function () {
    cy.contains("Invoice").should('be.visible')
    cy.wait(3000)
})

////////////////////////////////////Billing for WELL AP Exam Registration////////////////////////////
Given('User is on the Invoice page', function () {
    Login.loginpage()
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.WellAP).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.WellAP.WellAPcontinuebtn).click({ force: true })
    cy.xpath(this.locator.WellAP.Invoice).should('contain','Invoice')
    cy.wait(2000)
})
When('User enters the Card Details', function () {
    cy.xpath(this.locator.cardholdername).type("user")
    cy.wait(4000)
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
    cy.wait(2000)
})
And('User clicks on pay now button', function () {
    cy.xpath(this.locator.WellAP.Paynowbtn).click({ force: true })
    cy.wait(5000)
})
Then('User will be redirected to the Your Exam Details page successfully', function () {
    cy.contains("Your Exam Details").should('be.visible')
})
//////////////////////////////////////Exam Details page validation/////////////////////////////////
Given('User is on the Your Exam Details page', function () {
    cy.contains("Your Exam Details").should('be.visible')
})
And('User verifies fields on the Exam Details page', function () {
    cy.contains("Your Exam Details").should('be.visible')
    cy.contains("Study Materials").should('be.visible')
    cy.xpath(this.locator.WellAP.EligibilityID).should('be.visible')
    cy.xpath(this.locator.WellAP.Examlanguage).should('contain','English')
    // cy.xpath(this.locator.WellAP.examregPrometric).should('contain','submitted')
    cy.contains("Download").scrollIntoView().should('be.visible')
    
})
