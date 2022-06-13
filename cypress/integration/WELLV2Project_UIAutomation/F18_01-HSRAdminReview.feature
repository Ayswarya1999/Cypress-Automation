#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                                            Reviewed By:
# Date : 10/01/2022                                                  Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Validating Submit for Review in Health-Safety Rating
# Feature Description: Validating Submit for Review in Health-Safety Rating
#--------------------------------------------------------------------------------------
Feature: F18.1-Validating Submit for Review in Health-Safety Rating

    #Scenerio-1
    @RegressionTest
    Scenario:Validation Submit for Review in Health-Safety Rating
        Given User navigating to the Review Page by logging in to the wellcertified
        When User clicks on Reviews button
        And User clicks on view button
        And User clicks on return review button
        And User enter Review comment
        And User set the review date
        And User enter HSR Review Comment
        And User set HSR Review Date
        And User select paid in payment status
        And User clicks on Submit response
        Then User will be redirected to Preliminary Precertification Review page
        And User verifies on document download
        And User verifies on report download        
        And User verifies status after return review
        And User verifies the payment status
