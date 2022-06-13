#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                               Reviewed By:
# Date : 10/01/2022                                                     Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Upload and Validating Document for WELL Health-Safety
# Feature Description: Upload and Validating Document for WELL Health-Safety
#---------------------------------------------------------------------------------------
Feature: F07-Upload and Validating Document for WELL Health-Safety

  #Scenario-1
  @RegressionTest
  Scenario:Validating Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    Then User will be redirected to the WELL Health-Safety Document page successfully

  #Scenario-2
  @RegressionTest
  Scenario:Validating Document fields
    Given User navigate to the Document page
    Then User verifies Document fields
    And User verifies Type options

  #Scenario-3
  @RegressionTest
  Scenario:Validating General type in Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Add button
    And User select the General type
    And User Upload the Document
    And User enter the comment
    And User clicks on upload button
    Then User will be redirected to general List successfully
    And User delete General type

  #Scenario-4
  @RegressionTest
  Scenario:Validating Audit type in Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Add button
    And User select the Audit type
    And User check the location
    And User select the Verification Method
    And User select the Verification document
    And User Upload the Document
    And User select the Verification document location
    And User clicks on upload button
    Then User will be redirected to Library List successfully
    And User verifies the type in Audit list
    And User delete Audit type in Audit type in Upload Document

  #Scenario-5
  @RegressionTest
  Scenario:Validating the Updated Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User edit icon in library document list
    And User edit location document
    And User check the location in location document
    And User clicks on update button
    Then User redirect to library document list
    And User verfies the location count for updates document


  #Scenario-6
  @SmokeTest
  Scenario:Validating the Upload Document
    Given User navigate to the Document page by logging in to wellcertified
    When User clicks on Document tab
    And User clicks on Add button
    And User select the General type
    And User Upload the Document
    And User enter the comment
    And User clicks on upload button
    #########################Feature type#############################################################
    And User clicks on Add button
    When User select the Feature type
    And User check the location
    And User selects the Verification Method
    And User selects the Verification document
    And User Upload the Document
    And User select the Verification document location
    And User clicks on upload button