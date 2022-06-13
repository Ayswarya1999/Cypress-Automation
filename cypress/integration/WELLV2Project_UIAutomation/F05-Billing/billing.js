import 'cypress-iframe'
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
/////////////////////////////Verify the Billing page//////////////////////////////////////////
Given('User navigate to the WELL Certification enrollments list page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
})
Given('User navigate to the Billing page by logging in to wellcertified', function () {
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
            expect(status).to.equal("Registration in progress")
        })

        cy.contains(this.projectid.WellV2Project).click({ force: true })
    })
})
When('User search for the project by project ID', function () {
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.id).click({ force: true })
        cy.xpath(this.locator.id).type(this.projectid.WellV2Project)
    })
})
When('User search for the WELL V2 core project by project ID', function () {
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.id).click({ force: true })
        cy.xpath(this.locator.id).type(this.projectid.WellCoreV2Project)
    })
})
And('User clicks on the Apply button', function () {
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
        expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
    })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
        expect(status).to.equal("Registration in progress")
    })
    cy.contains(this.projectid.WellV2Project).click({ force: true })
})
And('User clicks on the Apply button for the WELL V2 core project', function () {
    cy.contains('Apply').click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
        expect(projectidcompare.trim()).to.equal(this.projectid.WellCoreV2Project)
    })
    cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
        expect(status).to.equal("Registration in progress")
    })
    cy.contains(this.projectid.WellCoreV2Project).click({ force: true })
})

When('User clicks on Billing tab and verifies the fields', function () {
    cy.contains('Billing').should('be.visible').click({ force: true })
})
Then('User will be redirected to the WELL Certification Billing page successfully', function () {
    cy.contains('Billing').should('be.visible')
})
And('User verifies fields on the Billing page', function () {
    cy.contains(this.data.countryAmount).should('be.visible')
    // cy.contains(this.data.projectName).should('be.visible')
    cy.contains('UNPAID').should('be.visible')
    cy.xpath(this.locator.downloadInvoice).should('be.visible')
})
And('User verifies fields on the Billing page for special country', function () {
    cy.contains(this.data.speicalCountryAmount).should('be.visible')
    //  cy.contains(this.data.projectName).should('be.visible')
    cy.contains('UNPAID').should('be.visible')
    cy.xpath(this.locator.downloadInvoice).should('be.visible')
})
///////////////////////////////Verify the Invoice page///////////////////////////////////////////////////
Given('User navigate to the Invoice page', function () {
    cy.xpath(this.locator.payNow).click({ force: true })
})

Then('User will be redirected to the WELL Certification Invoice page successfully', function () {
    cy.xpath(this.locator.getInvoice).should('contain', "Invoice")
})

And('User verifies fields on the Invoice page', function () {
    cy.xpath(this.locator.backInvoice).should('be.visible')
    cy.xpath(this.locator.updateInvoice).should('be.visible')
    cy.xpath(this.locator.downloadBilling).should('be.visible')
})
And('User verifies WELL Address for United States on the Invoice page', function () {
    cy.xpath(this.locator.getWellAddress).should('contain', this.data.ukAddress1)
    cy.xpath(this.locator.getWellAddress).should('contain', this.data.ukAddress2)
    cy.xpath(this.locator.getWellAddress).should('contain', this.data.ukAddress3)
    cy.xpath(this.locator.getWellAddress).should('contain', this.data.ukAddress4)
})

And('User verifies WELL logo on the Invoice page', function () {
    cy.xpath(this.locator.logo).should('be.visible')
})
And('User verifies Project Name on the Invoice page', function () {
    //  cy.contains(this.data.projectName).should('be.visible')
})
And('User verifies Owner Email on the Invoice page', function () {
    cy.xpath(this.locator.getInvoiceEmail).should('contain', this.data.email)
})
And('User verifies Owner Name on the Invoice page', function () {
    cy.xpath(this.locator.getInvoiceOwnerName).should('contain', this.data.ownerName)
})
And('User verifies country on the Invoice page', function () {
    cy.xpath(this.locator.getInvoiceOwnerAddress).should('contain', this.data.owneraddressCountryIndia)
})
And('User verifies Address on the Invoice page', function () {
    cy.xpath(this.locator.getInvoiceOwnerAddress).should('contain', this.data.streetName)
})

