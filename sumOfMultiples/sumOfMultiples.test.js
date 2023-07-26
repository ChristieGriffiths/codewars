const sumMul = require('./sumOfMultiples')

describe('sumMul', () => {
  it('returns sum of all multiples below n', () => {
    expect(sumMul(2, 9)).toEqual(20)
  })
  it('returns sum of all multiples below n', () => {
    expect(sumMul(3, 13)).toEqual(30)
  })
})