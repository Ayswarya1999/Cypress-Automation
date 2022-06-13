#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Billing
# Feature Description: Validating the Billing for WELL Health Safety
#------------------------------------------------------------------------------------
Feature: F04-Validating the Billing for WELL Health Safety

    #Scenario-1
    @RegressionTest
    Scenario:Billing page validation
        Given User navigate to the Dhashboard page by logging in to wellcertified
        When User clicks on Billing tab
        Then User will be redirected to the WELL Health-Safety Billing page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Receipt page validation
        Given User is on billing page by logging in to wellcertified
        When User clicks on paid button
        Then User will be redirected to WELL Health Safety Receipt page successfully
        And User verifies fields on WELL Health Safety Receipt page
        And User verifies the Payment Status in Receipt page
        And User verifies Payment date in Receipt page
        And User verifies the Paid amount
        And User verifies Download receipt