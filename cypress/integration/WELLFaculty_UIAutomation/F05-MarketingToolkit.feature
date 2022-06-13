#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty Marketing Toolkit
# Feature Description: Validating the Marketing Toolkit module for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F05-Validating the Marketing Toolkit for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Marketing Toolkit page for WELL Faculty
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Marketing Toolkit tab
        Then User redirects to the DashboarMarketing Toolkitd page
        And User verifies fields on the Dashboard page
        And User verifies cards on the Marketing Toolkit Dashboard page