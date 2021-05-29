# Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
# 2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
# Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
# Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70

# function that takes in str of numbers
# turn string into list of individual numbers

def credit_check(str):
    list_of_str = list(str)
# convert str list into number list
    list_of_int = list(map(int,list_of_str))
# 2x every other digit starting from right_most_digit
    times_every_other_list = [x*2 if index % 2 == 0 else x for index, x in enumerate(list_of_int)]
# make new list with summed >= 10 numbers
# probably a way smoother and efficient way of doing this...
    sum_over_10_list = []
    for x in times_every_other_list:
        if x >= 10:
            total = 0
            while x > 0:
                rem = x % 10
                total += rem
                x = int(x/10)
            sum_over_10_list.append(total)
        else:
            sum_over_10_list.append(x)
# sum up list
    sum = 0
    for x in sum_over_10_list:
        sum += x
# if sum == 70 return 'The number is valid!'
    if sum == 70:
        return 'The number is valid!'

# if sum does not == 70 return 'The number is invalid!'
    else:
        return 'The number is invalid!'

# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"

# print(credit_check('5541808923795240'))