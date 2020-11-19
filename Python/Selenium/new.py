from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


PATH = '/home/chris/chromedriver/chromedriver'
driver = webdriver.Chrome(PATH) 
# define the path to chromedive file and set the chrome brwser to open this file

driver.get('https://www.techwithtim.net/')
# otwiera adres

# driver.quit()
# zamyka stronę

print(driver.title)
# pisze tytuł strony w consoli

search = driver.find_element_by_name("s")
search.send_keys("test")
search.send_keys(Keys.RETURN)
# wpisanie test w pole wyszukiwanie i klepnięcie entra

try: 
    main = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "main"))
        # czeka 10 sekund aż element main się załaduje
    )
    articles = main.find_elements_by_tag_name("article")
    for article in articles:
        header = article.find_element_by_class_name("entry-summary")
        print(header.text)
finally: 
    driver.quit() 
    # ten blok kodu czeka, aż element zostanie załadowany zanim wykona się kolejne polecenie   

main = driver.find_element_by_id("main")


driver.quit()