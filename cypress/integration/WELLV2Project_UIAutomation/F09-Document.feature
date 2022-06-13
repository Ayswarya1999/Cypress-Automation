#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                               Reviewed By:
# Date : 10/01/2022                                                     Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Document
# Feature Description: Validating Document
#---------------------------------------------------------------------------------------
Feature: F09-Upload and Validating Document for WELL V2 Project

  #Scenario-1
  @RegressionTest
  Scenario:Validating Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    Then User will be redirected to the WELL Certification Document page successfully

  #Scenario-2
  @RegressionTest
  Scenario:Validating Document fields
    Given User navigate to the Document page
    Then User verifies Document fields

  #Scenario-3
  @RegressionTest
  Scenario:Validating General type in Upload Document fields
    Given User navigate to the Upload Document page
    When User select the General type
    And User Upload the Document
    And User clicks on upload button
    Then User will be redirected to general List successfully
    And User delete General type

  #Scenario-4
  @RegressionTest
  Scenario:Validating Legal type in Upload Document fields
    Given User navigate to the Upload Document page
    When User select the Legal type
    And User Upload the Document
    And User clicks on upload button
    Then User will be redirected to general List successfully
    And User delete Legal type

 #Scenario-5
  @RegressionTest
  Scenario:Validating Feature type in Upload Document fields
    Given User navigate to the Upload Document page
    When User select the Feature type
    And User select the Verification Method
    And User Upload the Document
    And User select the Part
    And User clicks on upload button
    Then User will be redirected to Scorecard List successfully
    And User verifies the type

    #Scenario-6
  @RegressionTest
  Scenario:Validating Ongoing data report type in Document fields
    Given User navigate to the Upload Document page
    When User select the Ongoing data report type
    And User select the Part in Ongoing data report type
    And User select the Period in Ongoing data report type
    And User Upload the Document
    And User clicks on upload button
    Then User will be redirected to Scorecard List successfully
    And User verifies the Period

#Scenario-7
  @RegressionTest
  Scenario:Validating Performance type in Upload Document fields
    Given User navigate to the Upload Document page
    When User select the Performance type
    And User select the Part in Performance type
    And User Upload the Document
    And User clicks on upload button
    Then User will be redirected to Performance List successfully
    And User verifies the type in Performance type

#Scenario-8
  @SmokeTest
  Scenario:Document Upload for WELL V2 Project
    Given User navigate to Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Upload Document button
    And User select the General type
    And User Upload the Document
    And User clicks on upload button
    And User will be redirected to general List successfully  
    And User clicks on Upload Document button
    And User select the Legal type
    And User Upload the Document
    And User clicks on upload button
    And User will be redirected to general List successfully
    And User clicks on Upload Document button
    And User select the Feature type
    And User select the Verification Method
    And User Upload the Document
    And User select the Part
    And User clicks on upload button
    And User will be redirected to Scorecard List successfully
    And User clicks on Upload Document button
    And User select the Ongoing data report type
    And User select the Part in Ongoing data report type
    And User select the Period in Ongoing data report type
    And User Upload the Document
    And User clicks on upload button
    And User will be redirected to Scorecard List successfully
    And User clicks on Upload Document button
    And User select the Performance type
    And User select the Part in Performance type
    And User Upload the Document
    And User clicks on upload button
    Then User will be redirected to Performance List successfully