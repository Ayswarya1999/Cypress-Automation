#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Performance Rating Edit
# Feature Description: Updating the WELL Performance Rating
#------------------------------------------------------------------------------------
Feature: F12.0-Update Project

    #Scenario-1
    @RegressionTest
    Scenario: Verifies Edit page for WELL Performance Rating Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        Then User will be redirected to the WELL Performance Rating Edit page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Verifies Project Information fields for WELL Performance Rating Project
        Given User is on Edit Project page by logging in to wellcertified
        And User verifies fields in the Edit Project page
        When User update project Information fields
        And User update Owner Information fields
        And User update WELL Performance Rating scope & premises, WELL Performance Rating goals and vision fields
        And User clicks on Save Changes button  
        Then User will be redirected to the WELL Performance Rating Dashboard page successfully

    #Scenario-3
    @SmokeTest
    Scenario:Edit Functionalities for WELL Performance Rating Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User will be redirected to the WELL Performance Rating Edit page successfully
        And User update project Information fields
        And User update Owner Information fields
        And User update WELL Performance Rating scope & premises, WELL Performance Rating goals and vision fields
        And User clicks on Save Changes button
        Then User will be redirected to the WELL Performance Rating Dashboard page successfully