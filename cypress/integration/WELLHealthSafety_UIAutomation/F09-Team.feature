#-------------------------------------------------------------------------------------
# Authors : Seena                                                      Reviewed By:
# Date : 11/05/2022                                                    Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Creating and validating Team
# Feature Description: Creating and validating Team for WELL Health Safety
#---------------------------------------------------------------------------------------
Feature: F09-Creating and validating Team

     #Scenario-1
     @RegressionTest
     Scenario:Verifies the Team Page
          Given User navigate to the Team page by logging in to wellcertified Account
          Then User will be redirected to Team page successfully
          And User verifies the your WELL health Safety Team page fields

     #Scenario-2
     @RegressionTest
     Scenario:Verifies the Add member fields
          Given User navigate to the Team page
          When User click on Add member button and verifies Add member form fields
          And User clicks on Invite button without entering the mandatory fields for Add member and verifies error message
          And User enters data to Email Address and Project Role fields
          And User selects the Project Authorization option
          And User clicks on invite button
          Then User will be redirected to Team list page successfully
          And User verifies added member in Team list

     #Scenario-3
     @RegressionTest
     Scenario:Verifies the updates Add member fields
          Given User navigate to the Team page
          When User click on edit button and verifies Update member form fields
          And User enters data to the Email Address and Project Role fields
          And User selects the Project Authorization option
          And User clicks on update button
          Then User will be redirected to the Team list page successfully
          And User verifies update member in Team list

     #Scenario-4
     @RegressionTest
     Scenario:Verifies the Delete Team member
          Given User navigate to the Team page
          When User click on delete button
          Then User verifies deleted member in Team list

     #Scenario-5
     @RegressionTest
     Scenario:Verifies the Add member for Non User fields
          Given User navigate to the Team page
          When User click on Add member button and verifies Add member form fields
          And User clicks on Invite button without entering the mandatory fields for Add member and verifies error message
          And User enters data to Email Address and Project Role fields for Non User
          And User selects the Project Authorization option
          And User clicks on invite button
          Then User will be redirected to Team list page successfully
          And User verifies invite pending in Team list for Non User
    
     #Scenario-6
     @SmokeTest
     Scenario: Well certification Team Creation
          Given User navigate to the Team page by logging in to wellcertified Account
          And User clicks on Add member button
          When User enters data to Email Address and Project Role fields
          And User selects the Project Authorization option
          And User clicks on invite button
          Then User verifies added member in Team list
          And User will be redirected to the Team list page successfully

     #Scenario-7
     @SmokeTest
     Scenario:Verifies the Change Administrator
          Given User navigate to the Team page
          When User click on Change Administrator button and verifies Change Administrator fields
          And User clicks on update button without entering the mandatory fields for Change Administrator and verifies error message
          And User enters data to Email Address and Project Role in Change Administrator fields
          And User clicks on update button for Change Administrator
          Then User will be redirected to the Team list page successfully






