const duplicateEncode = require('./duplicateEncoder')

describe('duplicateEncoder', () => {
  it('takes a string with no duplicated characters', () =>{
    const input = "a"
    expect(duplicateEncode(input)).toEqual("(")
  });
  it('takes a string with duplicated characters', () =>{
    const input = "aa"
    expect(duplicateEncode(input)).toEqual("))")
  });
  it('takes a string with duplicated characters', () =>{
    const input = "aab"
    expect(duplicateEncode(input)).toEqual("))(")
  });
});