#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                              Reviewed By:
# Date : 10/01/2022                                                    Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Creating and validating Enroll for V2 Project
# Feature Description: Creating and validating Enroll for WELL Certification, WELL Core Certification and Project for special country like China, Hong Kong and Macao
#---------------------------------------------------------------------------------------
Feature: F04-Creating and validating Enroll for V2 Project

 #Scenario-1
    @RegressionTest
    Scenario:Validation Project Owner page
        Given User navigates to the Project Owner page by clicking Enroll button from the project dashboard by logging in to the wellcertified
        And User verifies the project owner page fields
        When User clicks on continue button without entering the mandatory fields for project owner
        And User verifies the error message for mandatory fields for project owner
        And User navigate to Project Owner form on the enrollment page
        And User enters data to Owner organization, Owner name, Owner email, Owner phone, Industry, Organization website and Organization Overview fields
        And User selects construction or renovation option
        And User selects Other certifications being pursued option
        And User sets the Estimated date of document submission and Anticipated date of construction completion
        And User selects market sectors from the drop down
        And User clicks on continue button for saving project owner
        Then User will be redirected to the project address form page
        And User verifies the added project owner by clicking on back button

    #Scenario-2
    @RegressionTest
    Scenario: Validating Project Address page
        Given User redirects to Project address page
        And User verifies the project address page fields
        When User clicks on continue button without entering the mandatory fields for project address
        Then User verifies error message for mandatory fields for project address

    #Scenario-3
    @SmokeTest
    Scenario Outline:Filling Enrollment for Sector '<V2projectid>'
        Given User navigates to the Enroll page by selecting the project '<V2projectid>' from Enrollment list by logging in to the wellcertified
        When User enters data to Owner organization, Owner name, Owner email, Owner phone, Industry, Organization website and Organization Overview fields
        And User selects construction or renovation option
        And User sets the Estimated date of document submission and Anticipated date of construction completion
        And User selects market sectors from the drop down
        And User clicks on continue button for saving project owner
        ###Project address page
        And User navigate to the Project address page
        And User enters data to Country '<Country>', State '<State>', Street address, City and Postal Code fields for Project Address
        And User fills Owner Address for special Country '<Country>', State '<State>'
        And User clicks on continue button for saving project address
        Then User redirect to Billing page and verifies

        Examples:
            | V2projectid    | Country | State |
            | ChinaV2Project | China   | Henan |
            
    #Scenario-4
    @SmokeTest
    Scenario Outline:Filling Enrollment for '<V2projectid>'
        Given User navigates to the Enroll page by selecting the project '<V2projectid>' from Enrollment list by logging in to the wellcertified
        When User enters data to Owner organization, Owner name, Owner email, Owner phone, Industry, Organization website and Organization Overview fields
        And User selects construction or renovation option
        And User selects Other certifications being pursued option
        And User sets the Estimated date of document submission and Anticipated date of construction completion
        And User clicks on continue button for saving project owner
        ###Project address page
        And User navigate to the Project address page
        And User enters data to Country '<Country>', State '<State>', Street address, City and Postal Code fields for Project Address in projectid '<V2projectid>'
        And User enters data to Country '<Country>', State '<State>', Street address, City and Postal Code fields for Owner Address in projectid '<V2projectid>'
        And User clicks on continue button for saving project address
        Then User redirect to Billing page and verifies

        Examples:
            | V2projectid       | Country          | State            |
            | WellV2Project     | India            | Karnataka        |
            | WellCoreV2Project | India            | Karnataka        |
            | HongKongV2Project | Hong Kong, China | Hong Kong Island |
            | MacaoV2Project    | Macao, China     |                  |



