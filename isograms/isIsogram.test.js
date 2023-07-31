const isIsogram = require('./isIsogram')

describe("isIsogram", () => {
  it("returns true when no characters repeat", () => {
    expect(isIsogram('a')).toEqual(true)
  })
})