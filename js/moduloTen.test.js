const { test, expect } = require('@jest/globals');
const moduloTen = require('./moduloTen');
test('will return true if it is divisble by 10', ()=> {
  expect(moduloTen([1,5,8,1,7,0,7,9,4,3,5,9,1,2,8,0])).toBe(true);
  expect(moduloTen([8,0,4,4,0,0,5,1,6,6,1,1,4,3,7,0])).toBe(true);
  expect(moduloTen([3,0,2,1,5,9,5,6,3,8,7,6,5,8,4,8])).toBe(true);
  expect(moduloTen([1,5,8,1,7,0,2,9,4,3,5,9,1,2,8,0])).toBe(false);
  expect(moduloTen([8,0,4,4,0,0,5,1,0,6,1,1,4,3,7,0])).toBe(false);
  expect(moduloTen([3,0,2,1,5,9,5,6,3,8,7,6,7,7,4,8])).toBe(false);
})