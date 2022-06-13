import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
/// <reference types="cypress" />
beforeEach(() => {
    CommonMethod.beforeTest()
})
const project = { count: '' }
const country = { Name: '' }
//////////////////////////////v2 Project Creation page///////////////////////////////////////
Given('User navigate to the WELL v2 Project Lists page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.xpath(this.locator.startav2projectbtn).click({ force: true })
})
When('User click on Start a v2 project button and verifies Create form fields', function () {
    cy.contains("Start a Project").should('be.visible')
    cy.xpath(this.locator.startProjectcontinuebtn).click({ force: true })
    cy.contains('NAME YOUR PROJECT').should('be.visible')
    cy.contains('PROJECT DETAILS').should('be.visible')
    cy.contains('CHOOSE A PROGRAM').should('be.visible')
    cy.contains('Back to list').should('be.visible')
    cy.xpath(this.locator.projectnickname).should('be.visible')
    cy.xpath(this.locator.nicknameContinuebtn).should('be.visible')
})
And('User clicks on continue button without entering the mandatory fields and verifies error meassage', function () {
    cy.xpath(this.locator.nicknameContinuebtn).click({ force: true })
    cy.contains('Project nickname is required.').should('be.visible')
})
And('User enter data to Project name field', function () {
    let r = Math.random().toString(36).slice(-5)
    cy.xpath(this.locator.projectnickname).type(this.data.projectName + r)
    cy.wait(2000)

})
And('User clicks on continue button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.nicknameContinuebtn).click({ force: true })
})
Then('User will be redirected to project location form page successfully', function () {
    cy.xpath(this.locator.tickMarkProjectName).should('be.visible')
})
And('User Verifies the added project name by clicking on back button', function () {
    cy.xpath(this.locator.locationbackbtn).click({ force: true })
    // cy.wait(2000)
    // cy.contains(this.data.projectName).should('be.visible', { force: true })
})
///////////////////////////project location page////////////////////////////////////////////////////
Given('User navigates to the project location page', function () {
    cy.xpath(this.locator.nicknameContinuebtn).contains('Continue').click({ force: true })

})
And('User verifies the project location page fields', function () {
    cy.contains('NAME YOUR PROJECT').should('be.visible')
    cy.contains('PROJECT LOCATION').should('be.visible')
    cy.contains('PROJECT DETAILS').should('be.visible')
    cy.contains('CHOOSE A PROGRAM').should('be.visible')
    cy.contains('Back to list').should('be.visible')
    cy.xpath(this.locator.locationCountry).should('be.visible')
    cy.xpath(this.locator.locationStreet).should('be.visible')
    cy.xpath(this.locator.locationCity).should('be.visible')
    cy.xpath(this.locator.locationPostalcode).should('be.visible')
    cy.xpath(this.locator.locationContinuebtn).should('be.visible')
})
When('User clicks on continue button without entering the mandatory fields for location and verifies error message', function () {
    cy.xpath(this.locator.locationContinuebtn).click({ force: true })
    cy.contains('Country is required').should('be.visible')
    cy.contains('Street is required.').should('be.visible')
    cy.contains('City is required.').should('be.visible')
    cy.contains('Postal Code is required.').should('be.visible')
})
And('User enters data to Country, State, Street address, City and Postal Code fields', function () {
    cy.xpath(this.locator.locationCountry).select(this.data.countryName)
    cy.wait(2000)
    cy.xpath(this.locator.locationState).select(this.data.stateName)
    cy.xpath(this.locator.locationStreet).type(this.data.streetName)
    cy.xpath(this.locator.locationCity).type(this.data.cityName)
    cy.xpath(this.locator.locationPostalcode).type(this.data.postalCode)
})
And('User clicks on continue button for Project location', function () {
    cy.xpath(this.locator.locationContinuebtn).click({ force: true })
})
Then('User will be redirected to the project details form page successfully', function () {
    cy.xpath(this.locator.tickMarkProjectLocation).should('be.visible')
})
And('User verifies the added project location by clicking on back button', function () {
    cy.xpath(this.locator.areabackbtn).click()
    cy.xpath(this.locator.locationCountry).invoke('val').then((countryName) => {
        expect(countryName).to.equal(this.data.countryName)
    })
    cy.xpath(this.locator.locationState).invoke('val').then((stateName) => {
        expect(stateName).to.equal(this.data.stateName)
    })
    cy.xpath(this.locator.locationStreet).invoke('val').then((streetName) => {
        expect(streetName).to.equal(this.data.streetName)
    })
    cy.xpath(this.locator.locationCity).invoke('val').then((cityName) => {
        expect(cityName).to.equal(this.data.cityName)
    })
    cy.xpath(this.locator.locationPostalcode).invoke('val').then((postalCode) => {
        expect(postalCode).to.equal(this.data.postalCode)
    })
})
//////////////////////////////Project Area Size////////////////////////////////////////

