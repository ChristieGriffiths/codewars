const expressionMatter = require('./expressionMatter')

describe('expressionMatter', () => {
  it('returns highest achievable result', () => {
    expect(expressionMatter(1, 2, 3)).toEqual(9)
  })
  it('returns highest achievable result', () => {
    expect(expressionMatter(2, 1, 1)).toEqual(4)
  })
  it('returns highest achievable result', () => {
    expect(expressionMatter(5, 1, 3)).toEqual(20)
  })
})