const addInteger = require('./addInteger')

function addTwoDigits(numArr) {
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    let number = numArr[i];
    if (number > 9) {
      result.push(addInteger(number));
    } else {
      result.push(number);
    }
  }
  return result;
}
module.exports = addTwoDigits;