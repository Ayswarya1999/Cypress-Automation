#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Edit
# Feature Description: Updating the WELL Health Safety
#------------------------------------------------------------------------------------
Feature: F12.0-Update Project

    #Scenario-1
    @RegressionTest
    Scenario: Verifies Edit page for WELL Health-Safety Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        Then User will be redirected to the WELL Certification Edit page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Verifies Project Information fields for WELL Health-Safety Project
        Given User is on Edit Project page by logging in to wellcertified
        And User verifies fields in the Edit Project page
        When User update project Information fields
        And User update Owner Information fields
        And User update WELL Health-Safety scope & premises, WELL Health-Safety goals and vision fields
        And User clicks on Save Changes button  
        Then User will be redirected to the WELL Health-Safety Rating Dashboard page successfully

    #Scenario-3
    @SmokeTest
    Scenario:Edit Functionalities for WELL Health-Safety Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User will be redirected to the WELL Certification Edit page successfully
        And User update project Information fields
        And User update Owner Information fields
        And User update WELL Health-Safety scope & premises, WELL Health-Safety goals and vision fields
        And User clicks on Save Changes button
        Then User will be redirected to the WELL Health-Safety Rating Dashboard page successfully