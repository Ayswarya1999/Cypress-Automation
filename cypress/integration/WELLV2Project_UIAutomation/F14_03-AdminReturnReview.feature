#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                            Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Admin Return Review for WELL V2 Project
# Feature Description: Validating Admin Return Review for WELL V2 Project
#---------------------------------------------------------------------------------------
Feature: F14.3-Validating Admin Return Review for WELL V2 Project

    #Scenerio-1
    @RegressionTest
    Scenario:Verifies Review page
        Given User navigating to the Review Page by logging in to the wellcertified
        When User clicks on Review button
        Then User will be redirected to projects Reviews list page
        And User verifies the Submitted and Estimated Review date
        And User verifies Review phase in the Review list
        And User verifies status in the Review list

    #Scenerio-2
    @RegressionTest
    Scenario:Verifies Preliminary Precertification Review
        Given User navigating to the Preliminary Precertification Review
        When User clicks on view button
        Then User will be redirected to Preliminary Precertification Review page
        And User verifies Preliminary Precertification fields
        And User verifies status
        And User verifies comments
        
    #Scenerio-3
    @SmokeTest
    Scenario:Return Review
        Given User navigating to the return review
        When User enter Review comment
        And User set the review date
        And User select paid in payment status
        And User clicks on Submit response 
        Then User will be redirected to Preliminary Precertification Review page
        And User verifies on document download
        And User verifies on report download        
        And User verifies comments after return review
        And User verifies status after return review
        And User verifies the payment status
        




