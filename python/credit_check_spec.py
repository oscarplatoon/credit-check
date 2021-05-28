# Can you translate this driver code to unit tests?
import unittest
from credit_check import credit_check

class CreditCheckTestCase(unittest.TestCase):
    """Tests for credit_check.py"""

    def test_return_valid_credit_check(self):
        """When you call credit_check(), it should return valid or not"""
        self.assertEqual(credit_check('5541808923795240'), "The number is valid!")
        self.assertEqual(credit_check('4024007136512380'), "The number is valid!")
        self.assertEqual(credit_check('6011797668867828'), "The number is valid!")
    
    def test_return_invalid_credit_check(self):
        """When you call credit_check(), it should return valid or not"""
        self.assertEqual(credit_check('5541801923795240'), "The number is invalid!")
        self.assertEqual(credit_check('4024007106512380'), "The number is invalid!")
        self.assertEqual(credit_check('6011797668868728'), "The number is invalid!")

    def test_return_invalid_credit_length(self):
        """When you call credit_check(), it should return credit length valid or not"""
        self.assertEqual(credit_check('55418019530'), ("The credit number length is invalid!", 11))
        self.assertEqual(credit_check('12345'), ("The credit number length is invalid!", 5))
        self.assertEqual(credit_check('21332398739827131231'), ("The credit number length is invalid!", 20))

# print(credit_check('5541808923795240') == "The number is valid!")
# print(credit_check("4024007136512380") == "The number is valid!")
# print(credit_check("6011797668867828") == "The number is valid!")

# print(credit_check("5541801923795240") == "The number is invalid!")
# print(credit_check("4024007106512380") == "The number is invalid!")
# print(credit_check("6011797668868728") == "The number is invalid!")

if __name__ == '__main__':
    unittest.main()
