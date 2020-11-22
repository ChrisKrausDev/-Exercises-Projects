# https://www.youtube.com/watch?v=9_5Wqgni_Xw

import unittest
from selenium import webdriver
import page

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        print("setup")
        self.driver = webdriver.Chrome('/home/chris/chromedriver/chromedriver')
        self.driver.get("http://www.python.org")

    def test_title(self):
        mainPage = page.MainPage()
        assert mainPage.is_title_matches()

    def tearDown(self):
         self.driver.close()

if __name__ == "__main__":
# if we'll run this module
    unittest.main()
    # we'll run all unittests
        