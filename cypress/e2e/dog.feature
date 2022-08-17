Feature: Google
    Scenario: Simple Google Test
    Given I navigate to Google
    And I search for dogs
    Then I expect to see results for dogs