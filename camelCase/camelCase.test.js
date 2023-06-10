describe('camel case function', () => {
  it('takes an empty string and returns the same', () => {
    const result = toCamelCase("");
    expect(result).toEqual("");
  })
  it('capitalizes a string', () => {
    const result = toCamelCase("the");
    expect(result).toEqual("the");
  })
  it('capitalizes a string after each dash', () => {
    const result = toCamelCase("the-stealth-warrior");
    expect(result).toEqual("theStealthWarrior");
  })
  it('capitalizes a string after each underscore', () => {
    const result = toCamelCase("the_stealth_warrior");
    expect(result).toEqual("theStealthWarrior");
  })
  it('capitalizes a string after each underscore and dash', () => {
    const result = toCamelCase("the_stealth-warrior");
    expect(result).toEqual("theStealthWarrior");
  })

});




const toCamelCase = require('./camelCase')