const expressionMatter = require('./expressionMatter')

describe('expressionMatter', () => {
  it('returns highest achievable result', () => {
    expect(expressionMatter(1, 2, 3)).toEqual(9)
  })
})