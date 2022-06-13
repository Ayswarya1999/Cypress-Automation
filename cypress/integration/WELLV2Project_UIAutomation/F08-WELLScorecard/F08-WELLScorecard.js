
import CommonMethod from '../../../support/CommonMethod'
import Login from '../../../support/Login'
beforeEach(() => {
    CommonMethod.beforeTest()
})
///////////////Verifying WELL Scorecard tab in the left panel/////////////////////
Given('User navigates to the Dashboard page by logging in to wellcertified', function () {
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
    })
})
And('User verifies the Start Building button in Dashbaord CTA', function () {
    cy.wait(2000)
    cy.xpath(this.locator.Startbuildingbtn).should('be.visible')
})
When('User clicks on Start Building button in Dashbaord CTA', function () {
    cy.xpath(this.locator.Startbuildingbtn).click({ force: true })
})
Then('User redirects to the WELL Scorecard page', function () {
    cy.wait(2000)
    cy.contains('WELL Scorecard').should('be.visible')
})
////////////VerifyingContinueCustomizingbuttoninDashboardCTA//////////////

And('User verifies the Continue Customizing button in Dashboard CTA', function () {
    cy.wait(2000)
    cy.xpath(this.locator.ContinueCustomizingbtn).should('be.visible')
})
When('User clicks on Continue Customizing button in Dashboard CTA', function () {
    cy.xpath(this.locator.ContinueCustomizingbtn).click({ force: true })
})
Then('User redirects to the WELL Scorecard page', function () {
    cy.wait(2000)
    cy.contains('Scorecard').should('be.visible')
})

////////////////Verifying WELL Scorecard page fields////////////////////////////

And('User verifies Scorecard page fields', function () {
    cy.wait(2000)
    cy.contains('All').should('be.visible')
    cy.contains('Air').should('be.visible')
    cy.contains('Water').should('be.visible')
    cy.contains('Nourishment').should('be.visible')
    cy.contains('Light').should('be.visible')
    cy.contains('Movement').should('be.visible')
    cy.contains('Thermal Comfort').should('be.visible')
    cy.contains('Sound').should('be.visible')
    cy.contains('Materials').should('be.visible')
    cy.contains('Mind').should('be.visible')
    //cy.contains('Community').should('be.visible', { force: true })
    // cy.contains('Innovation').should('be.visible', { force: true })
    cy.contains('WELL v2, Q4 2021').should('be.visible', { force: true })
    cy.xpath(this.locator.WELLScorecardFilters).should('be.visible')
    cy.xpath(this.locator.toggleMetricbtn).should('be.visible')
    cy.xpath(this.locator.showorhideBanner).should('be.visible')
    cy.xpath(this.locator.expandorcollapseRows).should('be.visible')
    cy.xpath(this.locator.downloadbtn).should('be.visible')
    cy.xpath(this.locator.targetedPoints).should('be.visible')

})
/////////////Verifying Serach functionality in WELLs Scorecard page/////////////////////
Given('User navigates to WELL Scorecard page', function () {
    cy.wait(2000)
    cy.contains('Scorecard').should('be.visible')
})
When('User enter the scorecard part name in the search field', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardSearch).click()
    cy.xpath(this.locator.scorecardSearch).type(this.data.airpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.airpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.waterpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.waterpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.nourishmentpart)
    cy.xpath(this.locator.scorecardPartSearch).click().invoke('text').then((part) => {
        expect(part).to.equal(this.data.nourishmentpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.lightpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.lightpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.movementpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.movementpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.thermalcomfortpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.thermalcomfortpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.soundpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.soundpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.materialspart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.materialspart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.mindpart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.mindpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.communitypart)
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.communitypart)
    })
    cy.xpath(this.locator.scorecardSearch).clear().type(this.data.innovationpart)

})
Then('User verifies the serach result', function () {
    cy.xpath(this.locator.scorecardPartSearch).invoke('text').then((part) => {
        expect(part).to.equal(this.data.innovationpart)
    })
    cy.xpath(this.locator.scorecardSearch).clear()
})

