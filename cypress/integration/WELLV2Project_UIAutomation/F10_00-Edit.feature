#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                              Reviewed By:
# Date : 10/01/2022                                                    Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Updating and validating Edit
# Feature Description: Updating and validating Edit module
#---------------------------------------------------------------------------------------
Feature: F10-Update WELL V2 Project

    #Scenario-1
    @RegressionTest
    Scenario: Verifying Edit page for V2 Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        Then User will be redirected to the WELL Certification Edit page successfully
		
    #Scenario-2
    @RegressionTest
    Scenario: Verifying Project Information fields for V2 Project
        Given User navigate to the Project Information page by logging in to wellcertified
        When User clicks on Project Information button
        And User verifies the Project Information fields
        And User updates the project informations
        And User clicks on Save Changes button
        Then User will be redirected to the WELL Dashboard page successfully

    #Scenario-3
    @RegressionTest
    Scenario: Verifying Updated Project Information
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        Then User verifies the updated project informations
		
	#Scenario-4
    @RegressionTest
    Scenario: Verifying Owner Information fields for V2 Project
        Given User navigate to the Owner Information page
        When User clicks on Owner Information button
        And User verifies the Owner Information fields
        And User updates the Owner Information
        And User clicks on Save Changes button
        Then User will be redirected to WELL Dashboard page successfully

    #Scenario-5
    @RegressionTest
    Scenario: Verifying Updated Owner Information
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User clicks on Owner Information button
        Then User verifies the updated Owner Information
		
	#Scenario-6
    @RegressionTest
    Scenario: Verifying Address fields for V2 Project
        Given User navigate to the Address page by logging in to wellcertified
        When User clicks on Address button
        And User verifies the project Address fields
        And User updates the project Address fields
        And User clicks on Save Changes button
        Then User will be redirected to WELL Dashboard page successfully
		
	#Scenario-7
    @RegressionTest
    Scenario: Verifying Updated Address fields
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User clicks on Address button
        Then User verifies the updated Address fields

    #Scenario-8
    @SmokeTest
    Scenario: Edit Functionalities for V2 Project
        Given User navigate to the Edit page by logging in to wellcertified
        When User clicks on Edit tab
        And User updates the project informations
        And User clicks on Save Changes button
        And User clicks on Edit button from the left pannel
        And User clicks on Owner Information button
        And User updates the Owner Information
        And User clicks on Save Changes button
        And User clicks on Edit button from the left pannel
        And User clicks on Address button
        And User updates the project Address fields
        And User clicks on Save Changes button
        Then User will be redirected to WELL Dashboard page successfully