#-------------------------------------------------------------------------------------
# Authors : Gokul T                                 Reviewed By:
# Date : 10/01/2022                                                     Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Upload and Validating Document for WELL Performance Rating
# Feature Description: Upload and Validating Document for WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F07-Upload and Validating Document for WELL Performance Rating

  #Scenario-1
  @RegressionTest
  Scenario:Validating Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    Then User will be redirected to the WELL Performance Rating Document page successfully

  #Scenario-2
  @RegressionTest
  Scenario:Validating Document fields
    Given User navigate to the Document page
    Then User verifies Document fields
    And User verifies Document Type options

  #Scenario-3
  @RegressionTest
  Scenario:Validating the filter Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on filter button
    Then User verifies filter options count
    And User verifies Verification filter


  #Scenario-4
  @RegressionTest
  Scenario:Validating General type in Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Upload button in Upload Document
    And User select the General type
    And User Upload the Document
    And User enter the comment
    And User clicks on upload button
    Then User will be redirected to general List successfully
    And User delete General type

  #Scenario-5
  @RegressionTest
  Scenario:Validating Audit type in Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Upload button in Upload Document
    And User select the Audit type
    And User Upload the Document
    And User select the Verification Method
    And User enter the comment
    And User clicks on upload button
    Then User will be redirected to Library List successfully


  #Scenario-6
  @RegressionTest
  Scenario:Validating the Updated Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on upload button in Task document list
    And User edit location document
    And User check the location in location document
    And User Upload the Document
    And User enter the comment
    And User clicks on update button
    Then User redirect to Task document list


  #Scenario-8
  @SmokeTest
  Scenario:Validating the Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    ###############General Type###############################
    And User clicks on Upload button in Upload Document
    And User select the General type
    And User Upload the Document
    And User enter the comment
    And User clicks on upload button
    ###############Feature Type###############################
    And User clicks on Upload button in Upload Document
    And User select the Feature type
    And User Upload the Document
    And User selects the Verification Method
    And User enter the comment
    And User clicks on upload button