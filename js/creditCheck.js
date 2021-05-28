exports.creditCheck = function(str) {
  //make str to integer arrays
  let otherTwoArr = everyOtherTwoNum(numArr);
  let addTwoDigitsValueArr = addTwoDigits(otherTwoArr);
  //make other array that will store other two numbers multipled two
  // iterate through numArr 
    //starting index 0 every  other 2 will be multiplied by two
  // iterate through othertwonumbersmultiped
    //starting index if the index num is greater than 9
     // add that each number
  return moduloTen(addTwoDigitsValueArr);
}
//helper fuction that will take number array
// and return new array of every other number multipled by two

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
function addInteger(num) {
  let arrayInt = Array.from(String(num), Number)
  let sum = 0;
  for (let i = 0; i < arrayInt.length; i++) {
    sum += arrayInt[i];
  }
  return sum;
  
}

function moduloTen(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+= arr[i];
  }
  return (sum % 10 === 0) ? true : false;
}

