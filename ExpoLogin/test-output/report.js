$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login Functionality and validate Home page of expo.io",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 77,
      "value": "### Data driven - using Map Tables"
    }
  ],
  "line": 80,
  "name": "Expo Login Test Scenario",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "User in the login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Enter the Credentials to login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 85
    },
    {
      "cells": [
        "abiramy89",
        "abi@1234"
      ],
      "line": 86
    },
    {
      "cells": [
        "srinu89",
        "sri@1234"
      ],
      "line": 87
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Enter the home page and validate",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_in_the_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.enter_the_Credentials_to_login(Credentials\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.enter_the_home_page_and_validate()"
});
formatter.result({
  "status": "skipped"
});
});