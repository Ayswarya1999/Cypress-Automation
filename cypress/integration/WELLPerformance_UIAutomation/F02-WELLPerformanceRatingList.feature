#-------------------------------------------------------------------------------------
# Authors : Gokul T                                      Reviewed By: Devi and Adil
# Date : 08/02/2022                                      Reviewed On: 09/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name: Validating WELL Certification Performance Rating List
# Feature Description: Validating V2 Performance Rating list form fileds. Checking the filter functionality by ID, Name, Country and Status.
#---------------------------------------------------------------------------------------
Feature: F02-Validating V2 Performance Rating list

    #Scenario-1
    @RegressionTest
    Scenario:WELL V2 Performance Rating List validation
        Given User logged in to the WELL Performance Rating account
        When User clicks on WELL Performance Rating from top menu under projects
        Then User will be redirected to the WELL Performance Rating list page successfully
        And User verifies the WELL Performance Rating enrollments list fields
        And User verifies the search by Performance ID 
        And User verifies the search by Name
        And User verifies the Apply button
        And User verifies the Clear filter button
        And User verifies the Pagination