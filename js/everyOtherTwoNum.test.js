const { expect } = require('@jest/globals');
const { every } = require('lodash');
const everyOtherTwoNum = require('./everyOtherTwoNum');
test('every two other number in array multiply by 2:', () => {
//5541808923795240
//4024007136512380
//6011797668867828
//5541801923795240
//4024007106512380
//6011797668868728
  const testOneArr = [10,5,8,1,16,0,16,9,4,3,14,9,10,2,8,0];
  const testTwoArr = [8,0,4,4,0,0,14,1,6,6,10,1,4,3,16,0];
  const testThreeArr = [12,0,2,1,14,9,14,6,12,8,16,6,14,8,4,8];
  const testFourArr = [10,5,8,1,16,0,2,9,4,3,14,9,10,2,8,0];
  const testFiveArr = [8,0,4,4,0,0,14,1,0,6,10,1,4,3,16,0];
  const testSixArr = [12,0,2,1,14,9,14,6,12,8,16,6,16,7,4,8];
  expect(everyOtherTwoNum('5541808923795240')).toEqual(testOneArr);
  expect(everyOtherTwoNum('5541808923795240')).not.toBe(testOneArr);
  expect(everyOtherTwoNum('4024007136512380')).toEqual(testTwoArr);
  expect(everyOtherTwoNum('4024007136512380')).not.toBe(testTwoArr);
  expect(everyOtherTwoNum('6011797668867828')).toEqual(testThreeArr);
  expect(everyOtherTwoNum('6011797668867828')).not.toBe(testThreeArr);
  expect(everyOtherTwoNum('5541801923795240')).toEqual(testFourArr);
  expect(everyOtherTwoNum('5541801923795240')).not.toBe(testFourArr);
  expect(everyOtherTwoNum('4024007106512380')).toEqual(testFiveArr);
  expect(everyOtherTwoNum('4024007106512380')).not.toBe(testFiveArr);
  expect(everyOtherTwoNum('6011797668868728')).toEqual(testSixArr);
  expect(everyOtherTwoNum('6011797668868728')).not.toBe(testSixArr);
})
