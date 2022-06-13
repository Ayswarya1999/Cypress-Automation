#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                            Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validation for Health-Safety Rating
# Feature Description: Validation for Health-Safety Rating
#--------------------------------------------------------------------------------------
Feature: F18-Validation for Health-Safety Rating

    #Scenario-1
    @RegressionTest
    Scenario:Verifies Health-Safety Rating page for V2 Project
        Given User navigate to the Health-Safety Rating page by logging in to wellcertified
        When User clicks on Health-Safety Rating tab
        Then User verifies the Health-Safety Rating fields
        
    #Scenario-2
    @RegressionTest
    Scenario:Validating Health-Safety Rating fields
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
    Scenario:Validating Health-Safety Rating Checklist page
        Given User navigates to Health-Safety Rating Checklist page
        Then User verifies the Health-Safety Rating Checklist page fields

    #Scenario-4
    @RegressionTest
    Scenario:Validating PROGRESS bar Health-Safety Rating Checklist page
        Given User navigates to Health-Safety Rating Checklist page
        Then User verifies the PROGRESS bar for features

    #Scenario-5
    @RegressionTest
    Scenario:Validating PROGRESS bar by selecting pursue status
        Given User navigates to Health-Safety Rating Checklist page
        And User verifies Select Features page
        When User selects pursue status as YES
        Then User verifies the PROGRESS bar after selecting the pursue status
    
    #Scenario-6
    @RegressionTest
    Scenario:Validating Upload document functionality for features
        Given User navigates to the Health-Safety Rating Checklist page
        And User verifies Upload documents page
        When User upload document for Improve Cleaning Practices Feature
        And User add comment for Improve Cleaning Practices Feature
        And User upload document for Select Preferred Cleaning Products Feature
        And User upload document for Reduce Respiratory Particle Exposure Feature
        And User upload document for Develop Emergency Preparedness Plan Part1 Feature        
        And User upload document for Develop Emergency Preparedness Plan part2 Feature      
        And User upload document for Create Business Continuity Plan Feature        
        And User upload document for Plan for Healthy Re-Entry Feature        
        And User upload document for Provide Emergency Resources Feature        
        And User upload document for Bolster Emergency Resilience Feature
        And User upload document for Establish Health Entry Requirements Feature   
        And User upload document for Provide Sick Leave Feature    
        And User upload document for Provide Health Benefits Feature 
        And User upload document for Support Mental Health Recovery Feature       
        And User upload document for Promote Vaccines Feature        
        And User upload document for Promote Smoke-Free Environment Feature       
        And User upload document for Promote Assess Ventilation Feature
        Then User verifies the upload documents for your selected features
        
    #Scenario-7
    @RegressionTest
    Scenario:Validating Submit for review in Health-Safety Rating
        Given User navigates to the Health-Safety Rating Checklist page
        When User clicks on Submit for Review button
        Then User will redirects to the review page

    #Scenario-8
    @RegressionTest
    Scenario:Validating Review in Health-Safety Rating
        Given User navigate to the Health-Safety Rating page by logging in to wellcertified
        When User clicks on Reviews button     
        And User verifies the review page fields
        And User clicks on Submit Reviews button
        And User selects the project phase
        And User enters the comment
        And User selects the checkboxes
        And User clicks on submit button
        Then User will be redirected to projects Reviews list  






