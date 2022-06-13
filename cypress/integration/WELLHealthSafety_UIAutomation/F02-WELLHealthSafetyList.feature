#-------------------------------------------------------------------------------------
# Authors : Seena                                       Reviewed By: Devi and Adil
# Date : 08/02/2022                                      Reviewed On: 09/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name: Validating WELL Health Safety list
# Feature Description: Validating WELL Health Safety list form fileds. Checking the filter functionality by ID and Name.
#---------------------------------------------------------------------------------------
Feature: F02-Validating WELL Health Safety list

    #Scenario-1
    @RegressionTest
    Scenario:WELL Health Safety List validation
        Given User logged in to the WELL certified account
        When User clicks on WELL Health Safety from top menu under projects
        Then User will be redirected to the WELL Health Safety list page successfully
        And User verifies the WELL Health Safety list fields
        And User verifies the search by ID
        And User verifies the search by Name
        And User verifies the Apply button
        And User verifies the Pagination