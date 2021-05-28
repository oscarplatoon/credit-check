const addTwoDigits = require("./addTwoDigits");
const everyOtherTwoNum = require("./everyOtherTwoNum");
const moduloTen = require("./moduloTen");

function creditCheck(str) {
  let everyOtherTwoArr = everyOtherTwoNum(str);
  let addTwoDigitsValueArr = addTwoDigits(everyOtherTwoArr);
  let validOrNotStr = ""; 
  if(moduloTen(addTwoDigitsValueArr)) {
    validOrNotStr += "The number is valid!";
  } else {
    validOrNotStr += "The number is invalid"
  }
  return validOrNotStr;
}
module.exports = creditCheck; 
