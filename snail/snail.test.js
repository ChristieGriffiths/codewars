const snail = require ("./snail")

describe("snail", () => {
  it("takes an array of an empty array and returns the empty array", () => {
    input = [[]]
    expect(snail(input)).toEqual([])
  })
})