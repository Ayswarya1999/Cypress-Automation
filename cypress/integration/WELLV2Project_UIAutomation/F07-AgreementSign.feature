#------------------------------------------------------------------------------------
# Authors : Gokul & Seena                               Reviewed By:Devi and Adil
# Date : 07/02/2022                                     Reviewed On: 08/02/2022
# Last Updated By:
# Last Updated On:
# Feature Name: WELLCertified Agreement Sign
# Feature Description: WELLCertified Agreement Sign and Download Agreement
#------------------------------------------------------------------------------------

Feature: F07-WELLCertified Agreement Sign

 #Scenario-1
    @SmokeTest
    Scenario Outline:Agreement Sign for the WELL '<V2ProjectID>'
        Given User navigate to the Dashboard page by selecting the project Id '<V2ProjectID>' from project list by logging in to the wellcertified
        When User clicks on Sign now button
        Then User will be redirected to WELL V2 Project Dashboard page successfully
        And User Verifies Download Agreement
        And User Verifies left panel tab names for Dashboard, Team, Documents, Scorecard, Reviews, Promotions, Support, Alternatives, Overview, Edit, Pricing and Billing

        Examples:
            | V2ProjectID       |
            | WellV2Project     |
            | ChinaV2Project    |
            | HongKongV2Project |
            | MacaoV2Project    |

