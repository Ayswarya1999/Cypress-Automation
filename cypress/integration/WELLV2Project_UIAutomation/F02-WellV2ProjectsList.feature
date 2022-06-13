#-------------------------------------------------------------------------------------
# Authors : Seena and Gokul                              Reviewed By: Devi and Adil
# Date : 08/02/2022                                      Reviewed On: 09/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name: Validating WELL Certification Projects List
# Feature Description: Validating V2 Project list form fileds. Checking the filter functionality by ID, Name, Country and Status.
#---------------------------------------------------------------------------------------
Feature: F02-Validating V2 Projects list

    #Scenario-1
    @RegressionTest
    Scenario:WELL V2 Projects List validation
        Given User logged in to the WELL certified account
        When User clicks on WELL Certification from top menu under projects
        Then User will be redirected to the WELL Certification projects list page successfully
        And User verifies the WELL Certification enrollments list fields
        And User verifies the search by ID
        And User verifies the search by Name
        And User verifies the search by Country name India, China, Macao, Hongkong, Austraila, Afghanistan and Jordon
        And User verifies the search by Status Registered, Registeration in progress and Not Registered
        And User verifies the Apply button
        And User verifies the Clear filter button
        And User verifies the Pagination