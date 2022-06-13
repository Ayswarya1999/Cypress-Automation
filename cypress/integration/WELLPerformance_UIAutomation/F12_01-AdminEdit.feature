#-------------------------------------------------------------------------------------
# Authors :Seena                                              Reviewed By:
# Date : 10/01/2022                                                    Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Updating and validating Edit as Admin User for WELL Performance Rating
# Feature Description: Updating and validating Edit as Admin User for WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F12.1-Edit Admin Fields for WELL Performance Rating as Admin user

    #Scenario-1
    @RegressionTest
    Scenario: Verifying and editing Admin Fields as Admin user for WELL Performance Rating
        Given User navigate to the Edit page by logging as Admin in to wellcertified
        When User clicks on Edit tab
        And User clicks on Admin Fields button
        And User verifies the Admin Fields page fields
        And User updates the Admin Fields
        And User clicks on Save Changes button
        Then User update the Admin Fields and will be redirected to the Dashbaord successfully

    #Scenario-2
    @RegressionTest
    Scenario: Verifying Updated Admin Fields as Admin user
        Given User navigate to the Edit page by logging as Admin in to wellcertified
        When User clicks on Edit tab
        And User clicks on Admin Fields button
        Then User verifies the updated Admin Fields

    #Scenario-3
    @SmokeTest
    Scenario: Update Admin Fields for WELL Performance Rating as Admin user
        Given User navigate to the Edit page by logging as Admin in to wellcertified
        When User clicks on Edit tab
        And User clicks on Admin Fields button
        And User updates for Admin Fields
        And User clicks on Save Changes button
        Then User update the Admin Fields and will be redirected to the Dashbaord successfully
        And User verifies the WELL Performance Rating seal in the Dashbaord
        And User verifies the valid seal date
         
