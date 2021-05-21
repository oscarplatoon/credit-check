const creditCheck = require('./creditCheck');

test('returns a string', () => {
  expect(typeof(creditCheck('12345678765432'))).toBe("string");
})

test('works for test case 1', () => {
  expect(creditCheck('5541808923795240')).toBe("The number is valid!");
})

test('works for test case 2', () => {
  expect(creditCheck('4024007136512380')).toBe("The number is valid!");
})

test('works for test case 3', () => {
  expect(creditCheck('5541801923795240')).toBe("The number is invalid!");
})

test('works for test case 4', () => {
  expect(creditCheck('4024007106512380')).toBe("The number is invalid!");
})