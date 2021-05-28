// Can you translate this driver code to unit tests?
const { test } = require('@jest/globals');
const creditCheck = require('./creditCheck');
test('will return true if its credit check',() => {
  expect(creditCheck("5541808923795240")).toBe("The number is valid!")
  expect(creditCheck("4024007136512380")).toBe("The number is valid!")
  expect(creditCheck("6011797668867828")).toBe("The number is valid!")
  expect(creditCheck("5541801923795240")).toBe("The number is invalid")
  expect(creditCheck("4024007106512380")).toBe("The number is invalid")
  expect(creditCheck("6011797668868728")).toBe("The number is invalid")
})

