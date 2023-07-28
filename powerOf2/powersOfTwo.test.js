const powersOfTwo = require('./powersOfTwo')

describe('powersOfTwo', () => {
  it('returns [1] for an input of 0 ', () => {
    expect(powersOfTwo(1)).toEqual([1])
  })
})