Given('User navigates to the WELL v2 Project details page', function () {
    cy.wait(2000)
    cy.xpath(this.locator.locationContinuebtn).click({ force: true })
})
And('User verifies the Project Area Size in sqm by entering the sqft value', function () {
    cy.contains('NAME YOUR PROJECT').should('be.visible')
    cy.contains('PROJECT LOCATION').should('be.visible')
    cy.contains('PROJECT DETAILS').should('be.visible')
    cy.contains('CHOOSE A PROGRAM').should('be.visible')
    cy.contains('Back to list').should('be.visible')
    cy.xpath(this.locator.areaSize).should('be.visible')
    cy.xpath(this.locator.areaContinuebtn).should('be.visible')

})
When('User clicks on continue button without entering the mandatory fields for area size and verifies error message', function () {
    cy.xpath(this.locator.areaContinuebtn).click()
    cy.contains('Number is required.').should('be.visible')
})
And('User enter data to Project area field and clicks on continue button', function () {
    cy.xpath(this.locator.areaSize).type(this.data.areaSize)
    cy.xpath(this.locator.areaContinuebtn).click()
})
Then('User will be redirected to the project details space type form page successfully', function () {
    cy.contains('Space Types').should('be.visible')
})
And('User verifies the added Project Area Size by clicking on back button', function () {
    cy.xpath(this.locator.spacetypebackbtn).click()
    cy.xpath(this.locator.areaSize).invoke('val').then((areaSize) => {
        expect(areaSize).to.equal(this.data.areaSize)
    })
})
//////////////////////////////////Project space type///////////////////////////////////////////

Given('User navigates to the WELL v2 Project space type', function () {
    cy.xpath(this.locator.areaContinuebtn).click()
})
And('User verifies the Project space type fields', function () {
    cy.contains('NAME YOUR PROJECT').should('be.visible')
    cy.contains('PROJECT LOCATION').should('be.visible')
    cy.contains('PROJECT DETAILS').should('be.visible')
    cy.contains('CHOOSE A PROGRAM').should('be.visible')
    cy.contains('Back to list').should('be.visible')
    cy.xpath(this.locator.spaceType).should('be.visible')
})
When('User clicks on continue button without entering the mandatory fields for space type and verifies error message', function () {
    cy.wait(2000)
    cy.xpath(this.locator.spacetypeContinuebtn).click({ force: true })
    cy.xpath(this.locator.spacetypeContinuebtn).scrollIntoView()
    cy.xpath(this.locator.getSpaceTypeErrorMessage).contains('You need at least 1 checkbox.').should('be.visible')
})
And('User checks the multiple checkbox space type option and click on continue button', function () {
    cy.wait(2000)
    cy.xpath(this.locator.spaceType).check({ force: true })
    cy.xpath(this.locator.spacetypeContinuebtn).click({ force: true })
})
Then('User will be redirected to the WELL Program page successfully', function () {
    cy.xpath(this.locator.tickMarkProjectDetails).should('be.visible')
})
/////////////////////////////////choose a program page////////////////////////////////////////////////////
Given('User navigates to the choose a program page', function () {
    cy.xpath(this.locator.wellCertification).should('be.visible')
})
And('User verifies the choose a program page fields', function () {
    cy.contains('NAME YOUR PROJECT').should('be.visible')
    cy.contains('PROJECT LOCATION').should('be.visible')
    cy.contains('PROJECT DETAILS').should('be.visible')
    cy.contains('CHOOSE A PROGRAM').should('be.visible')
    cy.contains('Back to list').should('be.visible')
})
When('User selects the well certification program for V2 project', function () {
    cy.wait(2000)
    cy.xpath(this.locator.wellCertification).click()
})

