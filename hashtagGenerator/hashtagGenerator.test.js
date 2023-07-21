const generateHashtag = require('./hashtagGenerator')

describe('uniqueInOrder', () => {
  it('takes an empty string and returns false', () =>{
    const input = ""
    expect(generateHashtag(input)).toEqual(false)
  });
  it('hashtags a string', () =>{
    const input = "Test"
    expect(generateHashtag(input)).toEqual("#Test")
  });
});