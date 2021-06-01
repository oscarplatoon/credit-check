# Can you translate this driver code to unit tests?

from credit_check import credit_check
import unittest

class CreditCheckTest(unittest.TestCase):

    def test_type(self):
        self.assertEqual(type(credit_check('string')), str)

    def test_pos1(self):
        self.assertEqual(credit_check('5541808923795240'), "The number is valid!")

    def test_pos2(self):
        self.assertEqual(credit_check("4024007136512380"), "The number is valid!")
    
    def test_pos3(self):
        self.assertEqual(credit_check("6011797668867828"), "The number is valid!")

    def test_neg1(self):
        self.assertEqual(credit_check("5541801923795240"), "The number is invalid!")

    def test_neg2(self):
        self.assertEqual(credit_check("4024007106512380"), "The number is invalid!")
    
    def test_neg3(self):
        self.assertEqual(credit_check("6011797668868728"), "The number is invalid!")

    

if __name__ == '__main__':
    unittest.main()



# print(credit_check('5541808923795240') == "The number is valid!")
# print(credit_check("4024007136512380") == "The number is valid!")
# print(credit_check("6011797668867828") == "The number is valid!")

# print(credit_check("5541801923795240") == "The number is invalid!")
# print(credit_check("4024007106512380") == "The number is invalid!")
# print(credit_check("6011797668868728") == "The number is invalid!")
