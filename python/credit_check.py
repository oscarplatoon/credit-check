# import numpy as np

def credit_check(str):
    CREDIT_LENGTH = 16

    # Check credit length: 16
    credit_len = len(str)

    if (CREDIT_LENGTH != credit_len):
        return ('The credit number length is invalid!', credit_len)

    # Seperating into single string
    str_arr = []
    for i in (str):
        # print(i)
        str_arr.append(i)

    # Converting string into int
    int_list = list(map(int, str_arr))
    # print(int_list)

    # Right to left double ever other digit
    # If digit > 9 return digit - 9
    new_list = []
    for i in range(0, len(int_list)):
        if (i % 2 == 0):
            new_list.append(int_list[i]*2)
            if (new_list[i] > 9):
                new_list[i] = (new_list[i] - 9)
        else:
            new_list.append(int_list[i])
    
    # print(new_list)
    
    # Sum of list
    total_sum = sum(new_list)

    if (total_sum % 10 == 0):
        return 'The number is valid!'
    else:
        return 'The number is invalid!'

    # pass

# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"