package testrunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Srinu\\git\\Expo\\ExpoLogin\\src\\main\\java\\Features",//sepcify the path of feature file
	glue= {"stepdefinition"}, // specify the stepdefiniton folder
	format= {"pretty","html:test-output"}, // generate output in the specified location with different formats like html,json
	monochrome = true, // define the console output in a clear way
	strict = true, // to check if any step is not defined in the step def file and throws error
	tags = {"@tag1"},
	dryRun = false // to check the mapping is fine between feature and stepdef file
	
		)

//CucumberOptions - Features,glue,format
//dryRun=true

public class Runner {

}
