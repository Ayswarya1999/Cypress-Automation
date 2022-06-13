#-------------------------------------------------------------------------------------
# Authors : Seena                                                   Reviewed By:
# Date : 10/01/2022                                                 Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Resubmit Review for WELL Performance Rating
# Feature Description: Validating Resubmit Review for WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F14.2-Validating Resubmit Review for WELL Performance Rating

    #Scenerio-1
    @RegressionTest
    Scenario:Verifies Review page
        Given User navigating to the Review Page by logging in to the wellcertified
        When User clicks on Review button
        Then User will be redirected to projects Reviews list page
        And User verifies the Submitted and Estimated Review date in projects Reviews list
        And User verifies Review phase in projects Reviews list
        And User verifies status in projects Reviews list

    #Scenerio-2
    @RegressionTest
    Scenario:Resubmit Review
        Given User navigating to the Review page
        When User clicks on view button
        And User clicks on Resubmit review
        And User clicks on submit button and verify error message
        And User enter the comments
        And User clicks on submit button
        Then User will be redirected to Preliminary Performance Rating Review page
        And User verifies comments 
        And User verifies status
        

