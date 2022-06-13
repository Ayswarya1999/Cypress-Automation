#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena Reviewed By:
# Date : 10/01/2022 Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Profile for WELL V2 Project
# Feature Description: Validating Profile for WELL V2 Project
#---------------------------------------------------------------------------------------
Feature: F17-Validating Profile for WELL V2 Project

#Scenario-1
@RegressionTest
Scenario: Verifying the General Information page
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    Then User is redirected to the general information tab in the profile page
    And User verifies the General information page fields

#Scenario-2
@RegressionTest
Scenario: Creating the General Information
    Given User navigates to the general information page
    When User enters data to Project Bio field
    And User add Logo and Attached Primary Profile Images 
    And User clicks on save profile button
    Then User verifies the general information data

#Scenario-3
@RegressionTest
Scenario: Clearing the General Information Data
    Given User navigates to the general information page
    When User clear the Project Bio data
    And User remove the uploaded files
    Then User verifies the deleted general information data

#Scenario-4
@RegressionTest
Scenario: Verifying the Your WELL Certification Story page
    Given User navigates to the Profile page
    When User clicks on Your WELL Certification Story button
    Then User verifies the your WELL Certification story page fields
    
#Scenario-5
@RegressionTest
Scenario: Creating WELL Certification Story
    Given User navigates to the Your WELL Certification story page
    When User enters data to WELL Certification Story question fields
    And User clicks on save profile button
    Then User verifies the WELL Certification story data

#Scenario-6
@RegressionTest
Scenario: Clearing the WELL Certification Story Data
    Given User navigates to the Your WELL Certification story page
    When User clear the WELL Certification Story question data
    Then User verifies the deleted WELL Certification Story data

#Scenario-7
@SmokeTest
Scenario: Well certification Project Profile creation
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    And User enters data to Project Bio field
    And User add Logo and Attached Primary Profile Images
    And User clicks on save profile button
    And User verifies the profile data
    And User click on Your WELL Certification Story button
    And User enters data to WELL Certification Story question fields
    And User clicks on save profile button
    Then User verifies the added data