package testrunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Srinu\\git\\AbiTestMvn\\Reset\\src\\main\\java\\Features",
	glue= {"stepdefinition"})


public class Runner {

}