Then('User verifies the choose a program by clicking on back button', function () {
    cy.xpath(this.locator.chooseOwnerBackbtn).click()
    cy.xpath(this.locator.wellCertification).should('be.visible')
})
//////////////////////////////////////choose a program ownership//////////////////////////////////////////////////
Given('User navigates to the choose a program ownership type page', function () {
    cy.xpath(this.locator.wellCertification).click()
})
And('User verifies the choose a program ownership type page fields', function () {
    cy.contains('The project is a space I lease').should('be.visible')
    cy.contains('The project is a space I own and occupy').should('be.visible')
    cy.xpath(this.locator.ownershipOflocation).should('be.visible')
    cy.xpath(this.locator.ownershipContinuebtn).should('be.visible')
})
When('User clicks on continue button without entering the mandatory fields for ownership type and verifies error message', function () {
    cy.xpath(this.locator.ownershipContinuebtn).click()
    cy.contains('Ownership type is required.').should('be.visible')
})
And('User selects the ownership type radio button and click continue button', function () {
    cy.xpath(this.locator.ownershipOflocation).check()
    cy.xpath(this.locator.ownershipContinuebtn).click()
})

Then('User verifies the project creation', () => {
   // cy.contains('Creating your new project account now...').should('be.visible')
})
//////////////////////////createproject//////////////////////////////////
Given('User navigate to the WELL V2 Creation page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.xpath(this.locator.startav2projectbtn).click({ force: true })
    cy.contains('Dynamic. Resilient. Validated.').should('be.visible')
    cy.xpath(this.locator.startProjectcontinuebtn).click()
})
Given('User navigate to the WELL Certification Creation page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.contains("Apply").should('be.visible').click({ force: true })
    cy.xpath(this.locator.getProjectCount).scrollIntoView()
    cy.xpath(this.locator.getProjectCount).invoke('text').then((projectCount) => {
        project.count = projectCount
    })
    cy.xpath(this.locator.startav2projectbtn).scrollIntoView()
    cy.xpath(this.locator.startav2projectbtn).click({ force: true })
    cy.contains('Dynamic. Resilient. Validated.').should('be.visible')
    cy.xpath(this.locator.startProjectcontinuebtn).click()
})
And('User navigate to the WELL v2 Project location page', () => {
    cy.contains('Where is your project located').should('be.visible')
})

Given('User navigate to the WELL v2 Project details page', () => {
    cy.contains('What is the size of your project').should('be.visible')
})

