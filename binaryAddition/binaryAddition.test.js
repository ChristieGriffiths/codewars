const addBinary = require ('./binaryAddition')

describe('addBinary', () => {
  it('takes two numbers and returns their sum in binary', () => {
  expect(addBinary(1, 1)).toEqual('10')
  })
})