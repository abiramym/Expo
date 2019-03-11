#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Login Functionality and validate Home page of expo.io

 ### scenario outline and datatable
  @tag1
  Scenario Outline: Expo Login Test scenario
  
    Given User in the login Page
     
   	When Enter the "<username>" and "<password>"
    
 	  Then Click on login button
    
    Then Enter the home page and validate
   
      Examples: 
 					 | username | password |
 					 | abiramy8| abi@1234 |
 					 | srinu89  | sri@1234 |  
   
    ### pass values directly      
  @tag2
	Scenario: Expo Login Test Scenario
	
		Given	User in the login Page
	
	 When Enter the "srinu89" and "sri@1234"
    
    Then Click on login button
    
    And Enter the home page and validate
    
     #### Paramtrisation pass test data via datatable    
    @tag3
  Scenario: Expo Login Test scenario
  
    Given User in the login Page
     
   	When Enter the credentials to login
  			|abiramy89|abi@1234|
  			|srinu89|sri@1234|
    
 	  Then Click on login button
    
    Then Enter the home page and validate
 
 ### hard code the values in the script - not recommended
 @tag4 
	Scenario: Expo Login Test Scenario
	
		Given	User in the login Page
	
	 	When Enter the username and password
     
    Then Click on login button
    
    And Enter the home page and validate
    
    
    ### Data driven - using Map Tables
    
    @tag5
    Scenario: Expo Login Test Scenario
	
		  Given User in the login Page
	
	 	When Enter the Credentials to login
	 	|username|password|
	 	|abiramy89|abi@1234|
	 	|srinu89|sri@1234|
     
    Then Click on login button
    
    And Enter the home page and validate
    
    @tag6
    Scenario: Expo Login Test Scenario
	
		  Given User in the login Page
	
	 	When Enter the Credentials to login
	 	|username|password|
	 	|abiramy89|abi@1234|
	 	|srinu89|sri@1234|
     
    Then Click on login button
    
    And Enter the home page and validate the user
    |abiramy89|
    |srinu89|
  
    
  
 
   