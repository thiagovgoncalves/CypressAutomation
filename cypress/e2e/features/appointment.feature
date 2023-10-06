Feature: Create an appointment
    Scenario: A pet owner wants to create an appointment
        Given The client navigates to the appointment page
        When The client fills all the fields in the form and clicks add appointment
        Then The appointment should be created

    Scenario: A pet owner wants to delete an appointment
        Given The client created an appointment
        When The client clicks the button delete
        Then The appointment should be deleted

    Scenario: A pet owner wants to submit without filling the form
        Given The client navigates to the appointment page
        When The client clicks add appointment without filling the form
        Then The page should display an error message

    Scenario: A pet owner tries to create an appointment to a past date
        Given The client navigates to the appointment page
        When The client inputs a date in the past and clicks add appointment
        Then The page should display an error message
