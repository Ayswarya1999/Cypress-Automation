#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty Resources
# Feature Description: Validating the Resources module for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F04-Validating the Resources for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Resources page for WELL Faculty
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Resources tab
        Then User redirects to the Resources Dashboard page
        And User verifies fields on the Dashboard page
        And User verifies card count for Instructional Resources
        And User verifies card count for Additional Resources