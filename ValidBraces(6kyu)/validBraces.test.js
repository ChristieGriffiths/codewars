const validBraces = require('./validBraces');

describe('validBraces', () => {
  it('returns true when giving a pair of matching braces', () => {
    const result = validBraces('()')
    expect(result).toEqual(true)
  })
  it('returns false when giving a pair of non-matching braces', () => {
    const result = validBraces('(}')
    expect(result).toEqual(false)
  })
})