And('User verifies date on the Invoice page', function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('default', { month: 'short' })
    var yyyy = today.getFullYear();
    today = mm + ' ' + dd + ',' + ' ' + yyyy;
    document.write(today);
    cy.xpath(this.locator.InvoiceDate).invoke('text').then((getDate) => {
        var actualdate = ''
        // var str = getDate.replaceAll(",", "");
        var actualdate = getDate.trim()
        expect(today).to.equal(actualdate)
    })
})
And('User verifies fields on the Payment Options', function () {
    cy.xpath(this.locator.cardrbtn).should('be.visible')
    cy.xpath(this.locator.checkrbtn).should('be.visible')
    cy.xpath(this.locator.wireTransferrbtn).should('be.visible')
    cy.contains(this.data.countryAmount).should('be.visible')
    //  cy.contains(this.data.projectName).should('be.visible')
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
And('User verifies Amount on the Invoice page', function () {
    cy.contains(this.data.countryAmount).should('be.visible')
})
/////////////////////////////Update Invoice///////////////////////////////////////////
Given('User navigate to the Update Invoice page', function () {
    cy.xpath(this.locator.updateInvoice).click({ force: true })
})

Then('User will be redirected to the WELL Certification Update Invoice page successfully', function () {
    cy.xpath(this.locator.getInvoice).should('contain', "Invoice")
})
And('User verifies fields on the Update Invoice page', function () {
    cy.xpath(this.locator.countryUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.StateUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.StreetaddressUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.CityUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.PostalCodeUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.PurchaseOrderUpdateInvoice).should('be.visible')
    cy.xpath(this.locator.updateInvoicebtn).should('be.visible')
    cy.xpath(this.locator.resetInvoicebtn).should('be.visible')
    cy.xpath(this.locator.updateInvoicebtn).should('be.visible').click({ force: true })
})
//////////////////Receipt//////////////////////////
Given('User Verifies the Receipt page by clicking on back button', function () {
    cy.contains('Receipt').should('be.visible')
    cy.xpath(this.locator.reciptBackbtn).click({ force: true })
})
Then('User will be redirected to WELL Certification Receipt page successfully', function () {
    cy.contains('Receipt').should('be.visible')
})
And('User verifies fields on the Receipt page', function () {
    cy.contains('Receipt').should('be.visible')
    cy.contains(this.data.countryAmount).should('be.visible')
    cy.contains('paid').should('be.visible')
    cy.xpath(this.locator.downloadReceipts).should('be.visible')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('default', { month: 'short' })
    var yyyy = today.getFullYear();
    today = mm + ', ' + dd + ' ' + yyyy;
    document.write(today);
    cy.xpath(this.locator.reciptDate).invoke('text').then((getDate) => {
        var newsts = ''
        // var str = getDate.replaceAll(",", "");
        var newsts = getDate.trim()
        expect(today).to.equal(newsts)
    })
})
/////////////////////Billing///////////////////////////////////////////////////
Given('User navigates to the Billing page by selecting the project Id {string} from project list by logging in to the wellcertified', function (V2ProjectID) {
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
                expect(status).to.equal("Registration in progress")
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
                expect(status).to.equal("Registration in progress")
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
                expect(status).to.equal("Registration in progress")
            })
            cy.contains(this.projectid.MacaoV2Project).click({ force: true })
        }
    })
    cy.wait(2000)
    cy.contains('Billing').should('be.visible').click({ force: true })
})

And('User clicks on the Apply button and verifies the selected project in the dashboard', function () {
    cy.contains('Apply').click({ force: true })
    cy.contains(this.projectid.projectId).click({ force: true })
})
When('User clicks on Billing tab and verifies the elements', function () {
    cy.contains('Billing').should('be.visible').click({ force: true })
    cy.contains(this.data.countryAmount).should('be.visible')
    // cy.contains(this.data.projectName).should('be.visible')
    cy.contains('UNPAID').should('be.visible')
    cy.xpath(this.locator.downloadInvoice).should('be.visible')
})
And('User clicks on pay now button without entering the mandatory fields for Card Details and verifies error message', function () {
    cy.xpath(this.locator.payNow).click({ force: true })
    cy.xpath(this.locator.downloadBilling).should('be.visible')
    cy.contains().should('be.visible')
    cy.contains().should('be.visible')
    cy.contains('this.projectid.projectId').should('be.visible')
    cy.contains(this.data.countryAmount).should('be.visible')
})

