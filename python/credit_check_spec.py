import unittest

# Can you translate this driver code to unit tests?

from credit_check import credit_check

class CreditCheckTestCase(unittest.TestCase):
    "test cases"

    def test_returns_string(self):
        "it should return a string"
        self.assertEqual(type(credit_check('5541808923795240')), str)

    def test_returns_valid(self):
        "should return valid string"
        self.assertEqual(credit_check('5541808923795240'), "The number is valid!")

    def test_returns_invalid(self):
        "should return valid string"
        self.assertEqual(credit_check('5541801923795240'), "The number is invalid!")

# print(credit_check('5541808923795240') == "The number is valid!")
# print(credit_check("4024007136512380") == "The number is valid!")
# print(credit_check("6011797668867828") == "The number is valid!")

# print(credit_check("5541801923795240") == "The number is invalid!")
# print(credit_check("4024007106512380") == "The number is invalid!")
# print(credit_check("6011797668868728") == "The number is invalid!")
