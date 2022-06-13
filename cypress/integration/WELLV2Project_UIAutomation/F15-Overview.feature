#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                        Reviewed By:Adil
# Date : 17/01/2022                              Reviewed On:
# Last Updated By:Gokul
# Last Updated On:31/01/2022
# Feature Name: Validating Overview for WELL V2 Project
# Feature Description: Validating Overview for WELL V2 Project
#---------------------------------------------------------------------------------------

Feature: F15-Validating Overview for WELL V2 Project

# Scenario-1
    @RegressionTest
    Scenario:Overview module for V2 Project
        Given User navigate to the Overview page by logging in to wellcertified
        When User clicks on Overview tab
        Then User redirects to Project Information Page successfully

#Scenario-2
    @RegressionTest
    Scenario:Verifies Project Information fields
       Given User is on Overview page by logging in to wellcertified
       Then User verfies the Project ID
       And User verifies WELL v2 Q4 2021 addenda
       And User verfies the Gross Area
       And User verfies the Project Location
       And User verfies the Anticipated Date of construction completion
       And User verfies the Estimated date of document submission
       And User verfies the Owner
       And User verfies the Owner Industry
       And User verifies the Owner Website
  