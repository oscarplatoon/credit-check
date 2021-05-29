exports.creditCheck = function(str) {

//   ## Premise

// The Luhn algorithm is a check-summing algorithm best known for checking the validity of credit card numbers.



// The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This full account number must pass the following test:

// * from the rightmost digit, which is the check digit, moving left, double the value of every other digit
// * if product of this doubling operation is greater than 9 (e.g., 7 * 2 = 14), then sum the digits of the products (e.g., 10: 1 + 0 = 1, 14: 1 + 4 = 5).
// * take the sum of all the digits
// * if and only if the total modulo 10 is equal to 0 then the number is valid

}

console.log(this.creditCheck(`5541808923795240`))