And('User clicks on the Apply button and verifies the selected project in the dashboard', function () {
    cy.contains('Apply').click({ force: true })
    cy.contains(this.projectid.projectId).click({ force: true })
})
And('User clicks on Billing tab', function () {
    cy.contains('Billing').should('be.visible').click({ force: true })
    cy.contains('UNPAID').should('be.visible')
    cy.xpath(this.locator.payNow).should('be.visible')
})
And('User clicks on pay now button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.payNow).should('be.visible')
    cy.xpath(this.locator.payNow).click({ force: true })
})
And('User enters the Card Details', function () {
    cy.xpath(this.locator.cardholdername).type(this.data.cardHolderName)
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
And('User clicks on pay now button and verifies the Receipt for the payment', function () {
    cy.xpath(this.locator.payNowbtn).click({ force: true })
    cy.contains('Receipt').should('be.visible')
    cy.wait(2000)
})
Then('User will be redirected to the WELL Certification Receipt page successfully', function () {
    cy.wait(1000)
    cy.contains('Receipt').should('be.visible')
    cy.contains(this.data.countryAmount).should('be.visible')
    cy.wait(2000)

})
And('User verifies the payment status by clicking on back button', function () {
    cy.contains('paid').should('be.visible')
})
And('User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing and Billing', function () {
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Health-Safety Rating').should('be.visible')
    cy.contains('Team').should('be.visible')
    cy.contains('Alternatives').should('be.visible')
    cy.contains('Overview').should('be.visible')
    cy.contains('Edit').should('be.visible')
    cy.contains('Pricing').should('be.visible')
    cy.contains('Billing').should('be.visible')
    cy.xpath(this.locator.enrolllinkbtn).contains('Enroll').should('not.exist')
})
/////////////////////////////Paying Bill/////////////////////////////////

When('User clicks on pay now button for special country', function () {
    cy.xpath(this.locator.downloadConfirmAgreement).should('be.visible')
    cy.xpath(this.locator.downloadConfirmAgreementWith).should('be.visible')
    cy.xpath(this.locator.specialPaybtn).should('be.visible').click({ force: true })
})
And('User verifies invoice form fields', function () {
    cy.xpath(this.locator.cardrbtn).should('be.visible')
    cy.xpath(this.locator.Specialcheckrbtn).should('not.exist')
    cy.contains(this.data.speicalCountryAmount).should('be.visible')
    // cy.contains(this.data.projectName).should('be.visible')
    cy.xpath(this.locator.cardholdername).should('be.visible')
    cy.xpath(this.locator.discount).should('be.visible')
    cy.xpath(this.locator.applyDiscount).should('be.visible')
})
And('User Verifies the Receipt by clicking on back button', function () {
    cy.contains('Receipt').should('be.visible')
    cy.contains(this.data.speicalCountryAmount).should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.reciptBackbtn).click({ force: true })
    cy.contains('paid').should('be.visible')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.toLocaleString('default', { month: 'short' })
    var yyyy = today.getFullYear();
    today = mm + ', ' + dd + ' ' + yyyy;
    document.write(today);
    cy.xpath(this.locator.reciptDate).invoke('text').then((getDate) => {
        var newsts = ''
        // var str = getDate.replaceAll(",", "");
        var newsts = getDate.trim()
        expect(today).to.equal(newsts)
    })
})
///////////Sector///////////////////////////////////////////////////////////////////////////////
And('User verifies fields on the Billing page for sector discount', function () {
    cy.contains(this.data.countryAmount).should('be.visible')
    //  cy.contains(this.data.projectName).should('be.visible')
    cy.contains('UNPAID').should('be.visible')
    cy.xpath(this.locator.downloadInvoice).should('be.visible')
})