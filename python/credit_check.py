def credit_check(str_input):
    
    temp_account_list = []
    temp_account_list[:] = str_input
    sum = 0
    account_list = [int(d) for d in temp_account_list]
    

    for i in range(len(account_list)-2, -1, -2):
        account_list[i] *= 2
        if account_list[i] >= 10:
            
            temp_list = [int(d) for d in str(account_list[i])]
            
            temp_num = 0
            for n in temp_list:
                temp_num += n
            
            sum += temp_num
        else:
            sum += account_list[i]
        

    for i in range(len(account_list)-1, -1, -2):
            sum += account_list[i]
            

    is_valid = sum % 10 == 0
    valid = "The number is valid!" if is_valid else "The number is invalid!"
    return valid
        
    
                
            

    


#print(credit_check("12345690"))

# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"

