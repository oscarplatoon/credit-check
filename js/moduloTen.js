function moduloTen(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+= arr[i];
  }
  return (sum % 10 === 0) ? true : false;
}
module.exports = moduloTen;