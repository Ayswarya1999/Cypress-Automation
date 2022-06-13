#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Edit
# Feature Description: Updating the WELL Health Safety
#------------------------------------------------------------------------------------
Feature:F13-Promotion module for WELL Health-Safety Project

#Scenario-1
    @RegressionTest
    Scenario:Verifies Promotions fields
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Promotion tab
        Then User will be redirected to Promotion page
        And User verifies Promotion fields
        And User verifies Engagement Materials cards
        And User verifies WELL Store cards


        