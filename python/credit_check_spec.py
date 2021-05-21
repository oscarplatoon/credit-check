import unittest
from credit_check import credit_check

class TestCreditCheck(unittest.TestCase):
    def test_returns_string(self):
        self.assertEqual(type(credit_check("123")) == str, True)

    def test_works_for_case_1(self):
        self.assertEqual(credit_check("5541808923795240"), "The number is valid!")

    def test_works_for_case_2(self):
        self.assertEqual(credit_check("4024007136512380"), "The number is valid!")
    
    def test_works_for_case_3(self):
        self.assertEqual(credit_check("6011797668867828"), "The number is valid!") 
    
    def test_works_for_case_4(self):
        self.assertEqual(credit_check("5541801923795240"), "The number is invalid!")
    
    def test_works_for_case_5(self):
        self.assertEqual(credit_check("4024007106512380"), "The number is invalid!")

    def test_works_for_case_6(self):
        self.assertEqual(credit_check("6011797668868728"), "The number is invalid!") 

"""
print(credit_check('5541808923795240') == "The number is valid!")
print(credit_check("4024007136512380") == "The number is valid!")
print(credit_check("6011797668867828") == "The number is valid!")

print(credit_check("5541801923795240") == "The number is invalid!")
print(credit_check("4024007106512380") == "The number is invalid!")
print(credit_check("6011797668868728") == "The number is invalid!")
"""