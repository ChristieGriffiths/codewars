const isIsogram = require('./isIsogram')

describe("isIsogram", () => {
  it("returns true when no characters repeat", () => {
    expect(isIsogram('a')).toEqual(true)
  })
   it("returns false when characters are repeated", () => {
    expect(isIsogram('aa')).toEqual(false)
  })
   it("returns true when no characters are repeated", () => {
    expect(isIsogram('Dermatoglyphics')).toEqual(true)
  })
})