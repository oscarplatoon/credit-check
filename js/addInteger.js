function addInteger(num) {
  let arrayInt = Array.from(String(num), Number)
  let sum = 0;
  for (let i = 0; i < arrayInt.length; i++) {
    sum += arrayInt[i];
  }
  return sum;
  
}
module.exports = addInteger;