/////////////Verifying Show/Hide Banner in WELLs Scorecard page////////////////////
When('User clicks on ShowHide Banner button', function () {
    cy.xpath(this.locator.scorecardbanner).should('be.visible')
    cy.wait(5000)
    cy.xpath(this.locator.showorhideBanner).dblclick({ force: true })
})
Then('User verifies the Banner in the Scorecard page', function () {
    cy.wait(3000)
    cy.xpath(this.locator.scorecardbanner).should('not.exist')
    // cy.xpath(this.locator.scorecardbanner).contains('WELL Building Standard').should('not.exist')
    cy.wait(8000)
    cy.xpath(this.locator.showorhideBanner).click({ force: true })
    cy.xpath(this.locator.scorecardbanner).should('be.visible')
})
////////////Verifying Expand/Collapse Rows in WELLs Scorecard page////////////////////
When('User clicks on ExpandCollapse Rows button', function () {
    cy.wait(5000)
    cy.contains('WELL Building Standard').should('be.visible')
    cy.xpath(this.locator.expandorcollapseRows).dblclick({ force: true })

})
Then('User verifies the expanded rows in Scorecard page', function () {

    //cy.xpath(this.locator.scorecardRequirements).contains('Requirements').should('not.exist')
})
//////////Verifying PRECONDITIONS progress bar by Selecting YES pursue status/////////////

