require_relative 'credit_check'

puts check_credit('5541808923795240') == "The number is valid!"
puts check_credit("4024007136512380") == "The number is valid!"
puts check_credit("6011797668867828") == "The number is valid!"

puts check_credit("5541801923795240") == "The number is invalid!"
puts check_credit("4024007106512380") == "The number is invalid!"
puts check_credit("6011797668868728") == "The number is invalid!"
