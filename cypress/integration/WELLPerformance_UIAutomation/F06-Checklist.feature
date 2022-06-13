#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Checklist
# Feature Description: Creating and validating Checklist for WELL Performance Project
#------------------------------------------------------------------------------------
Feature:F06-Creating and validating Checklist for WELL Performance Project

    #Scenario-1
    @RegressionTest
    Scenario:Verifying WELL Checklist page fields
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Checklist tab
        Then User redirects to Checklist Page successfully
        And User verifies Checklist page fields

    #Scenario-2
    @RegressionTest
    Scenario: Verifying Expand/Collapse Rows in WELLs Checklist page
        Given User is on WELL Checklist page
        When User clicks on ExpandCollapse Rows button
        Then User verifies the expanded rows in Checklist page

    #Scenario-3
    @RegressionTest
    Scenario: Verifying progress bar by Selecting YES pursue status
        Given User is on WELL Checklist page
        When User verifies the features count by Selecting YES,May Be and No pursue status
        Then User verifies the features count by Selecting YES pursue status

    #Scenario-4
    @RegressionTest
    Scenario: Verifying Requirements in Checklist part
        Given User is on WELL Checklist page
        When User clicks on Checklist part
        Then User verifies the Requirements fields

    #Scenario-5
    @RegressionTest
    Scenario: Verifying uploaded document in Verification
        Given User navigates to Verification in Checklist part
        And User verifies the Verification fields
        When User clicks on Add option button
        And User Add options by clicking Add button
        Then User verifies the added options
        And User clicks on Assign locations button
        And User checks the Assign locations checkbox and clicks assign button
        And User upload document
        And User clikcs on Upload button and verifies the uploaded document
        And User delete the uploaded document
        And User verifies No upload documents Message
        And User edit options


    #Scenario-6
    @RegressionTest
    Scenario: Verifying Comments field
        Given User navigates to Comments in Checklist part
        And User verifies the Add comment fields
        When User adds comment
        And User clicks on post button and verifies the added comment
        And User delete the comment
        Then User verifies deleted comment

    #Scenario-7
    @RegressionTest
    Scenario: Verifying Resources in Checklist part
        Given User navigates to Resources in Checklist part
        Then User verifies the Resources fields

    #Scenario-8
    @RegressionTest
    Scenario: Verifying Search functionality in ALL Concepts
        Given User is on WELL Checklist page
        When User selects Checklist part name in the search field
        Then User verifies the search result
        And User clears the search result

    #Scenario-9
    @SmokeTest
    Scenario:Filling the Checklist for WELL Health Safety
        Given User navigate to the Dashboard page by logging in to wellcertified
        When User clicks on Checklist tab
        And User selects pursue status as YES for 21 features
        And User verifies the features count after selecting the pursue status
        And User Add option for Meet Thresholds for Particulate Matter
        And User upload document for Meet Thresholds for Particulate Matter
        And User Add option for Meet Enhanced Thresholds for Particulate Matter
        And User upload document for Meet Enhanced Thresholds for Particulate Matter
        And User Add option for Meet Thresholds for Organic Gases
        And User upload document for Meet Thresholds for Organic Gases
        And User Add option for Meet Enhanced Thresholds for Organic Gases
        And User upload document for Meet Enhanced Thresholds for Organic Gases
        And User Add option for Meet Thresholds for Inorganic Gases
        And User upload document for Meet Thresholds for Inorganic Gases
        And User Add option for Meet Enhanced Thresholds for Inorganic Gases
        And User upload document for Meet Enhanced Thresholds for Inorganic Gases
        And User Add option for Ensure Adequate Ventilation
        And User upload document for Ensure Adequate Ventilation
        And User Add option for Increase Outdoor Air Supply
        And User upload document for Increase Outdoor Air Supply
        And User Add option for Meet Thresholds for Radon
        And User upload document for Meet Thresholds for Radon
        And User Add option for Verify Water Quality Indicators
        And User upload document for Verify Water Quality Indicators
        And User Add option for Meet Chemical Thresholds
        And User upload document for Meet Chemical Thresholds
        And User Add option for Meet Thresholds for Organics and Pesticides
        And User upload document for Meet Thresholds for Organics and Pesticides
        And User Add option for Meet Thresholds for Drinking Water Taste
        And User upload document for Meet Thresholds for Drinking Water Taste
        And User Add option for Provide Visual Acuity
        And User upload document for Provide Visual Acuity
        And User Add option for Lighting for Day-Active People
        And User upload document for Lighting for Day-Active People
        And User Add option for Provide Acceptable Thermal Environment
        And User upload document for Provide Acceptable Thermal Environment
        And User Add option for Manage Relative Humidity
        And User upload document for Manage Relative Humidity
        And User Add option for Limit Background Noise Levels
        And User upload document for Limit Background Noise Levels
        And User Add option for Achieve Sound Isolation at Walls
        And User upload document for Achieve Sound Isolation at Walls
        And User Add option for Achieve Reverberation Time Thresholds
        And User upload document for Achieve Reverberation Time Thresholds
        And User Add option for Meet Thresholds for Impact Noise Rating
        And User upload document for Meet Thresholds for Impact Noise Rating
        Then User verifies the features count after selecting the pursue status