And('User selects Air concepts', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardair).click()
    cy.wait(2000)
})
Then('User verifies the Air concepts page fields', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardbanner).scrollIntoView().should('be.visible', { force: true })
    cy.wait(2000)
    cy.xpath(this.locator.preconditionscard).scrollIntoView().should('be.visible', { force: true })
    cy.xpath(this.locator.optimizationscard).scrollIntoView().should('be.visible', { force: true })
    cy.xpath(this.locator.pointscard).scrollIntoView().should('be.visible', { force: true })
})
And('User verifies the status count in PRECONDITIONS progress bar by Selecting YES,May Be and No pursue status', function () {
    cy.xpath(this.locator.prepursuesYes).invoke('text').then((status) => {
        expect(status).to.equal('0 Yes')
    })
    cy.xpath(this.locator.prepursueMaybe).invoke('text').then((status) => {
        expect(status).to.equal('0 Maybe')
    })
    cy.xpath(this.locator.prepursueNo).invoke('text').then((status) => {
        expect(status).to.equal('0 No')
    })
    cy.xpath(this.locator.scorecardYES).click({ force: true })
    cy.xpath(this.locator.scorecardMayBe).click({ force: true })
    cy.xpath(this.locator.scorecardNO).click({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.prepursuesYes).invoke('text').then((status) => {
        expect(status).to.equal('1 Yes')
    })
    cy.xpath(this.locator.prepursueMaybe).invoke('text').then((status) => {
        expect(status).to.equal('1 Maybe')
    })
    cy.xpath(this.locator.prepursueNo).invoke('text').then((status) => {
        expect(status).to.equal('1 No')
    })
})
And('User verifies the percentage in PRECONDITIONS progress bar by Selecting YES pursue status', function () {
    cy.xpath(this.locator.preconditionPercentage).invoke('text').then((status) => {
        expect(status).to.equal(' 11% ')
    })
})

///////////Verifying OPTIMIZATIONS progress bar by Selecting No/Maybe pursue status///////
And('User verifies the status count in OPTIMIZATIONS progress bar by Selecting YES,May Be and No pursue status', function () {
    cy.xpath(this.locator.optpursueYes).invoke('text').then((status) => {
        expect(status).to.equal('0 Yes')
    })
    cy.xpath(this.locator.optpursueMaybe).invoke('text').then((status) => {
        expect(status).to.equal('0 Maybe')
    })
    cy.xpath(this.locator.optpursueNo).invoke('text').then((status) => {
        expect(status).to.equal('0 No')
    })
    cy.xpath(this.locator.optscorecardYES).click({ force: true })
    cy.xpath(this.locator.optscorecardMayBe).click({ force: true })
    cy.xpath(this.locator.optscorecardNO).click({ force: true })
    cy.wait(3000)
    cy.xpath(this.locator.optpursueYes).invoke('text').then((status) => {
        expect(status).to.equal('1 Yes')
    })
    cy.xpath(this.locator.optpursueMaybe).invoke('text').then((status) => {
        expect(status).to.equal('1 Maybe')
    })
    cy.xpath(this.locator.optpursueNo).invoke('text').then((status) => {
        expect(status).to.equal('1 No')
    })
})
And('User verifies the percentage in OPTIMIZATIONS progress bar by Selecting No or Maybe pursue status', function () {
    cy.xpath(this.locator.optimizationPercentage).invoke('text').then((status) => {
        expect(status).to.equal(' 6% ')
    })
})

////////////Verifying POINTS progress bar by Selecting points////////////////////
And('User verifies the pursued points in POINTS progress bar by Selecting YES pursue status', function () {
    //cy.xpath(this.locator.pointpursued).invoke('text').then((status)=>{
    // expect(status).to.equal('2 Pursued')
    // })
})
And('User verifies the total points in POINTS progress bar by Selecting YES pursue status', function () {
    cy.xpath(this.locator.pointtotal).invoke('text').then((status) => {
        expect(status).to.equal('12 Total')
    })
})
And('User verifies the percentage in POINTS progress bar by Selecting YES pursue status', function () {
    cy.xpath(this.locator.pointsPercentage).invoke('text').then((status) => {
        expect(status).to.equal(' 8% ')
    })
})
And('User verify warning message when selcting more than 12 points', function () {
    for (var i = 10; i <= 21; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[10]").click({ force: true })
        cy.wait(2000)
    }
    cy.contains('You are targeting more than the maximum 12 points allowed per concept. You may apply these excess points towards your 10 available innovation points, or should adjust to target only 12 points.').scrollIntoView().should('be.visible', { force: true })
})
////////////Verifying Scorecard Summary in the WELL Scorecard//////////////////
When('User clicks on Targeted points button', function () {
    cy.xpath(this.locator.targetedPoints).scrollIntoView().click({ force: true })
})
Then('User verifies the Scorecard Summary page fields', function () {
    cy.contains('Targeted Points').should('be.visible')
    cy.contains('Projected Milestones').should('be.visible')
    cy.contains('Totals by concept').should('be.visible')
    cy.contains('Estimated timeline').should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardsummaryclose).click({ force: true })
    cy.wait(1000)
})
////////////////Verifying Requirements in Scorecard part/////////////////////
When('User clicks on scorecard part', function () {
    cy.contains('Meet Thresholds for Particulate Matter').click({ force: true })
})
Then('User verifies the Requirements fields', function () {
    cy.contains('Requirements').should('be.visible')
    cy.contains('For All Spaces except Commercial Kitchen Spaces & Industrial').should('be.visible')
    cy.contains('Acceptable thresholds').scrollIntoView().should('be.visible')
    cy.contains('Modified thresholds in polluted regions').scrollIntoView().should('be.visible')
    cy.contains('Dynamic thresholds in polluted regions').scrollIntoView().should('be.visible')
})
//////////////Verifying Resources in Scorecard part///////////////////////
Given('User navigates to Resources in Scorecard part', function () {

    cy.contains('Requirements').scrollIntoView().click({ force: true })
    cy.contains('Resources').scrollIntoView().should('be.visible')
    cy.wait(2000)
    cy.xpath(this.locator.scorecardResources).scrollIntoView().click({ force: true })
})
When('User verifies the Resources fields', function () {
    cy.contains('Resources').scrollIntoView().should('be.visible')
    cy.contains('Sample Documentation').scrollIntoView().should('be.visible')
})
Then('User verifies the FAQ fields', function () {
    cy.wait(2000)
    //cy.contains('FAQ').scrollIntoView().should('be.visible', { force: true })
})
////////////////Verifying Documents Upload field///////////////////
Given('User navigates to Documents in scorecard part', function () {

    cy.contains('Requirements').scrollIntoView().click({ force: true })
    cy.contains('Documents').scrollIntoView().should('be.visible')
    cy.contains('You have not uploaded any documentation for this feature.').scrollIntoView().should('be.visible')
})
When('User clicks plus icon for document uploaded', function () {
    cy.xpath(this.locator.scorecardDocbtn).scrollIntoView().click({ force: true })
})
Then('User verifies the Add Documents fields', function () {
    cy.xpath(this.locator.scorecardverificationdropdown).scrollIntoView().should('be.visible')
    // cy.xpath(this.locator.scorecarddocupload).should('be.visible')
})
And('User selects verification method', function () {
    cy.xpath(this.locator.scorecardverificationdropdown).select(this.data.verificationmethodPT, { force: true })
})
And('User upload document', function () {
    cy.xpath(this.locator.scorecarddocupload).attachFile(this.data.Uploadfile, { force: true })
})
And('User clikcs on Submit button and verifies the uploaded document', function () {
    cy.xpath(this.locator.scorecarddocuploadsubmit).click({ force: true })
    cy.wait(5000)
    cy.xpath(this.locator.scorecarduploaddoc).should('be.visible', { force: true })
})
And('User delete the uploaded document', function () {
    cy.xpath(this.locator.scorecarddocdelete).click({ force: true })
    cy.xpath(this.locator.scorecarddocdeleteYes).click({ force: true })
})
And('User verifies No upload documents Message', function () {
    cy.contains('Document deleted successfully!').should('be.visible')
    cy.contains('You have not uploaded any documentation for this feature.').should('be.visible')
})
////////////////Verifying Comments field///////////////////////
Given('User navigates to Comments in scorecard part', function () {

    cy.contains('Requirements').scrollIntoView().click({ force: true })
    cy.contains('Comments').scrollIntoView().should('be.visible')

})
When('User clicks plus icon for comments', function () {
    cy.xpath(this.locator.scorecardcomntbtn).click({ force: true })
})
Then('User verifies the Add comment fields', function () {
    cy.xpath(this.locator.scorecardcomnttxtbx).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardprivatecmnt).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardcomntsavebtn).should('be.visible', { force: true })
})
And('User adds comment', function () {
    cy.xpath(this.locator.scorecardcomnttxtbx).click({ force: true }).type(this.data.scorecardcmt)
})
And('User select private comment checkbox', function () {
    cy.wait(1000)
    cy.xpath(this.locator.scorecardprivatecmnt).check({ force: true })

})
And('User clikcs on Save button and verifies the added comment', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomntsavebtn).click({ force: true })
    cy.contains(this.data.scorecardcmt).scrollIntoView().should('be.visible')
})
And('User update the comment', function () {
    cy.xpath(this.locator.scorecardcomnteditbtn).click({ force: true })
    cy.xpath(this.locator.scorecardcomnttxtbx).clear().type(this.data.scorecardcmtupdate)
    cy.xpath(this.locator.scorecardcomntupdatebtn).click({ force: true })
    cy.contains(this.data.scorecardcmtupdate).scrollIntoView().should('be.visible')
})
And('User delete the comment', function () {
    cy.xpath(this.locator.scorecardcmntdelete).click({ force: true })
})
And('User verifies deleted comment', function () {
    cy.contains(this.data.scorecardcmtupdate).should('not.exist')
})
//////////////Verifying Filters in the WELL Scorecard////////////////

