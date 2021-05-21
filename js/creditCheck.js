function creditCheck(accountIdentifierString) {
  let accountIdentifierStringArray = accountIdentifierString.split("");
  let accountIdentifierNumArray = accountIdentifierStringArray.map(x => Number(x))

  let doubledArray = []
  for (index = 0; index < accountIdentifierNumArray.length; index++) {
    if (index % 2 === 0) {
      doubledArray.push(accountIdentifierNumArray[index] * 2)
    } else {
      doubledArray.push(accountIdentifierNumArray[index])
    }
  }

  let singleDigitsArray = []
  for (index = 0; index < doubledArray.length; index++) {
    let currentNum = doubledArray[index];
    if (currentNum > 9) {
      singleDigitsArray.push(Math.floor(currentNum / 10) + (currentNum % 10));
    } else {
      singleDigitsArray.push(currentNum);
    }
  }

  let sum = 0
  for (index = 0; index < singleDigitsArray.length; index++) {
    sum += singleDigitsArray[index];
  }

  if (sum % 10 === 0) {
    return "The number is valid!"
  } else {
    return "The number is invalid!"
  }
}

creditCheck("234898765456789")

module.exports = creditCheck;