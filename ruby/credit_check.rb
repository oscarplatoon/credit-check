def check_credit(str)


	result_array = Array.new
 	reversed_cc_num  = str.reverse
 	reversed_int = [reversed_cc_num.to_i]
		reversed_int.each do |cc_num_char|
			for cc_num_char in reversed_int
				p 'hi'
				# doubled_index = reversed_cc_num[cc_num_char].to_i * 2
				# if doubled_index > 9
				# 	result_array.push(doubled_index % 10 + 1)
				# else 
				# 			result_array.push(doubled_index)
				# end		 	
			end
			
	end

end

# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"

