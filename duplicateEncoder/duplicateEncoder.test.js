const duplicateEncode = require('./duplicateEncoder')

describe('duplicateEncoder', () => {
  it('takes a string with no duplicated characters', () =>{
    const input = "a"
    expect(duplicateEncode(input)).toEqual("(")
  });
});