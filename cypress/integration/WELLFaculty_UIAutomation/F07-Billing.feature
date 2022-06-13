#------------------------------------------------------------------------------------
# Authors : Gokul T                               Reviewed By:Devi and Adil
# Date : 09/05/2022                               Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL WELL Faculty Billing
# Feature Description: Validating the Billing for WELL Faculty
#------------------------------------------------------------------------------------
Feature: F04-Validating the Billing for WELL Faculty
    #Scenario-1
    @RegressionTest
    Scenario:Billing page validation 
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Billing tab
        Then User will be redirected to the Billing page successfully

    #Scenario-2
    @RegressionTest
    Scenario:Receipt page validation 
        Given User is on billing page by logging in to wellcertified
        When User clicks on paid button
        Then User will be redirected to Receipt page successfully
        And User verifies fields on WELL Health Safety Receipt page
        And User verifies the Payment Status in Receipt page
        # And User verifies the Payment date in Receipt page
        And User verifies the paid amount
        And User verifies Download receipt
        And User verifies WELL logo on the Receipt page
        And User verifies User verifies WELL Address for United States on the Receipt page
        # And User verifies Owner Name on the Receipt page
        And User verifies Owner Email on the Receipt page
        And User verifies country on the Receipt page