And('User navigates to the WELL v2 Project program page', () => {
    cy.contains('Which program is best for your project').should('be.visible')
})
And('User selects the program for V2 project', function () {
    cy.xpath(this.locator.wellCertification).click()
})
And('User redirect to the Dashboard page verifies', function () {
    cy.xpath(this.locator.docsubUpdatebtn).should('be.visible')
})
Then('Project Created and user redirect to the Project Dashboard page', () => {
    cy.contains('Provided estimated date of document submission').should('be.visible')
})
And('Get the WELL V2 project ID and store into Json', () => {
    cy.get('.text-xs.text-gray-500').eq(0).invoke('text').then((ProjId) => {
        var id = ''
        var str = ProjId
        var stringArray = str.split(': ')
        var id = stringArray[1].trim()
        cy.readFile('cypress/fixtures/V2ProjectId.json').then((obj) => {
            obj.WellV2Project = id
            cy.writeFile('cypress/fixtures/V2ProjectId.json', obj)
        })
        cy.contains(id).should('be.visible')
    })
})
/////////////////////SpecialCountry//////////////////////////////////////////
And('User enters data to Country {string} , State {string} , Street address, City and Postal Code fields', function (Country, State) {
    country.Name = Country
    cy.xpath(this.locator.locationCountry).select(Country)
    cy.wait(2000)
    if (country.Name == 'China') {
        cy.xpath(this.locator.locationState).select(State)
    }
    else if (country.Name == 'Hong Kong, China') {
        cy.xpath(this.locator.locationState).select(State)
    }
    cy.xpath(this.locator.locationStreet).type(this.data.streetName)
    cy.xpath(this.locator.locationCity).type(this.data.cityName)
    cy.xpath(this.locator.locationPostalcode).type(this.data.postalCode)
})
Then('Get the V2 project ID for special country and store into Json', () => {
    cy.contains('Next Steps').should('be.visible')
    cy.get('.text-xs.text-gray-500').eq(0).invoke('text').then((ProjId) => {
        var id = ''
        var str = ProjId
        var stringArray = str.split(': ')
        var id = stringArray[1].trim()
        var countryNam = country.Name
        if (countryNam == 'China') {
            cy.readFile('cypress/fixtures/V2ProjectId.json').then((obj) => {
                obj.ChinaV2Project = id
                cy.writeFile('cypress/fixtures/V2ProjectId.json', obj)
            })
        } else if (countryNam == 'Hong Kong, China') {
            cy.readFile('cypress/fixtures/V2ProjectId.json').then((obj) => {
                obj.HongKongV2Project = id
                cy.writeFile('cypress/fixtures/V2ProjectId.json', obj)
            })
        }
        else if (countryNam == 'Macao, China') {
            cy.readFile('cypress/fixtures/V2ProjectId.json').then((obj) => {
                obj.MacaoV2Project = id
                cy.writeFile('cypress/fixtures/V2ProjectId.json', obj)
            })
        }
        cy.contains(id).should('be.visible')
    })
})
//////////////////WellCore/////////////////////////////////
And('User selects the program for WELL Core certification', function () {
    cy.xpath(this.locator.wellcorecertification).click()
})
And('Get the WELL V2 core project ID and store into Json', () => {
    cy.contains('Next Steps').should('be.visible')
    cy.get('.text-xs.text-gray-500').eq(0).invoke('text').then((ProjId) => {
        var id = ''
        var str = ProjId
        var stringArray = str.split(': ')
        var id = stringArray[1].trim()
        cy.readFile('cypress/fixtures/V2ProjectId.json').then((obj) => {
            obj.WellCoreV2Project = id
            cy.writeFile('cypress/fixtures/V2ProjectId.json', obj)
        })
        cy.contains(id).should('be.visible')
    })
})
/////////////////backlist//////////////////////////////////
Then('User verifies by click on back to list button', function () {
    cy.xpath(this.locator.Backlist).click({ force: true })
    cy.xpath(this.locator.getProjectCount).scrollIntoView()
    cy.xpath(this.locator.getProjectCount).invoke('text').then((getProjectCount) => {
        expect(project.count).to.equal(getProjectCount)
    })
})
//////////////////////////////Estimate Date/////////////////////////////////////
Given('User navigates to the Dashboard page by selecting the project Id {string} from Project list by logging in to the wellcertified', function (V2ProjectID) {
    Login.loginpage()
    cy.xpath(this.locator.Wellcertification).click({ force: true })
    cy.contains('Apply').click({ force: true })
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
                expect(status).to.equal("Not Registered")
            })
            cy.contains(this.projectid.WellV2Project).click({ force: true })
        }
        else if (V2ProjectID == 'WellCoreV2Project') {
            cy.xpath(this.locator.id).type(this.projectid.WellCoreV2Project)
            cy.contains('Apply').click({ force: true })
            cy.wait(2000)
            cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
                expect(projectidcompare.trim()).to.equal(this.projectid.WellV2Project)
            })
            cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
                expect(status).to.equal("Not Registered")
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
                expect(status).to.equal("Not Registered")
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
                expect(status).to.equal("Not Registered")
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
                expect(status).to.equal("Not Registered")
            })
            cy.contains(this.projectid.MacaoV2Project).click({ force: true })
        }
        cy.contains('Dashboard').should('be.visible')
        cy.contains('Dashboard').should('be.visible').click({ force: true })
    })
})
When('User enters Estimate Date of Document submission', function () {
    cy.contains('Provided estimated date of document submission').should('be.visible')
    cy.xpath(this.locator.docsubUpdatebtn).click()
    cy.xpath(this.locator.docsubOkbtn).click()
    cy.xpath(this.locator.docsubConfirmbtn).click()
    cy.xpath(this.locator.continuethejourneybtn).click()
})
Then('User redirects to the Dashboard page', function () {
    cy.contains('Dashboard').should('be.visible')
})
And('User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing, Billing and Enroll', function () {
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Team').should('be.visible')
    cy.contains('Alternatives').should('be.visible')
    cy.contains('Overview').should('be.visible')
    cy.contains('Edit').should('be.visible')
    cy.contains('Billing').should('be.visible')
    cy.contains('Enroll').should('be.visible')
})