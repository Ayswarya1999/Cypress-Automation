#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                                                Reviewed By:
# Date : 10/01/2022                                                                      Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Pricing
# Feature Description: Validating Pricing
#---------------------------------------------------------------------------------------
Feature: F06-Validating Pricing for WELL V2 Project

  #Scenario-1
  @RegressionTest
  Scenario:Pricing for country discount in WELL V2 project
    Given User navigate to the Pricing page by logging in to wellcertified
    When User clicks on Pricing tab
    Then User will be redirected to the WELL Certification Pricing page successfully
    And User verifies fields on the Pricing page
    #And User verifies project name
    And User verifies Enrollment fees
    And User verifies Program fees
    And User verifies country discount applied name
    And User verifies country discount applied percentage
    And User verifies Total WELL Fees
    And User verifies Download
    And User verifies Onsite performance testing and data collection

  #Scenario-2
  @RegressionTest
  Scenario Outline: Pricing for sector special '<V2ProjectID>' country
    Given User navigate to the Pricing page '<V2ProjectID>' by logging in to wellcertified
    When User clicks on Pricing tab
    Then User will be redirected to the WELL Certification Pricing page successfully
    And User verifies fields on the Pricing page
    #And User verifies project name
    And User verifies Enrollment fees
    And User verifies Program fees
    And User verifies sector discount applied name
    And User verifies sector discount price
    And User verifies sector discount applied percentage
    And User verifies Total WELL Fees
    And User verifies estimate fee date range
    And User verifies Download

    Examples:
      | V2ProjectID    |
      | ChinaV2Project |

  #Scenario-3
  @RegressionTest
  Scenario Outline:Pricing for No discount '<V2ProjectID>'
    Given User navigate to the Pricing page '<V2ProjectID>' by logging in to wellcertified
    When User clicks on Pricing tab
    Then User will be redirected to the WELL Certification Pricing page successfully
    And User verifies fields on the Pricing page
    #And User verifies project name
    And User verifies Enrollment fees for special country
    And User verifies Program fees for special country
    And User verifies No discount
    And User verifies Total WELL Fees for special country
    And User verifies Onsite performance testing and data collection for special country
    And User verifies Download

    Examples:
      | V2ProjectID       |
      | HongKongV2Project |
      | MacaoV2Project    |
