import pytest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager

@pytest.fixture()
def browser():
	driver = webdriver.Chrome(ChromeDriverManager().install())
	yield driver
	driver.quit()

def test(browser):
	browser.get('http://localhost:4000/')
	browser.get_screenshot_as_png('screenshot/mainpage.png')