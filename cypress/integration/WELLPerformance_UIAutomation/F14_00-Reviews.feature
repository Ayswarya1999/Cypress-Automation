#-------------------------------------------------------------------------------------
# Authors : Seena                                                    Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Review for WELL Performance Rating
# Feature Description: Validating Review for WELL Performance Rating
#---------------------------------------------------------------------------------------
Feature: F14.0-Validating Review for WELL Performance Rating

    #Scenario-1
    @RegressionTest
    Scenario:Verifies the WELL Performance Rating Review
        Given User navigates to the Reviews page by logging in to the wellcertified
        When User clicks on Reviews button
        Then User will be redirected to Reviews page
        And User verifies Reviews fields

    #Scenerio-2
    @RegressionTest
    Scenario:Verifies Preliminary Performance Rating Review page
        Given User navigates to the Reviews page by logging in to the wellcertified
        When User clicks on Reviews button
        And User clicks on Submit Reviews button
        And User verifies incomplete scorecard error message
        And User clicks on submit button without entering the mandatory fields and verifies error meassage
        And User selects the project phase and verifies options
        And User enters the comment
        And User clicks on submit button
        Then User will be redirected to projects Reviews list
        And User verifies Review phase in projects Reviews list
        And User verifies status in projects Reviews list
        And User verifies the Submitted and Estimated Review date in projects Reviews list

    #Scenerio-3
    @RegressionTest
    Scenario:Verifies WELL Performance Rating Reviews View
        Given User navigates to the Reviews page by logging in to wellcertified
        When User clicks on Reviews button
        And User clicks on view button
        Then User will be redirected to Preliminary Performance Rating Review page
        And User verifies Preliminary Performance Rating Review fields
        And User verifies status on Project Reviews
        And User verifies comments on Project Reviews
        And User verifies the Submitted and Estimated Review date on Project Reviews
