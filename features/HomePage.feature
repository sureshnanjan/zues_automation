Feature: Heroku App Application Features
  Scenario: Home Page Items Check
    Given Heroku Home Page is available
    When available examples are counted
    Then I should have 48 results
  Scenario: Home Page Title Check
    Given Heroku Home Page is available
    When the title is read
    Then I should have "Welcome to Internet"
  Scenario: Home Page fork on github feature
    Given Heroku Home Page is available
    When right side bar is viewed
    Then I should have "Fork on Github" Text