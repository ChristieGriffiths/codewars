const sumMul = require('./sumOfMultiples')

describe('sumMul', () => {
  it('returns sum of all multiples below n', () => {
    expect(sumMul(2, 4)).toEqual(12)
  })
})