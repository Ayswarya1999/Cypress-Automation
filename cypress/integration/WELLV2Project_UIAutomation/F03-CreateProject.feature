#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                        Reviewed By: Devi and Adil
# Date : 09/02/2022                              Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Create V2 Project
# Feature Description: Create WELL Certification Project, Create WELL Core Certification Project and V2 Project Creation  for special country(China, Hongkong, Macau)
#---------------------------------------------------------------------------------------
Feature: F03-Create and validate WELL V2 Project

    #Scenario-1
    @RegressionTest
    Scenario:V2 Project Name form page validation
        Given User navigate to the WELL v2 Project Lists page by logging in to wellcertified
        When User click on Start a v2 project button and verifies Create form fields
        And User clicks on continue button without entering the mandatory fields and verifies error meassage
        And User enter data to Project name field
        And User clicks on continue button
        Then User will be redirected to project location form page successfully
        And User Verifies the added project name by clicking on back button

    #Scenario-2
    @RegressionTest
    Scenario:V2 Project location form page validation
        Given User navigates to the project location page
        And User verifies the project location page fields
        When User clicks on continue button without entering the mandatory fields for location and verifies error message
        And User enters data to Country, State, Street address, City and Postal Code fields
        And User clicks on continue button for Project location
        Then User will be redirected to the project details form page successfully
        And User verifies the added project location by clicking on back button

    #Scenario-3
    @RegressionTest
    Scenario:V2 Project Area form page validation
        Given User navigates to the WELL v2 Project details page
        And User verifies the Project Area Size in sqm by entering the sqft value
        When User clicks on continue button without entering the mandatory fields for area size and verifies error message
        And User enter data to Project area field and clicks on continue button
        Then User will be redirected to the project details space type form page successfully
        And User verifies the added Project Area Size by clicking on back button

    #Scenario-4
    @RegressionTest
    Scenario:V2 Project space type form page validation
        Given User navigates to the WELL v2 Project space type
        And User verifies the Project space type fields
        When User clicks on continue button without entering the mandatory fields for space type and verifies error message
        And User checks the multiple checkbox space type option and click on continue button
        Then User will be redirected to the WELL Program page successfully

    #Scenario-5
    @RegressionTest
    Scenario:V2 choose a program page validation
        Given User navigates to the choose a program page
        And User verifies the choose a program page fields
        When User selects the well certification program for V2 project
        Then User verifies the choose a program by clicking on back button

    #Scenario-6
    @RegressionTest
    Scenario:V2 choose a program ownership type page validation
        Given User navigates to the choose a program ownership type page
        And User verifies the choose a program ownership type page fields
        When User clicks on continue button without entering the mandatory fields for ownership type and verifies error message
        And User selects the ownership type radio button and click continue button
        Then User verifies the project creation

    #Scenario-7
    @RegressionTest
    Scenario:Back To List link in choose a program ownership page validation
        Given User navigate to the WELL Certification Creation page by logging in to wellcertified
        When User enter data to Project name field
        And User clicks on continue button
        ###Project location page
        And User navigate to the WELL v2 Project location page
        And User enters data to Country, State, Street address, City and Postal Code fields
        And User clicks on continue button for Project location
        ###v2 Project details page
        And User navigate to the WELL v2 Project details page
        And User enter data to Project area field and clicks on continue button
        And User checks the multiple checkbox space type option and click on continue button
        ###v2 Project program page
        And User navigates to the WELL v2 Project program page
        Then User verifies by click on back to list button


    #Scenario-8
    @SmokeTest
    Scenario:V2 Project Creation
        Given User navigate to the WELL V2 Creation page by logging in to wellcertified
        When User enter data to Project name field
        And User clicks on continue button
        ###Project location page
        And User navigate to the WELL v2 Project location page
        And User enters data to Country, State, Street address, City and Postal Code fields
        And User clicks on continue button for Project location
        ###v2 Project details page
        And User navigate to the WELL v2 Project details page
        And User enter data to Project area field and clicks on continue button
        And User checks the multiple checkbox space type option and click on continue button
        ###v2 Project program page
        And User navigates to the WELL v2 Project program page
        And User selects the program for V2 project
        And User selects the ownership type radio button and click continue button
        Then Project Created and user redirect to the Project Dashboard page
        And User enters Estimate Date of Document submission
        And Get the WELL V2 project ID and store into Json
        And User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing, Billing and Enroll

    #Scenario-9
    @SmokeTest
    Scenario:V2 Core Project Creation
        Given User navigate to the WELL V2 Creation page by logging in to wellcertified
        When User enter data to Project name field
        And User clicks on continue button
        ###Project location page
        And User navigate to the WELL v2 Project location page
        And User enters data to Country, State, Street address, City and Postal Code fields
        And User clicks on continue button for Project location
        ###v2 Project details page
        And User navigate to the WELL v2 Project details page
        And User enter data to Project area field and clicks on continue button
        And User checks the multiple checkbox space type option and click on continue button
        ###v2 Project program page
        And User navigates to the WELL v2 Project program page
        And User selects the program for WELL Core certification
        Then Project Created and user redirect to the Project Dashboard page
        And User enters Estimate Date of Document submission
        And Get the WELL V2 core project ID and store into Json

    #Scenario-10
    @SmokeTest
    Scenario Outline:V2 Project Creation for special country('<Country>')
        Given User navigate to the WELL V2 Creation page by logging in to wellcertified
        When User enter data to Project name field
        And User clicks on continue button
        ###Project location page
        And User navigate to the WELL v2 Project location page
        And User enters data to Country '<Country>' , State '<State>' , Street address, City and Postal Code fields
        And User clicks on continue button for Project location
        ###v2 Project details page
        And User navigate to the WELL v2 Project details page
        And User enter data to Project area field and clicks on continue button
        And User checks the multiple checkbox space type option and click on continue button
        ###v2 Project program page
        And User navigates to the WELL v2 Project program page
        And User selects the program for V2 project
        And User selects the ownership type radio button and click continue button
        Then Project Created and user redirect to the Project Dashboard page
        And User enters Estimate Date of Document submission
        And Get the V2 project ID for special country and store into Json

        Examples:
            | Country          | State            |
            | China            | Henan            |
            | Hong Kong, China | Hong Kong Island |
            | Macao, China     |                  |


