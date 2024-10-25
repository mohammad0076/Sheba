Feature: Apply Leave Feature Test



  Background:  Verify that Login should be success
    Given User navigates to the application
    Given User enter the username as "Admin"
    And User enter the password as "admin123"
    And Click on the login button
    
   Scenario: Verify that user can apply leave successfully
    When User navigates to the "Apply Leave" page
    And User selects "CAN - FMLA" from the dropdown
    And Check that the leave balance is visible 
    And User Select "From Date" of leave
    # And User Select "To Date" of leave
    And User fills in the leave comment as "I would like to request a full-day leave for family. Thank you."
    And User apply for the leave
    And Cehck that leave applied successfully
