const snail = require ("./snail")

describe("snail", () => {
  it("takes an array of an empty array and returns the empty array", () => {
    input = [[]]
    expect(snail(input)).toEqual([])
  })
  it("takes an array of a non-empty array and returns the inside array", () => {
    input = [[1]]
    expect(snail(input)).toEqual([1])
  })
})