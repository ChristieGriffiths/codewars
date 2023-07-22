const validatePIN = require('./pin')

describe('uniqueInOrder', () => {
  it('returns false to empty input', () =>{
    const input = ""
    expect(validatePIN(input)).toEqual(false)
  });
});