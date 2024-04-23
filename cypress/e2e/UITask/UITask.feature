Feature: Feature name


    Scenario Outline: home page
    Given as a user I can visit login page
    When as a user I can enter valid email "<userName>"
    And as a user I can enter valid password "<Password>"
    And as a user I can click on login button
    And as a user I can click on tab "<tabName>" in the left side
    And as a user I can save number of records
    And as a user I can click on add a new record
    And as a user I can click on user role dropdown list
    And as a user I can select "<userRole>" from the user role dropdown list
    And as a user I can select any random employee starts with "<randomUser>"
    And as a user I can click on status dropdown list
    And as a user I can select "<status>" from the status dropdown list
    And as a user I can type "<username>" in the Username field
    And as a user I can type "<password>" in the password field
    And as a user I can type "<password>" in the confirm password field
    And as a user I can click on save button
    And as a user I can see that the record is increased by 1
    And as a user I can search by "<username>" in the search bar
    And as a user I can click on the search Icon
    And as a user I can delete the user "<username>"
    And as a user I can confirm delete
    Then as a user I can see that the record is decrease by 1

     Examples:
    | userName                  | Password    | tabName | userRole | randomUser | status  | username        | password  |
    | Admin                     | admin123    | Admin   | Admin    | add        | Enabled | usernameRandom  | password1 |