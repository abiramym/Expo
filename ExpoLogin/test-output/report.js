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
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "### scenario outline and datatable"
    }
  ],
  "line": 24,
  "name": "Expo Login Test scenario",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User in the login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter the home page and validate",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;;1"
    },
    {
      "cells": [
        "abiramy8",
        "abi@1234"
      ],
      "line": 36,
      "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;;2"
    },
    {
      "cells": [
        "srinu89",
        "sri@1234"
      ],
      "line": 37,
      "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Expo Login Test scenario",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User in the login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Enter the \"abiramy8\" and \"abi@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter the home page and validate",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_in_the_login_Page()"
});
formatter.result({
  "duration": 5830687048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abiramy8",
      "offset": 11
    },
    {
      "val": "abi@1234",
      "offset": 26
    }
  ],
  "location": "LoginStepDef.enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 330448114,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_login_button()"
});
formatter.result({
  "duration": 246655213,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_home_page_and_validate()"
});
formatter.result({
  "duration": 308772848,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Expo Login Test scenario",
  "description": "",
  "id": "login-functionality-and-validate-home-page-of-expo.io;expo-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User in the login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Enter the \"srinu89\" and \"sri@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter the home page and validate",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_in_the_login_Page()"
});
formatter.result({
  "duration": 4503589125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "srinu89",
      "offset": 11
    },
    {
      "val": "sri@1234",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 333545150,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_login_button()"
});
formatter.result({
  "duration": 214193229,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_the_home_page_and_validate()"
});
formatter.result({
  "duration": 233284599,
  "status": "passed"
});
});