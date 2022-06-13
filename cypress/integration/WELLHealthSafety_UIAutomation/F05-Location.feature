#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Location
# Feature Description: Creating and validating Location for WELL Health Safety
#------------------------------------------------------------------------------------
Feature: F05-WELL Health Safety Location

    #Scenario-1
    @RegressionTest
    Scenario:Verifies Location page for V2 Project
        Given User navigate to the Location page by logging in to wellcertified
        When User clicks on Location button
        Then User will be redirected to Location page
        And User verifies the Location fields

    #Scenario-2
    @RegressionTest
    Scenario: validate Single Location page 
        Given User is on Location page
        When User clicks on Add Location button and verifies the fields
        And User clicks on submit button without entering the mandatory fields and verifies error message
        And User enters data to Location Name, Location Area, Area Type, Space Type and Ownership Type fields
        And User enters data to Country, Street address, City and Postal Code fields
        And User selects Is this location public option
        And User clicks on submit button
        Then User will be redirected to project Location list page successfully
        And User verifies project Location in list

    #Scenario-3
    @RegressionTest
    Scenario: validate Multiple Location
        Given User navigate to the Location page by logging in to wellcertified
        When User clicks on Location button
        And User clicks on Import button
        Then User will be redirected to Portfolio Locations Import page
        And User verifies the Create new locations page
        And User verifies th Update existing locations page
        And User upload document for Create new locations
        And User clicks on Next button
        And User redirects to Match columns from your file to project fields
        And User clicks on ckeckbox
        And User clicks on Next button
        And User redirects to Validation page
        And User verifies the Validation page fields
        And User clicks on Finish Import button
        And User verifies the Pagination
        And User verifies Filters option
            
    #Scenario-4
    @RegressionTest
    Scenario: Verifies Subset page in Location for WELL Health Safety
        Given User is on Location page
        When User clicks Subset button in the Location page
        Then User will redirects to the Subset page
        And User verifies the Subset page fields