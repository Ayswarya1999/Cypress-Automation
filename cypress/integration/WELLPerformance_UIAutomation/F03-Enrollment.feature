#-------------------------------------------------------------------------------------
# Authors : Gokul T                              Reviewed By: Devi and Adil
# Date : 09/02/2022                              Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Registering and validate WELL Performance Rating
# Feature Description:Create and validate Enrollment WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F03-Create and validate Enrollment WELL Performance Rating

    #Scenario-1
    @RegressionTest
    Scenario:WELL Performance Rating page validation
        Given User navigate to the WELL Performance Rating Lists page by logging in to WELL Performance Rating
        When User clicks on Start a New Project button and verify options
        And User clicks on Enroll Now button
        Then User redirects to Lead with Performance form page successfully

    #Scenario-2
    @RegressionTest
    Scenario: Lead with Performance form page validation
        Given User navigate to the Lead with Performance form page by logging in to WELL Performance Rating
        Then User verifies the Lead with Performance form page fields
        And User redirects to Lead with Performance form page successfully

    #Scenario-3
    @RegressionTest
    Scenario: Organization information form page validation
        Given User navigate to the Organization information form page by logging in to WELL Performance Rating
        And User clicks on continue button without entering the mandatory fields and verifies error meassage
        And User enter data to Enrollment Name
        And User checks the Owner information checkbox
        And User selects the Organisation
        And User selects the Organisation Sector
        And User selects the Organisation Industry
        And User enters data to China Country, Street address, City and Postal Code fields
        And User checks the Billing address is same as owner address checkbox
        And User clicks on continue button
        And User will be redirected to Registration page successfully


    #Scenario-4
    @RegressionTest
    Scenario: About Organization form page validation
        Given User navigate to Organization information form page by logging in to WELL Performance Rating
        When User clicks on the continue button without entering the mandatory fields and verifies error meassage
        And User checks the Registration checkbox
        And User selects yes or no for Is the Owner organization an IWBI member
        And User clicks on Registration continue button
        And Get the WELL Performance ID for India and store into Json


    #Scenario-5
    @RegressionTest
    Scenario: Organization Location form page validation
        Given User navigate to Organization Location form page by logging in to WELL Performance Rating
        And User select location describes
        And User enter square meters
        And User clicks on continue button in Organization Location
        Then User redirects to Enrollment Fee form page successfully

    #Scenario-6
    @RegressionTest
    Scenario: Validating Fees+Discounts page
        Given User is on Fees+Discounts page
        When User checks the criteria checkbox
        Then User verifies fields on the Fees+Discounts page
        Then User verifies Enrollment Fee
        And User verifies Emerging market percentage
        And User verifies Emerging market discount
        And User verifies Enrollment Total
        And User clicks on continue button in Fees+Discounts page
        And User redirects to Terms+Conditions page successfully

    #Scenario-7
    @RegressionTest
    Scenario: Validating Terms+Conditions page
        Given User is on Terms+Conditions page
        And User verifies fields on the Terms+Conditions page
        When User selects Yes or No for Is this participation considered public field
        And User checks the Terms & Conditions checkbox and clicks on continue button
        Then User redirects to Payment page successfully

    #Scenario-8
    @RegressionTest
    Scenario: Validating Payment page
        Given User is on Payment page
        And User verifies fields on the Invoice page
        And User verifies WELL logo on the Invoice page
        And User verifies WELL Address for United States on the Invoice page
        And User verifies Owner Name on the Invoice page
        And User verifies Owner Email on the Invoice page
        And User verifies country on the Invoice page
        And User verifies date on the Invoice page
        And User verifies Amount on the Invoice page
        And User verifies fields on the Update Invoice page
        When User enters the Card Details
        And User clicks on pay now and complete enrollment button

    #Scenario-9
    @SmokeTest
    Scenario: WELL Performance Enrollment for India country
        Given User navigate to the Organization information form page by logging in to WELL Performance Rating
        And User enter data to Enrollment Name
        And User checks the Owner information checkbox
        And User selects the Organisation
        And User selects the Organisation Sector
        And User selects the Organisation Industry
        And User enters data to Country, Street address, City and Postal Code fields
        And User checks the Billing address is same as owner address checkbox
        And User clicks on continue button
        #################Registration on behalf of Owner page####################
        And User checks the Registration checkbox
        And User selects yes or no for Is the Owner organization an IWBI member
        And User clicks on Registration continue button
        #################Organization Location page################################
        And User select location describes
        And User enter square meters
        And User clicks on continue button in Organization Location
        ####################Fees+Discounts page#######################
        And User clicks on continue button in Fees+Discounts page
        ##################Terms+Conditions page######################
        And User selects Yes or No for Is this participation considered public field
        And User checks the Terms & Conditions checkbox and clicks on continue button
        ####################Payment###########################################################
        And User verifies China country name on the Invoice page
        And User verifies WELL Address for China on the Invoice page
        And User verifies  Enrollment Fee for china on the Invoice page
        And User enters the Card Details
        And User clicks on pay now and complete enrollment button
        And Get the WELL Performance ID for China and store into Json