#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 09/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Checklist
# Feature Description: Creating and validating Checklist for WELL Certification Project
#------------------------------------------------------------------------------------
Feature: F06-Creating and validating Checklist for WELL Certification Project

    #Scenario-1
    @RegressionTest
    Scenario:Verifying WELL Checklist page fields
        Given User navigate to the Dhashboard page by logging in to wellcertified
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
        When User verifies the status count in progress bar by Selecting YES,May Be and No pursue status
        Then User verifies the percentage in progress bar by Selecting YES pursue status

    #Scenario-4
    @RegressionTest
    Scenario: Verifying Requirements in Checklist part
        Given User is on WELL Checklist page
        When User clicks on Checklist part
        Then User verifies the Requirements fields

    #Scenario-5
    @RegressionTest
    Scenario: Verifying Resources in Checklist part
        Given User navigates to Resources in Checklist part
        Then User verifies the Resources fields

    #Scenario-7
    @RegressionTest
    Scenario: Verifying Documents Upload field
        Given User navigates to Documents in Checklist part
        When User clicks plus icon for document uploaded
        Then User verifies the Add Documents fields
        And User selects verification method
        And User upload document
        And User clikcs on Submit button and verifies the uploaded document
        And User delete the uploaded document
        And User verifies No upload documents Message

    #Scenario-8
    @RegressionTest
    Scenario: Verifying Comments field
        Given User navigates to Comments in Checklist part
        When User clicks plus icon for comments
        Then User verifies the Add comment fields
        And User adds comment
        And User clikcs on Save button and verifies the added comment
        And User delete the comment
        And User verifies deleted comment

    #Scenario-9
    @RegressionTest
    Scenario: Verifying Search functionality in ALL Concepts
        Given User is WELL Checklist page
        When User selects Checklist part name in the verification field
        Then User verifies the search result
        And User clicks on clear filter button

    #Scenario-10
    @SmokeTest
    Scenario:Filling the Checklist for WELL Health Safety
        Given User navigate to the Dhashboard page by logging in to wellcertified
        When User clicks on Checklist tab
        And User selects pursue status as YES for 15 features
        And User verifies the PROGRESS bar after selecting the pursue status
        And User upload document for Support Handwashing Feature
        And User add comment for Support Handwashing Feature
        And User upload document for Reduce Surface Contact Feature
        And User upload document for Improve Cleaning Practices Feature
        And User upload document for Select Preferred Cleaning Products Feature        
        And User upload document for Reduce Respiratory Particle Exposure Feature      
        And User upload document for Develop Emergency Preparedness Plan Part 1 Feature        
        And User upload document for Develop Emergency Preparedness Plan Part 2 Feature        
        And User upload document for Create Business Continuity Plan Feature        
        And User upload document for Plan for Healthy Re-Entry Feature
        And User upload document for Provide Emergency Resources Feature   
        And User upload document for Bolster Emergency Resilience Feature    
        And User upload document for Establish Health Entry Requirements Feature 
        And User upload document for Provide Sick Leave Feature       
        And User upload document for Provide Health Benefits Feature        
        And User upload document for Support Mental Health Recovery Feature       
        And User upload document for Promote Vaccines Feature
        Then User verifies the upload documents for your selected features
        And User verifies the Submit for review option