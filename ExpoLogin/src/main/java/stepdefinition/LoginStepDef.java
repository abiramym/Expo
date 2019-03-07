package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
	
	WebDriver driver;
	
	@Given("^User in the login Page$")
	public void user_in_the_login_Page(){
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://expo.io/login");
	}
	
	@When("^Enter the username and password$")
	public void enter_the_username_and_password() {
		String title = driver.getTitle();
		System.out.println(title);
		driver.findElement(By.name("username")).sendKeys("abiramy89");
		driver.findElement(By.name("password")).sendKeys("abi@1234");
		
	}
	
	@Then("^Click on login button$")
	public void click_on_login_button() {
	   
	   driver.findElement(By.className("css-1gwxvtm")).click();
 		   
	}

	@Then("^Enter the home page and validate$")
	public void enter_the_home_page_and_validate() {
	    WebElement element = driver.findElement(By.className("css-gnxxwf"));
	    if (element.isDisplayed()){
	    	System.out.println("Object Found");
	    	
	    }else {
	    	System.out.println("Object not found");
	    }
	    
	    
	    
	   
	}


		
		
		
	}
	
	
	


