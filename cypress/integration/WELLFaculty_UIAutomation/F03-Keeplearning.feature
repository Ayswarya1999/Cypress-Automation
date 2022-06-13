#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty Keep Learning
# Feature Description: Validating the Keep Learning module for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F02-Validating Keep Learning module for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Verifies Keep Learning page for WELL Faculty
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Keep Learning tab
        Then User redirects to the Keep Learning Dashboard page
        And User verifies cards on the Keep Learning Dashboard page 