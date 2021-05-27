def credit_check(str):
    if not str.isnumeric():
        return('invalid input')
    reverse_s = str[::-1]
    sum = 0
    for count,value in enumerate(reverse_s):
        num = int(value)
        if (count % 2 != 0):
            num *= 2
            if (num > 9):
                num -= 9
        sum += num

    
    if(sum % 10 == 0):
        return("The number is valid!")
    else:
        return("The number is invalid!")

            


