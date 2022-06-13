#-------------------------------------------------------------------------------------
# Authors : Seena                                                   Reviewed By:
# Date : 10/05/2022                                                Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Profile for WELL Performance Rating
# Feature Description: Validating Profile for WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F08-Validating Profile for WELL Performance Rating

#Scenario-1
@RegressionTest
Scenario: Verifying the WELL Performance Rating Story page
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    Then User is redirected to the WELL Performance Rating Story tab in the profile page
    And User verifies the WELL Performance Rating Story page fields

#Scenario-2
@RegressionTest
Scenario: Creating WELL Performance Rating Story
    Given User navigates to the WELL Performance Rating Story page
    When User enters data to WELL Performance Rating Story question fields
    And User clicks on save profile button
    Then User verifies the WELL Performance Rating Story data

#Scenario-3
@RegressionTest
Scenario: Clearing the WELL Performance Rating Story Data
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    And User clear the WELL Performance Rating Story question data
    Then User verifies the deleted WELL Performance Rating Story data

#Scenario-4
@RegressionTest
Scenario: Verifying the General Information page
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    And User clicks on General information tab in the profile page
    Then User is redirected to the general information tab in the profile page 
    And User verifies the General information page fields

#Scenario-5
@RegressionTest
Scenario: Creating the General Information
    Given User navigates to the general information page
    When User enters data to organization field
    And User add Logo and Attached Primary Profile Images 
    And User clicks on save profile button
    Then User verifies the general information data

#Scenario-6
@RegressionTest
Scenario: Clearing the General Information Data
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    And User clicks on General information tab in the profile page
    When User clear the organization data
    And User remove the uploaded files
    Then User verifies the deleted general information data

#Scenario-7
@SmokeTest
Scenario: WELL Performance Rating Profile creation
    Given User navigates to the Profile page by logging in to wellcertified
    When User clicks on Profile from the left menu
    And User enters data to WELL Performance Rating Story question fields
    And User clicks on save profile button
    And User clicks on Profile from the left menu
    And User clicks on General information button
    And User enters data to organization field
    And User add Logo and Attached Primary Profile Images
    And User clicks on save profile button
    Then User verifies the profile data
    
    