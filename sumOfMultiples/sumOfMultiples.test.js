const sumMul = require('./sumOfMultiples')

describe('sumMul', () => {
  it('returns sum of all multiples below n', () => {
    expect(sumMul(2, 9)).toEqual(20)
  })
  it('returns sum of all multiples below n', () => {
    expect(sumMul(3, 13)).toEqual(30)
  })
  it('returns sum of all multiples below n', () => {
    expect(sumMul(4, 123)).toEqual(1860)
  })
  it('invalid if m is less than or equal to 0', () => {
    expect(sumMul(4, 0)).toEqual("INVALID")
  })
})