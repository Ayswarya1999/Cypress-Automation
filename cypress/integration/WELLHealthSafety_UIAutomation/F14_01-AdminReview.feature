#-------------------------------------------------------------------------------------
# Authors : Seena                                          Reviewed By:
# Date : 10/01/2022                                        Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Admin Review for WELL Health Safety
# Feature Description: Validating Admin Review for WELL Health Safety
#---------------------------------------------------------------------------------------
Feature: F14.1-Validating Admin Review for WELL Health Safety

    #Scenario-1
    @RegressionTest
    Scenario:Verifies the WELL Health Safety Review
        Given User navigates to the Reviews page by logging in to the wellcertified
        When User clicks on Reviews button
        Then User will be redirected to Reviews page

    #Scenerio-2
    @RegressionTest
    Scenario:Verifies Preliminary Health-Safety Review
        Given User navigating to the Review Page
        When User clicks on view button
        Then User will be redirected to Preliminary Health-Safety Review page
        And User verifies Preliminary Health-Safety Review fields
        And User verifies status on Project Reviews
        And User verifies comments on Project Reviews
        And User verifies the Submitted and Estimated Review date on Project Reviews

    #Scenerio-3
    @RegressionTest
    Scenario:Update Review
        Given User navigating to the Preliminary Health-Safety Review page
        When User clicks on Edit button
        And User select Needs clarification Review status
        And User enter Mid-Review Clarification Note
        And User clicks on update button
        Then User verifies comments
        And User verifies status
        And User added review comment
        And User upload document for Preliminary Health-Safety Review
        And User verifies the uploaded document  