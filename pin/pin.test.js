const validatePIN = require('./pin')

describe('uniqueInOrder', () => {
  it('returns false to empty input', () =>{
    const input = ""
    expect(validatePIN(input)).toEqual(false)
  });
  it('returns false to single digit input', () =>{
    const input = "1"
    expect(validatePIN(input)).toEqual(false)
  });
  it('returns true to 4 digit input', () =>{
    const input = "1234"
    expect(validatePIN(input)).toEqual(true)
  });
  it('returns false to 6 digit float input', () =>{
    const input = "1.23456"
    expect(validatePIN(input)).toEqual(false)
  });
  it('returns false to 6 digit float input', () =>{
    const input = "1.23456"
    expect(validatePIN(input)).toEqual(false)
  });
  it('returns false to 6 digit float input', () =>{
    const input = "1.23456"
    expect(validatePIN(input)).toEqual(false)
  });
  it('returns true to 6 digit input', () =>{
    const input = "123456"
    expect(validatePIN(input)).toEqual(true)
  });
  it('returns false to 6 digit float input', () =>{
    const input = "1.23456"
    expect(validatePIN(input)).toEqual(false)
  });
});