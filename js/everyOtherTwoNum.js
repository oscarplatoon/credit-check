function everyOtherTwoNum(strNum) {
  let numArr = strNum.split('').map(num => Number(num));
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
      result.push(numArr[i] * 2);
    } else {
      result.push(numArr[i]);
    }
  }
  return result;
}
module.exports = everyOtherTwoNum;