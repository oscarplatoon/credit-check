const { test, expect } = require('@jest/globals');
const addInteger = require('./addInteger');
test('will add two integers in a number', () => {
  expect(addInteger(12)).toBe(3);
  expect(addInteger(16)).toBe(7)
  expect(addInteger(18)).toBe(9)
  expect(addInteger(19)).toBe(10)
  expect(addInteger(11)).toBe(2)
  expect(addInteger(13)).toBe(4)
})