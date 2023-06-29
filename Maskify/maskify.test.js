const maskify = require('./maskify')

describe('maskify', () => {
  it('returns an empty string when recieves an empty string', () => {
    const result = maskify("");
    expect(result).toEqual("");
  })
  it('if string is less than four numbers, it returns the string unaltered', () => {
    const result = maskify("1234");
    expect(result).toEqual("1234");
  })
  it('replaces all chars with hashes but for final 4 chars', () => {
    const result = maskify("12345");
    expect(result).toEqual("#2345");
  })
  it('replaces all chars with hashes but for final 4 chars', () => {
    const result = maskify("123456789");
    expect(result).toEqual("#####6789");
  })

})