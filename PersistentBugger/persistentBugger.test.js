const persistence = require('./persistentBugger')

describe("persistentBugger", () => {
  it("returns a multiplicative persistence of a 1 digit number", () => {
    expect(persistence(1)).toEqual(0)
  })
  it("returns a multiplicative persistence of a 2 digit number", () => {
    expect(persistence(12)).toEqual(1)
  })
  it("returns a multiplicative persistence of a 3 digit number", () => {
    expect(persistence(999)).toEqual(4)
  })
})