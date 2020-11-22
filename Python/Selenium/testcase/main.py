# https://www.youtube.com/watch?v=9_5Wqgni_Xw

import unittest
from selenium import webdriver
import page

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        print("setup")
        self.driver = webdriver.Chrome('/home/chris/chromedriver/chromedriver')
        self.driver.get("http://www.python.org")

    def test_example(self):
        # metoda rozpoczynająca się na test zawsze będzie wywołana automatycznie
        print("test")
        assert False
        # assert true oznacza: zobacz czy warunek po prawej stronie jest prawdziwy

    def not_a_test(self):
        # nazwa nie rozpoczynająca się na test nie zostanie wywołana
        print("this dosn't work")

    def tearDown(self):
         self.driver.close()

if __name__ == "__main__":
# if we'll run this module
    unittest.main()
    # we'll run all unittests
        