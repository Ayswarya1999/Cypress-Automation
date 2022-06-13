#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Faculty Orientation 
# Feature Description: Validating the Orientation module for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F02-Validating Orientation for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Orientation page for WELL Faculty
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Orientation tab
        Then User verifies fields on the Dashboard page
        And User verifies cards on the Orientation Dashboard page  
         