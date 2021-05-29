# Can you translate this driver code to unit tests?
import unittest
from credit_check import credit_check, is_double, sum_equal_70

class TestStringMethods(unittest.TestCase):

    def test_double_every_other(self):
        self.assertEqual(is_double('1111111'), '1212121')
    def sum_equal_70(self):
        self.assertEqua(sum_equal_70('102040'), 70)
    def credit_check(self):
        self.assertEqual(credit_check('5541808923795240'), 'The number is valid!')
    def credit_check(self):
        self.assertEqual(credit_check("4024007136512380"), 'The number is valid!')
    def credit_check(self):
        self.assertEqual(credit_check("6011797668867828"), 'The number is valid!')
    def credit_check(self):
        self.assertEqual(credit_check("5541801923795240"), "The number is invalid!")
    def credit_check(self):
        self.assertEqual(credit_check("4024007106512380"), "The number is invalid!")
    def credit_check(self):
        self.assertEqual(credit_check("6011797668868728"), "The number is invalid!")
    


if __name__ == '__main__':
    unittest.main()

# print(credit_check('5541808923795240') == "The number is valid!")
# print(credit_check("4024007136512380") == "The number is valid!")
# print(credit_check("6011797668867828") == "The number is valid!")

# print(credit_check("5541801923795240") == "The number is invalid!")
# print(credit_check("4024007106512380") == "The number is invalid!")
# print(credit_check("6011797668868728") == "The number is invalid!")
