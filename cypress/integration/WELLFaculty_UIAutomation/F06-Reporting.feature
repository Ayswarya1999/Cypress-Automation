#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty Reporting
# Feature Description: Validating the Reporting module for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F06-Validating the Reporting for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Reporting page for WELL Faculty
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Reporting tab
        Then User redirects to the Reporting Toolkitd page
        And User verifies fields on the Dashboard page
        And User verifies cards on the Reporting Dashboard page