When('User clicks the filters button', function () {
    cy.xpath(this.locator.WELLScorecardFilters).click({ force: true })
})
Then('User verifies the filter page fields', function () {
    cy.xpath(this.locator.scorecardresponsefiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardverificationfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardparttypefiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardpriorityfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardspacetypefiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardratingsfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardstrategyfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardcrosswalkfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardapplyfiltr).should('be.visible', { force: true })
    cy.xpath(this.locator.scorecardclearfiltr).should('be.visible', { force: true })
})
And('User verifies the pursue status count by selecting the Response checkbox', function () {
    cy.xpath(this.locator.scorecardresponsefiltr).click({ force: true })
    cy.xpath(this.locator.scorecardresponsefiltrchkbxYes).check()
    cy.xpath(this.locator.scorecardapplyfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardfiltrclose).click({ force: true })

    cy.wait(9000)
    cy.xpath(this.locator.WELLScorecardFilters).click({ force: true })
    cy.xpath(this.locator.scorecardclearfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardresponsefiltrchkbxMaybe).check()
    cy.xpath(this.locator.scorecardapplyfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardfiltrclose).click({ force: true })

    cy.wait(9000)
    cy.xpath(this.locator.WELLScorecardFilters).click({ force: true })
    cy.xpath(this.locator.scorecardclearfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardresponsefiltrchkbxNo).check()
    cy.xpath(this.locator.scorecardapplyfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardfiltrclose).click({ force: true })

})
And('User verifies the verification fields', function () {
    cy.wait(9000)
    cy.xpath(this.locator.WELLScorecardFilters).click({ force: true })
    cy.xpath(this.locator.scorecardclearfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardverificationfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardverificationfiltrchkbx).check()
    cy.xpath(this.locator.scorecardapplyfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardfiltrclose).click({ force: true })
})
And('User verifies the Part Type fields', function () {
    cy.wait(9000)
    cy.xpath(this.locator.WELLScorecardFilters).click({ force: true })
    cy.xpath(this.locator.scorecardclearfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardparttypefiltr).click({ force: true })
    cy.xpath(this.locator.scorecardparttypefiltrchkbx).check()
    cy.xpath(this.locator.scorecardapplyfiltr).click({ force: true })
    cy.xpath(this.locator.scorecardfiltrclose).click({ force: true })
})

