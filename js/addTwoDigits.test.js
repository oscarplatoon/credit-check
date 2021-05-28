const { test, expect } = require('@jest/globals');
const { add } = require('lodash');
const addTwoDigits = require('./addTwoDigits');
test('will add numbers greater than 9', () => {
  const testOneArr = [1,5,8,1,7,0,7,9,4,3,5,9,1,2,8,0];
  const testTwoArr = [8,0,4,4,0,0,5,1,6,6,1,1,4,3,7,0];
  const testThreeArr = [3,0,2,1,5,9,5,6,3,8,7,6,5,8,4,8];
  const testFourArr = [1,5,8,1,7,0,2,9,4,3,5,9,1,2,8,0];
  const testFiveArr = [8,0,4,4,0,0,5,1,0,6,1,1,4,3,7,0];
  const testSixArr = [3,0,2,1,5,9,5,6,3,8,7,6,7,7,4,8];
  expect(addTwoDigits([10,5,8,1,16,0,16,9,4,3,14,9,10,2,8,0])).toEqual(testOneArr);
  expect(addTwoDigits([8,0,4,4,0,0,14,1,6,6,10,1,4,3,16,0])).toEqual(testTwoArr);
  expect(addTwoDigits([12,0,2,1,14,9,14,6,12,8,16,6,14,8,4,8])).toEqual(testThreeArr);
  expect(addTwoDigits([10,5,8,1,16,0,2,9,4,3,14,9,10,2,8,0])).toEqual(testFourArr);
  expect(addTwoDigits([8,0,4,4,0,0,14,1,0,6,10,1,4,3,16,0])).toEqual(testFiveArr);
  expect(addTwoDigits([12,0,2,1,14,9,14,6,12,8,16,6,16,7,4,8])).toEqual(testSixArr);
})