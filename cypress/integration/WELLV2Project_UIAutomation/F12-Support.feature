#------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                            Reviewed By:Adil
# Date : 10/01/2022                                                  Reviewed On:31/01/2022
# Last Updated By:
# Last Updated On:
# Feature Name: Creating and validating Support
# Feature Description: Creating and validating Support
#------------------------------------------------------------------------------------
Feature: F12-Creating and validating Support

    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Support Page
        Given User navigate to the Support page by logging in to wellcertified
        Then User will be redirected to Support page successfully
        And User verifies the your WELL Certification Support page fields

    #Scenario-2
    @RegressionTest
    Scenario:Verifies the Resource Page
        Given User navigate to the Resource page
        Then User verifies card count for Getting Started
        And User verifies card count for Toolkits
        And User verifies card count for Documentation Prep
        And User verifies card count for Alternatives and Innovations
        And User verifies card count for Performance Testing
        And User verifies card count for Reviews
        And User verifies card count for Award
        And User verifies card count for Provide annual reporting
        And User verifies card count for COVID-19 Support
        And User verifies card count for Guidebooks
        And User verifies card count for Legal Forms
        And User verifies card count for Getting Started with WELL series
        And User verifies card count for WELL Tutorials

    #Scenario-3
    @RegressionTest
    Scenario:Verifies the GetHelp
        Given User navigate to the GetHelp page
        When User clicks on Submit button without entering the mandatory fields for Support and verifies error message
        And User enters data to subject and description fields
        And User selects the Question About option
        And User uploads file in documents
        And User clicks on submit button
        Then User will be redirected to Inbox page successfully

    #Scenario-4
    @RegressionTest
    Scenario:Verifies the Inbox fields in Support Page
        Given User navigate to the Inbox page
        And User clicks on Comment button without entering the mandatory fields for Support and verifies error message
        And User enters comments
        And User uploads file in documents
        And User clicks on Comment button
        Then User will be redirected to Inbox page successfully
        And User verifies the status

    #Scenario-5
    @SmokeTest
    Scenario: V2 Project Support Creation
        Given User navigate to the Support page by logging in to wellcertified
        And User navigate to the GetHelp page
        When User enters data to subject and description fields
        And User selects the Question About option
        And User uploads file in documents
        And User clicks on submit button
        And User enters comments
        And User uploads file in documents
        And User clicks on Comment button
        Then User will be redirected to Inbox page successfully