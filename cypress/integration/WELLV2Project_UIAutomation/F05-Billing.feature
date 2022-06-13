#-------------------------------------------------------------------------------------
# Authors : Gokul & Seena                Reviewed By:
# Date : 10/01/2022                      Reviewed On:
# Last Updated By:
# Last Updated On:
# Feature Name: Creating and verfies the Billing Page for V2 project
# Feature Description: Creating and verfies the Billing Page for V2 project
#---------------------------------------------------------------------------------------
Feature:F05-Creating and validating the Billing for V2 project

  #Scenario-1
    @RegressionTest
    Scenario:Billing page validation
        Given User navigate to the Billing page by logging in to wellcertified
        When User clicks on Billing tab
        Then User will be redirected to the WELL Certification Billing page successfully
        And User verifies fields on the Billing page

    #Scenario-2
    @RegressionTest
    Scenario:Invoice page validation
        Given User navigate to the Invoice page
        Then User will be redirected to the WELL Certification Invoice page successfully
        And User verifies fields on the Invoice page
        And User verifies WELL logo on the Invoice page
        And User verifies WELL Address for United States on the Invoice page
        And User verifies Owner Name on the Invoice page
        And User verifies Owner Email on the Invoice page
        And User verifies Project Name on the Invoice page
        And User verifies Address on the Invoice page
        And User verifies country on the Invoice page
        And User verifies date on the Invoice page
        And User verifies Amount on the Invoice page
        And User verifies fields on the Payment Options

    #Scenario-3
    @RegressionTest
    Scenario:Update Invoice page validation
        Given User navigate to the Update Invoice page
        Then User will be redirected to the WELL Certification Update Invoice page successfully
        And User verifies fields on the Update Invoice page
        And User verifies date on the Invoice page

    #Scenario-4
    @SmokeTest
    Scenario:Billing for country discount in WELL V2 project
        Given User navigate to the WELL Certification enrollments list page by logging in to wellcertified
        When User search for the project by project ID
        And User clicks on the Apply button
        And User clicks on Billing tab
        And User clicks on pay now button
        And User enters the Card Details
        ######################Verfies the Receipt page#############################
        And User clicks on pay now button and verifies the Receipt for the payment
        #And  User Verifies the Receipt page by clicking on back button
        Then User will be redirected to WELL Certification Receipt page successfully
        And User verifies fields on the Receipt page
        And User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing and Billing

    #Scenario-5
    @SmokeTest
    Scenario:Billing for country discount in WELL V2 core project
        Given User navigate to the WELL Certification enrollments list page by logging in to wellcertified
        When User search for the WELL V2 core project by project ID
        And User clicks on the Apply button for the WELL V2 core project
        And User clicks on Billing tab
        And User clicks on pay now button
        And User enters the Card Details
        ######################Verfies the Receipt page#############################
        And User clicks on pay now button and verifies the Receipt for the payment
        #And  User Verifies the Receipt page by clicking on back button
        Then User will be redirected to WELL Certification Receipt page successfully
        And User verifies fields on the Receipt page
        And User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing and Billing
  
#Scenario-6
    @SmokeTest
    Scenario Outline: Billing for Sector discount '<V2ProjectID>'
        Given User navigates to the Billing page by selecting the project Id '<V2ProjectID>' from project list by logging in to the wellcertified
        And User verifies fields on the Billing page for sector discount
        When User clicks on pay now button for special country
        And User enters the Card Details
         ######################Verfies the Receipt page#############################
        And User clicks on pay now button and verifies the Receipt for the payment
       # And  User Verifies the Receipt page by clicking on back button
        Then User will be redirected to WELL Certification Receipt page successfully
        And User verifies fields on the Receipt page
        And User Verifies left panel tab names for Dashboard, Team, Alternatives, Overview, Edit, Pricing and Billing
        
        Examples:
            | V2ProjectID       |
            | ChinaV2Project    |
            
    #Scenario-7
    @SmokeTest
    Scenario Outline: Billing for No discount '<V2ProjectID>'
        Given User navigates to the Billing page by selecting the project Id '<V2ProjectID>' from project list by logging in to the wellcertified
        And User verifies fields on the Billing page for special country
        When User clicks on pay now button for special country
        And User verifies invoice form fields
        And User enters the Card Details
        And User clicks on pay now button and verifies the Receipt for the payment
        Then User will be redirected to WELL Certification Receipt page successfully
       # And User Verifies the Receipt by clicking on back button

        Examples:
            | V2ProjectID       |
            | HongKongV2Project |
            | MacaoV2Project    |

   