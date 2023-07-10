const addBinary = require ('./binaryAddition')

describe('addBinary', () => {
  it('takes two numbers and returns their sum in binary', () => {
  expect(addBinary(1, 1)).toEqual('10')
  })
  it('takes two numbers and returns their sum in binary', () => {
  expect(addBinary(1, 0)).toEqual('1')
  })
  it('takes two numbers and returns their sum in binary', () => {
  expect(addBinary(1, 1)).toEqual('10')
  })
  it('takes two numbers and returns their sum in binary', () => {
  expect(addBinary(5, 9)).toEqual('1110')
  })
})