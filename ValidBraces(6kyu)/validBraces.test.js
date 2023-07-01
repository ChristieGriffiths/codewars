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
    it('returns true when giving 2 pairs of matching braces', () => {
    const result = validBraces('()[]')
    expect(result).toEqual(true)
  })
    it('returns false when giving a pair of matching & non-matching braces', () => {
    const result = validBraces('(){)')
    expect(result).toEqual(false)
  })
})