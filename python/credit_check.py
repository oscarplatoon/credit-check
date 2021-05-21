def credit_check(str):
    account_identifier_str_list = list(str)  # turns str into list of individual characters

    account_identifier_num_list = [int(element) for element in account_identifier_str_list]

    doubled_list = []
    for index, element in enumerate(account_identifier_num_list):
        if (index % 2 == 0):
            doubled_list.append(element * 2)
        else:
            doubled_list.append(element)
    
    single_digits_list = []
    for num in doubled_list:
        if num > 9:
            single_digits_list.append(num // 10 + num % 10)
        else:
            single_digits_list.append(num)
    
    results_summed = 0
    for num in single_digits_list:
        results_summed += num
    
    if (results_summed % 10 == 0):
        return "The number is valid!"
    else:
        return "The number is invalid!"


# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"