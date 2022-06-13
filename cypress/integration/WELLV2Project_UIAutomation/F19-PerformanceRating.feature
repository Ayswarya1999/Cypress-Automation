#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                            Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validation for Performance Rating
# Feature Description: Validation for Performance Rating
#--------------------------------------------------------------------------------------
Feature: F19-Validation for Performance Rating

    #Scenario-1
    @RegressionTest
    Scenario:Verifies Performance Rating page for V2 Project
        Given User navigate to the Performance Rating page by logging in to wellcertified
        When User clicks on Performance Rating tab
        Then User verifies the Performance Rating fields

    #Scenario-2
    @RegressionTest
    Scenario:Validating Performance Rating fields
        Given User is on Confirm Review Cycle Page
        And User clicks on continue button
        And User verifies Confirm Review Cycle Page
        When User checks the checkbox and clicks on View terms and conditions button
        And User redirects to Review terms and conditions page
        And User verifies Review terms and conditions page
        And User checks the Terms & Conditions checkbox and clicks on proceed button
        And User redirects to Pay the Invoice page
        And User verifies Pay the Invoice page
        And User clicks on Go to account button
        Then User redirects to Select Features page

    #Scenario-3
    @RegressionTest
    Scenario:Validating Performance Rating Checklist page
        Given User navigates to Performance Rating Checklist page
        Then User verifies the Performance Rating Checklist page fields

    #Scenario-4
    @RegressionTest
    Scenario:Validating PROGRESS bar Performance Rating Checklist page
        Given User navigates to Performance Rating Checklist page
        Then User verifies the PROGRESS bar for features

    #Scenario-5
    @RegressionTest
    Scenario:Validating PROGRESS bar by selecting pursue status
        Given User navigates to Performance Rating Checklist page
        And User verifies Select Features page
        When User selects pursue status as YES
        Then User verifies the PROGRESS bar after selecting the pursue status

    #Scenario-6
    @RegressionTest
    Scenario:Validating Upload document functionality for features
        Given User navigates to the Performance Rating Checklist page
        And User verifies Upload documents page
        When User upload document for Meet Thresholds for Particulate Matter feature
        And User add comment for Meet Thresholds for Particulate Matter feature
        And User upload document for Meet Enhanced Thresholds for Particulate Matter feature
        And User upload document for Meet Thresholds for Organic Gases feature        
        And User upload document for Meet Enhanced Thresholds for Organic Gases feature        
        And User upload document for Meet Thresholds for Inorganic Gases feature        
        And User upload document for Meet Enhanced Thresholds for Inorganic Gases feature        
        And User upload document for Ensure Adequate Ventilation feature        
        And User upload document for Increase Outdoor Air Supply feature
        And User upload document for Meet Thresholds for Radon feature      
        And User upload document for Verify Water Quality Indicators feature
        And User upload document for Meet Chemical Thresholds feature
        And User upload document for Meet Thresholds for Organics and Pesticides feature
        And User upload document for Meet Thresholds for Drinking Water Taste feature
        And User upload document for Provide Visual Acuity feature
        And User upload document for Lighting for Day-Active People feature
        And User upload document for Provide Acceptable Thermal Environment feature
        And User upload document for Manage Relative Humidity feature
        And User upload document for Limit Background Noise Levels feature
        And User upload document for Achieve Sound Isolation at Walls feature
        And User upload document for Achieve Reverberation Time Thresholds feature       
        And User upload document for Meet Thresholds for Impact Noise Rating feature
        Then User verifies the upload documents for your selected features


       

    