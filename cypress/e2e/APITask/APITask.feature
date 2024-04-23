Feature: Feature name


    Scenario Outline: home page
    Given as a user I can visit login page
    When as a user I can enter valid email "<userName>"
    And as a user I can enter valid password "<Password>"
    And as a user I can click on login button
    And as a user I can click on tab "<tabName>" in the left side
    And as a user I can save number of records
    And as a user using api I can add a new record with with user name "<username>" and password "<password>"
    And as a user I can see that the record is increased by 1
    And as a user using api I can delete the just created record
    Then as a user I can see that the record is decrease by 1

     Examples:
    | userName                  | Password    | tabName | userRole | randomUser | status  | username        | password  |
    | Admin                     | admin123    | Admin   | Admin    | user       | Enabled | usernameRandom  | password1 |