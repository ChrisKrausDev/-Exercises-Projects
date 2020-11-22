# https://www.youtube.com/watch?v=OISEEL5eBqg

from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

PATH = '/home/chris/chromedriver/chromedriver'
driver = webdriver.Chrome(PATH)

driver.get('https://orteil.dashnet.org/cookieclicker/')

driver.implicitly_wait(5)  
# odczekuje 5 sekund by wszystkie elementy strony mogły się załadować


cookie = driver.find_element_by_id("bigCookie")
cookie_count = driver.find_element_by_id("cookies")
items = [driver.find_element_by_id("productPrice" + str(i)) for i in range(1, -1, -1)]
# tworzy listę elementów z id productPrice + string i, a i zaczyna się od 1 i idzie do 0,
# CZYLI najpierw załaduje >productPrice1< a potem >productPrice0<
# powodem dlaczego najpierw 1 a potem 0 jest to, że lepiej najpierw jest kupić droższy upgrade!

actions = ActionChains(driver)
# nowy ActionChains objekt o nazwie actions, który będzie działał na driverze
actions.click(cookie)

for i in range(5000):
    actions.perform()
    # count = cookie_count.text
    # wyświetla w konsoli ile ciasteczek kliknięte, ale potrzebujemy tylko jedno liczbę reprezentującą ilość ciasteczek więc:
    count = int(cookie_count.text.split(" ")[0])
    # rodzielamy stringa i bierzemy pierwszy znak 
    for item in items: 
        value = int(item.text)
        if value <= count: 
            upgrade_actions = ActionChains(driver)
            upgrade_actions.move_to_element(item)
            upgrade_actions.click()
            upgrade_actions.perform()