#-------------------------------------------------------------------------------------
# Authors : Seena                                       Reviewed By: Devi and Adil
# Date : 08/02/2022                                      Reviewed On: 09/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name:  WELL_AP Registration
# Feature Description: Create and validate WELL_AP Registration
#---------------------------------------------------------------------------------------
Feature: F02-Create and validate WELL AP Registration

    #Scenario-1
    @RegressionTest
    Scenario:validate WELL AP page
        Given User logged in to the WELL certified account
        When User clicks on WELL AP from top menu under Training
        And User navigate to the WELL Ap list page successfully
        And User verifies the fields on the WELL AP page
        And User clicks on continue button
        Then User will be redirected to the WELL AP Exam Registration page successfully

    #Scenario-2
    @RegressionTest
    Scenario: validate WELL AP Exam Registration page
        Given User is on WELL AP Exam Registration page
        And User verifies fields on the WELL AP Exam Registration page
        When User clicks on continue button without entering the mandatory fields and verifies error meassage
        And User enter data to First name, Last name, Country, State, Street address, City and Postal Code, Phone number fields
        And User clicks on the continue button
        Then User will be redirected to the Tell us more about you page successfully

    #Scenario-3
    @RegressionTest
    Scenario: validate Tell us more about you page
        Given User is on Tell us more about you page
        And User verifies fields on the Tell us more about you page
        When User clicks on the continue button without entering the mandatory fields and verifies error meassage
        And User enters data to Job title field
        And User selects the Organisation
        And User selects the Industry Sector
        And User checks the designations checkbox
        And User selects the Gender
        And User enters the Date of birth
        And User click on continue button
        Then User will be redirected to the Almost finished page successfully

    #Scenario-4
    @RegressionTest
    Scenario: validate Almost finished page
        Given User is on Almost finished page
        And User verifies fields on the Almost finished page
        When User clicks on submit button without entering the mandatory fields and verifies error meassage
        And User selects How did you hear about the WELL AP? field
        And User checks the primary reasons checkbox
        And User selects the Exam language
        And User checks the Exam Appeals Policy checkbox
        And User clicks on submit button
    # Then User will be redirected to the Invoice page successfully

    #Scenario-5
    @RegressionTest
    Scenario: validate Payment page
        Given User is on Invoice page
        And User verifies fields on the Invoice page
        And User verifies Payment status in Invoice page
        And User verifies WELL logo on the Invoice page
        And User verifies WELL Address for United States on the Invoice page
        # And User verifies Owner Name on the Invoice page
        And User verifies Owner Email on the Invoice page
        And User verifies Address on the Invoice page
        And User verifies country on the Invoice page
        And User verifies Amount on the Invoice page
        And User verifies date on the Invoice page
        And User verifies fields on the Payment Options

    #Scenario-6
    @RegressionTest
    Scenario:Update Invoice page validation
        Given User navigate to the Update Invoice page
        And User verifies fields on the Update Invoice page
        When User update Invoice fields
        And User clicks on Update Invoice button
        Then User navigate to the Invoice page

    #Scenario-7
    @SmokeTest
    Scenario:Billing for WELL AP Exam Registration
        Given User is on the Invoice page
        When User enters the Card Details
        And User clicks on pay now button
        Then User will be redirected to the Your Exam Details page successfully

    #Scenario-8
    @SmokeTest
    Scenario:Exam Details page validation
        Given User is on the Your Exam Details page
        And User verifies fields on the Exam Details page 





