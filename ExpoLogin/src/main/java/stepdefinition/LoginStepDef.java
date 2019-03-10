package stepdefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {
	
	WebDriver driver;
	
	@Given("^User in the login Page$")
	public void user_in_the_login_Page(){
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS); // implicitly wait applies to all elements and make the webdriver to wait for specified timeunit until the traget page appears
		driver.get("https://expo.io/login");
	}
	
	// passing the value directly // worked fine
//	@When("^Enter the username and password$")
//	public void enter_the_username_and_password() {
//		String title = driver.getTitle();
//		System.out.println(title);
//		driver.findElement(By.name("username")).sendKeys("abiramy89");
//		driver.findElement(By.name("password")).sendKeys("abi@1234");
//		
//	}
	
	// parametrisation // // worked fine while passing through <scenario & variable> <scenario outline and example>
	@When("^Enter the \"(.*)\" and \"(.*)\"$")
	public void enter_the_username_and_password(String arg1,String arg2) {
		String title = driver.getTitle();
		System.out.println(title);
		driver.findElement(By.name("username")).sendKeys(arg1);
		driver.findElement(By.name("password")).sendKeys(arg2);
		
	}	
	
	// passing the array 
	@When("^Enter the credentials to login$")
	public void enter_the_credentials_to_login(DataTable usercred) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> cred = usercred.raw();
		driver.findElement(By.name("username")).sendKeys(cred.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(cred.get(0).get(1));
	   
	}
	
	@When("^Enter the Credentials to login$")
	public void enter_the_Credentials_to_login(List<Credentials> Usercred) throws Throwable {
	   
		//handle datatable
		for (Credentials credentials : Usercred) {
			driver.findElement(By.name("username")).sendKeys(credentials.getUsername());
			driver.findElement(By.name("password")).sendKeys(credentials.getPassword());
		   
		}
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
	
	
	


