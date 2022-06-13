#------------------------------------------------------------------------------------
# Authors : Seena                                            Reviewed By:Adil
# Date : 10/01/2022                                                  Reviewed On:31/01/2022
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Support
# Feature Description: Validating Support for WELL Performance Rating
#------------------------------------------------------------------------------------
Feature: F10-Validating Support for WELL Performance Rating

    #Scenario-1
    @RegressionTest
    Scenario:Verifies the Support Page
        Given User navigate to the Support page by logging in to wellcertified
        When User clicks on Support from the left menu
        Then User will be redirected to Support page successfully
        And User verifies the your WELL Performance Rating Support page fields

    #Scenario-2
    @RegressionTest
    Scenario:Verifies the support cards page
        Given User navigate to the support cards page
        Then User verifies card count for Getting Started
        And User verifies card count for Technical tools
        And User verifies card count for Helpful articles
        