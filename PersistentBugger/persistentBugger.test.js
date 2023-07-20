const persistence = require('./persistentBugger')

describe("persistentBugger", () => {
  it("takes and returns a single digit", () => {
    expect(persistence(1)).toEqual(1)
  })
  it("returns a multiplicative persistence of a 2 digit number", () => {
    expect(persistence(12)).toEqual(2)
  })
  it("returns a multiplicative persistence of a 3 digit number", () => {
    expect(persistence(999)).toEqual(2)
  })
})