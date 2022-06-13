#-------------------------------------------------------------------------------------
# Authors : Seena                                                    Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating completed Review for WELL Health Safety
# Feature Description: Validating completed Review for WELL Health Safety
#---------------------------------------------------------------------------------------
Feature: F14.04-Validating completed Review for WELL Health Safety

    #Scenario-1
    @RegressionTest
    Scenario:Verifies the WELL Health Safety Review
        Given User navigates to the Reviews page by logging in to the wellcertified
        When User clicks on Reviews button
        Then User will be redirected to Reviews page
        And User verifies Reviews fields
        And User verifies Review phase in Reviews list
        And User verifies status in Reviews list

    #Scenerio-2
    @RegressionTest
    Scenario:Verifies WELL Health Safety Reviews View
        Given User navigates to the Reviews page
        When User clicks on Reviews button
        And User clicks on view button
        Then User will be redirected to Preliminary Health-Safety Review page
        And User verifies Preliminary Health-Safety Review fields
        And User verifies status on Project Reviews
        And User verifies payment status for Reviews
        And User verifies comments on Project Reviews