/////////////Filling WELL Scorecard for WELL Certification Project///////////////
Given('User navigates to the WELL Scorecard page by logging in to wellcertified', function () {
    Login.loginpage()
    cy.fixture('V2ProjectId').then(function (projectid) {
        this.projectid = projectid
        cy.xpath(this.locator.Wellcertification).contains('WELL Certification').click({ force: true })
        cy.xpath(this.locator.id).click({ force: true })
        cy.wait(2000)
        cy.xpath(this.locator.id).type(this.projectid.ChinaV2Project)
        cy.contains('Apply').click({ force: true })
        cy.wait(3000)
        cy.xpath(this.locator.projectidcompare).invoke('text').then((projectidcompare) => {
            expect(projectidcompare.trim()).to.equal(this.projectid.ChinaV2Project)
        })
        cy.wait(2000)
        cy.xpath(this.locator.projectstatus).invoke('text').then((status) => {
            expect(status).to.equal("Registered")
        })
        cy.contains(this.projectid.ChinaV2Project).click({ force: true })
    })
})
/////////////////Air/////////////////////
And('User selects all the preconditions as YES for Air', function () {

    for (var i = 1; i <= 9; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects maximum optimization points for Air', function () {
    for (var i = 10; i <= 19; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
    for (var j = 20; j <= 25; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[20]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects radio button option', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardPartSearch).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardRadiobtn).click({ force: true })
})
And('User upload document for scorecard part for Air', function () {
    cy.wait(2000)
    cy.contains('Requirements').click({ force: true })
    cy.xpath(this.locator.scorecardDocbtn).click({ force: true })
    cy.xpath(this.locator.scorecardverificationdropdown).select(this.data.verificationmethodPT, { force: true })
    cy.xpath(this.locator.scorecarddocupload).attachFile(this.data.Uploadfile, { force: true })
    cy.xpath(this.locator.scorecarddocuploadsubmit).click({ force: true })
    cy.wait(2000)
})
And('User added comment for scorecard part for Air', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomntbtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomnttxtbx).click({ force: true }).type(this.data.scorecardcmt)
    cy.xpath(this.locator.scorecardprivatecmnt).check({ force: true })
    cy.xpath(this.locator.scorecardcomntsavebtn).click({ force: true })
    cy.wait(2000)
    cy.reload()
    cy.wait(8000)
})
//////////////water/////////////////////////////////
And('User selects Water concepts', function () {
    cy.xpath(this.locator.scorecardwater).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Water', function () {
    for (var i = 1; i <= 5; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
})
And('User selects maximum optimization points for Water', function () {
    for (var i = 6; i <= 16; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(3000)
    }
    for (var j = 17; j <= 17; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[17]").click({ force: true })
        cy.wait(3000)
    }
})
And('User upload document for scorecard part for Water', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardPartSearch).click({ force: true })
    cy.contains('Requirements').click({ force: true })
    cy.xpath(this.locator.scorecardDocbtn).click({ force: true })
    cy.xpath(this.locator.scorecardverificationdropdown).select(this.data.verificationmethodPT, { force: true })
    cy.xpath(this.locator.scorecarddocupload).attachFile(this.data.Uploadfile, { force: true })
    cy.xpath(this.locator.scorecarddocuploadsubmit).click({ force: true })
})
And('User added comment for scorecard part for Water', function () {
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomntbtn).click({ force: true })
    cy.wait(2000)
    cy.xpath(this.locator.scorecardcomnttxtbx).type(this.data.scorecardcmt)
    cy.xpath(this.locator.scorecardprivatecmnt).check({ force: true })
    cy.xpath(this.locator.scorecardcomntsavebtn).click({ force: true })
    cy.wait(2000)
    cy.reload()
    cy.wait(8000)
})
///////////////Nourishment///////////////////////
And('User selects Nourishment concepts', function () {
    cy.xpath(this.locator.scorecardnourishment).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Nourishment', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Nourishment', function () {
    for (var i = 4; i <= 13; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 14; j <= 15; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[14]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
//////////////////Light//////////////////////////////
And('User selects Light concepts', function () {
    cy.xpath(this.locator.scorecardlight).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Light', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Light', function () {
    for (var i = 3; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 9; j <= 12; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[9]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
//////////////////Movement///////////////////////////////
And('User selects Movement concepts', function () {
    cy.xpath(this.locator.scorecardmovement).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Movement', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Movement', function () {
    for (var i = 4; i <= 11; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 12; j <= 22; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[12]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
////////////////////Thermal Comfort///////////////////////////
And('User selects Thermal Comfort concepts', function () {
    cy.xpath(this.locator.scorecardthermalcomfort).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Thermal Comfort', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Thermal Comfort', function () {
    for (var i = 3; i <= 11; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 12; j <= 15; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[12]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
/////////////////////Sound//////////////////////////////
And('User selects Sound concepts', function () {
    cy.xpath(this.locator.scorecardsound).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Sound', function () {
    for (var i = 1; i <= 2; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Sound', function () {
    for (var i = 3; i <= 9; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 10; j <= 14; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[10]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
//////////////////Materials////////////////////////////
And('User selects Materials concepts', function () {
    cy.xpath(this.locator.scorecardmaterials).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Materials', function () {
    for (var i = 1; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Materials', function () {
    for (var i = 9; i <= 18; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 19; j <= 24; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[19]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
/////////////////////Mind////////////////////////////
And('User selects Mind concepts', function () {
    cy.xpath(this.locator.scorecardmind).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Mind', function () {
    for (var i = 1; i <= 3; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Mind', function () {
    for (var i = 4; i <= 14; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 15; j <= 19; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[15]").click({ force: true })
        cy.wait(3000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
//////////////////////Community///////////////////////////////////////
And('User selects Community concepts', function () {
    cy.xpath(this.locator.scorecardcommunity).click({ force: true })
    cy.wait(2000)
})
And('User selects all the preconditions as YES for Community', function () {
    for (var i = 1; i <= 6; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
})
And('User selects maximum optimization points for Community', function () {
    for (var i = 7; i <= 8; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 9; j <= 35; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[9]").click({ force: true })
        cy.wait(2000)
    }
    cy.wait(4000)
    cy.reload()
    cy.wait(8000)
})
///////////////////////Innovation/////////////////////////////////////////////
And('User selects Innovation concepts', function () {
    cy.xpath(this.locator.scorecardinnovation).click({ force: true })
    cy.wait(2000)
})
And('User selects maximum optimization points for Innovation', function () {
    for (var i = 1; i <= 10; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-l-lg transition-colors duration-300'])[1]").click({ force: true })
        cy.wait(2000)
    }
    for (var j = 11; j <= 18; j++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[11]").click({ force: true })
        cy.wait(2000)
    }
})
Then('User verifies the targeted points in the WELL scorecard', function () {
    cy.wait(2000)
    cy.xpath(this.locator.targetedPoints).click({ force: true })
})
And('User verifies the warning message in the Scorecard Summary', function () {
    cy.wait(2000)
    cy.contains('You are targeting more than the maximum 110 points allowed per submission. Please review the YES status in your scorecard to adjust your selections to lower the total number of points pursuing.').scrollIntoView().should('be.visible')
})
And('User selects maximum 110 points in the scorecard', function () {
    for (var i = 8; i <= 10; i++) {
        cy.xpath("(//*[@class='focus:outline-none duration-150 ease-in-out transition w-full my-auto flex justify-center py-2 px-2 text-sm font-medium transition duration-150 ease-in-out bg-white text-primary-600 border rounded-r-lg  transition-colors duration-300'])[8]").click({ force: true })
        cy.wait(2000)
    }
})
And('User verifies the warning message should not present in the Scorecard Summary', function () {
    cy.contains('You are targeting more than the maximum 110 points allowed per submission. Please review the YES status in your scorecard to adjust your selections to lower the total number of points pursuing.').should('not.exist')
})


